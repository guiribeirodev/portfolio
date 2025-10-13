---
title: "Meu Primeiro post no Blog"
excerpt: "Meu primeiro post no blog, expectativas"
date: "20250922"
readTime: "3 min"
author: "Guilherme Ribeiro"
tags: ["Blog"]
published: false
coverImage: "/placeholder.jpg"
---

## API com Nodejs e Express

Olá, sejam bem vindos ao que provavelmente será uma série de artigos a respeito de API, esses artigos terão como objetivo ensinar o que eu sei a respeito de API ao mesmo tempo que ensinando eu fixo o conteúdo, então vamos lá.

Este artigo/tutorial é fortemente inspirado no curso do Dunossauro de FastAPI, nem de longe vou chegar em um resultado tão bom e próximo, até porque também não é o objetivo, mas tentarei algo aproximado.

## O que iremos utilizar?

Assim como o título indica estaremos utilizando o Nodejs (sim, Nodejs novamente assim como os milhares de artigos :rocket:), e como framework o Express.

## O que iremos ver?

Bom, inicialmente minha ideia é criar um projeto de API que começa de um simples CRUD até o deploy com testes, CI/CD, Docker e etc.

## Primeira Etapa - Configuração do Ambiente de desenvolvimento

Iremos precisar em um primeiro momento de poucas coisas

* Um editor de texto qualquer (usarei o VSCODE)
* Um terminal (usarei o Terminal)
* Node.JS (Estarei utilizando a versão LTS mais recente 22.20)

Por enquanto é tudo que precisamos.

## Criando um projeto

Iremos utilizar o NPM para a criação do projeto, para isso vá até aonde deseja cria o projeto e digite:

```
mkdir task-api
npm init -y
```

O npm init com a flag -y irá iniciar o seu projeto sem perguntar nada.

Feito os passos acima será criado um arquivo package.json, este arquivo é o "coração" de um projeto Nodejs, ele funciona como um manifesto e vai conter metadados importantes sobre o projeto e gerenciar dependências e scripts. O package.json nesse momento deve estar algo assim:

´´´json
{
  "name": "task-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
´´´

Alguns campos importantes neste momento

### name

Este é o nome do projeto. Se fossemos publicar este projeto no registro do npm seria este nome que seria usado.

### main

Este campo define o ponte de entrada da nossa aplicação. Quando o pacote for utilizado, o arquivo index.js será o arquivo principal que será carregado (conforme o tutorial for progredindo será mais intuitivo).

### scripts

Este campo contém scripts de linha de comando que podemos executar com o npm, por padrão já vem um script de test, mas que no momento só imprime no terminal que não tem nenhum teste foi configurado ainda.

## Instalando o Express

Com o projeto criado e dentro do diretório do projeto, agora iremos instalar o Express:

´´´
npm install express
´´´

Com a instalação concluída você deve ter observado que agora você possui uma pasta "node_modules" e um arquivo package-lock.json. A paste node_modules é uma pasta aonde irá armazenar as dependências do seu projeto, aquelas que foram instaladas pelo NPM.

E o package-lock.json é um arquivo que irá registrar as versões exatas de cada dependencia do projeto, garantindo assim que as instalações sejam consistentes, caso você exclua a pasta node_modules e rode "npm install", o npm irá baixar e instalar todas as dependencias novamente, graças aos arquivos package.json.

## Hello World

Iremos iniciar com o famoso Hello World, e iremos criar o app mais simples possível para iniciar. Crie um arquivo de nome index.js com o seguinte conteúdo:

```js
const express = require('express') #Realiza importação
const app = express() #Instancia o express
const port = 3000 #Porta a ser utilizada

#Estamos pegando o app e dizendo que no caminho "/" iremos ouvir o get e iremos dar uma resposta "res", essa resposta será um Hello World!
app.get('/', (res) => {
  res.send('Hello World!')
})


#Com o app estamos dizendo que vamos ouvir/subir o servidor na porta (configurado anteriormente para ser 3000), e fazer um log no terminal informando que o app está rodando. 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
