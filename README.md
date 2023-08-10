## 📑 Sobre o Projeto

Este projeto consiste em uma plataforma de gerenciamento de portfólio desenvolvida como desafio técnico da Oliveira Trust. Uma API de usuários fornecida no próprio projeto e uma API externa de conversão de moedas (https://docs.awesomeapi.com.br/api-de-moedas) foram utilizadas. Este desafio foi desenvolvido por 1 pessoa (front-end) e, posteriormente, enviado para lideranças técnicas da organização.

O objetivo principal do projeto é construir uma aplicação CRUD com as principais funcionalidades das plataformas de gerenciamento de portfolio, como categorias por conversão de câmbio, busca de carteiras e filtragem. Além disso, também há funcionalidades como a criação de novos usuários/carteiras.

## 💼 Regras de Negócio

1. O aplicativo deve permitir ao usuário fazer conversões entre a moeda de origem (Real Brasileiro - BRL) e a moeda de destino (Bitcoin - BTC)
2. Ao criar ou editar uma carteira, o usuário deve poder inserir um valor de compra em sua moeda de origem (BRL), tendo como resultado o valor equivalente adquirido na criptomoeda de destino (BTC).
   
![conversao real -> btc](https://github.com/lucassouzafranco/desafio-frontend-oliveira-trust/blob/master/conversao_real_btc.gif)




## ✨ Decisões Tomadas

Durante o desenvolvimento do projeto, foram tomadas algumas decisões importantes para garantir a qualidade, organização e eficiência do código. Abaixo estão as decisões tomadas e o motivo pelo qual foram escolhidas.

### 1. Utilização do React.js:
   - O React.js é uma biblioteca JavaScript para a construção de interfaces de usuário. Ele permite a criação de componentes reutilizáveis e a fácil manipulação do DOM. O React.js foi escolhido para este projeto devido à sua popularidade, grande comunidade de desenvolvedores e sua capacidade de criar interfaces interativas e responsivas.
     
### 2. Context API:
   - A Context API é uma funcionalidade do React que permite o compartilhamento de estado entre componentes sem a necessidade de passar props manualmente através da árvore de componentes. Ela cria um contexto que pode ser acessado por componentes filhos que estão dentro desse contexto.
     
### 3. React-CSV:
   - O React-CSV é uma biblioteca que permite exportar dados de uma lista em formato CSV. Essa biblioteca foi utilizada para exportar os dados da lista de carteiras em formato CSV. Com o React-CSV, o usuário pode baixar um arquivo CSV contendo as informações das carteiras listadas na tabela, permitindo uma fácil visualização e manipulação dos dados fora da aplicação.
     
     ![exportar para CSV ](https://github.com/lucassouzafranco/desafio-frontend-oliveira-trust/blob/master/export-csv.gif)

     
### 4. React-Toastify:
   - O React-Toastify é uma biblioteca que permite mostrar notificações (toasts) na aplicação de forma elegante e amigável. Neste projeto, ela utilizada essa biblioteca para exibir mensagens de sucesso, erro ou alerta ao usuário em diferentes situações, como ao adicionar uma nova carteira, editar um registro ou ao realizar operações de conversão de moedas. O uso do React-Toastify tornou as notificações mais agradáveis visualmente, melhorando a experiência do usuário.

     ![toast](https://github.com/lucassouzafranco/desafio-frontend-oliveira-trust/blob/master/toastfy.gif)
     
### 5. Modais Feitos Manualmente:
   - Para implementar as funcionalidades de adicionar e editar carteiras, bem como exibir informações detalhadas dos registros em um modal, os modais foram criados manualmente. O uso de modais feitos manualmente permitiu maior controle sobre o design e comportamento dos modais, adaptando-os às necessidades específicas do projeto "Desafio Oliveira Trust". A criação manual dos modais também proporcionou uma melhor integração com o restante da aplicação e facilitou a reutilização do código em diferentes partes do projeto.



## 📚 Organização do Código

A estrutura de pastas do projeto é organizada da seguinte forma:

├── public

│   └── ...

│

└── src

   ├── components

   │   

   │   

   ├── contexts

   │

   |

   ├── pages

Na pasta public, encontramos os arquivos estáticos relacionados à aplicação. Todos esses arquivos são acessíveis publicamente.

Dentro da pasta src, encontramos a pasta que contém os componentes da aplicação, outra com os contextos e mais uma para comportar as páginas.



## 🎯 Funcionalidades

As funcionalidades principais do projeto incluem:

1. Listagem de Carteiras: Os dados da API de usuários serão exibidos em uma tabela, contendo todas as informações relevantes fornecidas pela API.
2. Botões de Editar e Deletar: Para cada elemento da tabela, haverá botões funcionais de editar (em um modal) e deletar.
3. Adição de Novas Carteiras: É possível adicionar novas carteiras através de um modal, onde o usuário poderá inserir todas as informações necessárias.
4. Paginação da Listagem: A listagem das tabelas é paginada para melhorar a visualização e experiência  do usuário.
![pagination](https://github.com/lucassouzafranco/desafio-frontend-oliveira-trust/blob/master/pagination.gif)
5. Filtro para Listagem: Será possível aplicar filtros para refinar a listagem. É possível filtrar carteiras através do nome, sobrenome e email do usuário. Ainda é possível visualizar apenas as carteiras que possuem 1 bitcoin ou mais.


## 💻 Instruções de Instalação e de Uso

Para começar a usar o servidor JSON localmente, você precisa ter o `json-server` instalado em seu ambiente de desenvolvimento. Caso ainda não tenha, você pode instalá-lo usando o seguinte comando no terminal:

```bash
npm install -g json-server
```

Também será necessário instalar as dependências do projeto executando:
```bash
npm install
```

Após a instalação, você pode usar o comando a seguir para iniciar o servidor JSON e observar as alterações em um arquivo de dados específico (data.json)

```bash
json-server --watch api/data.json
```

Isso iniciará o servidor JSON e o vinculará ao arquivo data.json localizado na pasta api. O servidor estará disponível em http://localhost:3000/users por padrão.

Após ter a API em execução, você pode prosseguir com a execução da aplicação que consome os dados fornecidos pela API. Opte sempre por esta ordem de execução: Api e depois projeto.   

```bash
npm start
```

A aplicação em React.js no endereço:

http://localhost:3001


## 🤴🏾 Autor

Nome: Lucas Souza

E-mail: lucassouzafranco1@gmail.com

Perfil no GitHub: https://github.com/lucassouzafranco

Perfil no LinkedIn: https://www.linkedin.com/in/lucas-souza-franco/
=======
## Boa sorte! 🚀
