<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
<p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIAOtqQ5is5vwbcEn0ZahZfMxz1QIeAYtFfnLdkCXu1sqAGbnX" width="300">
 </p>

## Desafio para candidatos à vaga de Desenvolvedor Front End (Jr/Pleno/Sênior).
Olá caro desenvolvedor, nosso principal objetivo é conseguir ver a lógica implementada independente
da sua experiência, framework ou linguagem utilizada para resolver o desafio. Queremos avaliar a sua
capacidade em aplicar as regras de négocios na aplicação, separar as responsabilidades e ter um código
legível para outros desenvolvedores, as instruções nesse projeto são apenas um direcional para entregar
o desafio mas pode ficar livre para resolver da forma que achar mais eficiente. 🚀

Não deixe de enviar o seu teste mesmo que incompleto!

## Tecnologias a serem utilizadas:
* Vuejs (Fornecemos uma estrutura básica do aplicativo) 
* CSS
* HTML

## Entrega:
Para iniciar o teste, faça um fork deste repositório, crie uma branch com o seu nome completo
e depois envie-nos o pull request. 
Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado
fazer o pull request.

Envie também seu LinkedIn ou currículo para vagas@oliveiratrust.com.br.

## O que vamos avaliar:
- Legibilidade do código
- Percepção da identidade do produto
- Modularização
- Lógica para aplicar a regra de negócio
- Implementação das APIs

## Instruções para o desafio:
Você deve implementar um aplicativo feito com Vuejs utilizando uma API de usuários fornecida no próprio projeto e uma API externa de conversão de moedas.

## Obrigatórios:
- Acompanhar identidade visual do [protótipo fornecido](https://www.figma.com/proto/AO265OINopUSibxX8Dd4A6/Desafio-Front-End?page-id=0%3A1&node-id=2%3A362&viewport=314%2C48%2C0.15&scaling=contain&starting-point-node-id=2%3A362)
- Listar os dados da API de usuários em uma tabela
    - Deve conter todos os dados que achar relevante pela API (http://localhost:3004/users)
    - Botões funcionais de editar(modal) e deletar registro p/ cada elemento
- Possibilidade de adicionar novas carteiras através de um modal
- Paginação da listagem (Você pode usar [esquemas](https://github.com/typicode/json-server#paginate) do json-server)
- Adicionar um filtro para listagem (Você pode usar [esquemas](https://github.com/typicode/json-server#full-text-search) do json-server)
- Conversão do saldo Bitcoin (BTC) de cada carteira para moeda escolhida. Ex.: BTC para BRL, USD, etc

Pode utilizar qualquer API para conversão de moedas, mas recomendamos essa aqui: [https://docs.awesomeapi.com.br/api-de-moedas](https://docs.awesomeapi.com.br/api-de-moedas) pela facilidade e boa documentação.

#### Exemplo de conversão da moeda:
- **Parâmetros de entrada**:
    - Moeda de origem: Bitcoin (BTC)
    - Moeda de destino: Real (BRL)
    - Valor para conversão ex.: BTC 0.2242509
- **Parâmetros de saída**:
    - Moeda de origem: Bitcoin (BTC)
    - Moeda de destino: Real (BRL)
    - Valor para conversão ex.: BTC 0.2242509
    - Valor comprado em "Moeda de destino" ex.: R$ 53.054,00
- **Critérios de aceitação**:
    - Ao criar ou editar uma carteira, deve ser possível inserir um valor de compra tendo como resultado o valor que será adquirido na criptomoeda de destino.
    
#### Informações úteis da API de conversão de moedas:
- Conversão BTC para BRL
    - https://economia.awesomeapi.com.br/json/last/BTC-BRL
- Moedas para conversão
    - https://docs.awesomeapi.com.br/api-de-moedas#moedas-com-conversao-para
- Tradução das moedas
    - https://economia.awesomeapi.com.br/json/available/uniq
- Combinações possíveis
    - https://economia.awesomeapi.com.br/json/available
- Legendas
    - https://docs.awesomeapi.com.br/api-de-moedas#legendas
    
## Bônus
- Validação dos inputs para funcionalidade de criar e editar carteira
- Gerenciamento de estado (vuex)
- Exportar dados da lista em CSV (Você pode utlizar alguma biblioteca npm para esta funcionalidade)

## Configurações do projeto

É necessário possuir a biblioteca json-server instalada em sua máquina:

```
npm install -g json-server
```
Acesse a [documentação](https://github.com/typicode/json-server#getting-started) do json-server para entender melhor como manipular a API.

Também será necessário instalar as dependências do projeto executando:

```
npm install
```

Finalmente podemos rodar o projeto e a API utilizando apenas um comando:

```
npm start
```

A api a ser consumida está rodando no endereço:

```
http://localhost:3004/users
```

e a aplicação em Vue.Js no endereço:

```
http://localhost:8080/
```

## Boa sorte! 🚀
>>>>>>> origin/develop
