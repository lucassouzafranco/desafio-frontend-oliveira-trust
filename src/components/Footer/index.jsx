import React from 'react';
import './Footer.css';
import { Icon } from "@iconify/react";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";


function Footer() {
  return (
    <div className='footerContainer'>
      <div className='developerName'>
        <p>Desenvolvido por Lucas Souza Franco</p>
      </div>
      <div className='iconsContainer'>
        <a href='https://www.linkedin.com/in/lucas-souza-franco/'>
          <SiLinkedin className='icon'></SiLinkedin>
        </a>
        <a href='https://linktr.ee/lucassouzafranco'>
          <Icon icon="simple-icons:linktree" className='icon' />
        </a>
        <a href='https://github.com/lucassouzafranco'>
          <GoMarkGithub className='icon' />
        </a>
      </div>
    </div>
  )
}

export default Footer;