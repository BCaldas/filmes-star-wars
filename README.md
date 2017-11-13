
# Sistema de Filmes Favoritos do Star Wars

Pequeno sistema web para listagem dos filmes da série Star Wars consumidos da API SWAPI (https://swapi.co/) com possibilidade de marcar os filmes favoritos

## Tecnologias Usadas:

- Javascript

- Node

- Sqlite

- React

- Redux

- Express

- WebPack

## Bibliotecas de Terceiros:

- Axios para realizar chamadas HTTP a apis's (https://github.com/axios/axios)
- Babel para transpilação de código (https://babeljs.io/)

## Instalação

- Clone o repostório dentro da pasta desejada.
- Instale as dependências necessárias com o comando:
```bash
$ npm install
```
- Builde o react utilizando o webpack com o comando:
```bash
$ npm run build
```
- Rode o servidor com o comando:
```bash
$ npm start
```
- O Banco de dados já se encontra localizado em "server/db/favoritos.db". Caso deseje mudar, altere o arquivo "server/db/index.js" (será necessário criar o novo arquivo caso altere o nome do BD).
- Abra o navegador e navegue até o endereço "http://localhost:3000".
- Se desejar mudar a porta, altere a propriedade "port" do arquivo "server/settings.js".

## Requerimentos

- Node 8
- Navegador web atualizado



