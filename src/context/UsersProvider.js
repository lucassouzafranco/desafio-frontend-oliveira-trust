import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersContext from './UsersContext'; // Import the UsersContext

const apiUrl = 'http://localhost:3000';

export default function UsersProvider({ children }) {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      if (response.status === 200) {
        setIsDataFetched(true);
        setUsersData(response.data);
        setNumberOfUsers(response.data.length);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const UsersContextValue = {
    usersData,
    fetchUsers,
    numberOfUsers,
  };

  return (
    <UsersContext.Provider value={UsersContextValue}>
      {children}
    </UsersContext.Provider>
  );
}
