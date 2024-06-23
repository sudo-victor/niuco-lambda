# Niuco Challenge

## Índice

1. [Instalação](#instalação)
    - [Docker](#docker)
    - [Pacote NPM](#pacote-npm)
        - [API Mock](#api-mock)
        - [Configuração da Aplicação](#configuração-da-aplicação)
2. [Executar](#executar)
3. [Decisões Técnicas](#decisões-técnicas)
    - [Serverless Lambda Function](#serverless-lambda-function)
    - [DDD (Domain Driven Design)](#ddd-domain-driven-design)
    - [Port/Adapter](#portadapter)
    - [Testes Automatizados](#testes-automatizados)

## Instalação

### Docker

Para utilizar a aplicação com Docker, siga os passos abaixo:

1. Certifique-se de que o Docker está instalado em sua máquina.
2. No terminal, execute o comando abaixo para iniciar a aplicação:

```bash
docker-compose up
```

### Pacote NPM

#### API Mock

Se preferir rodar a API de mock diretamente na sua máquina, siga os passos abaixo:

1. Instale o pacote `json-server` globalmente:

```bash
npm install -g json-server
```

2. Inicie o `json-server` para assistir as alterações no arquivo `db.json`:

```bash
json-server --watch db.json
```

#### Configuração da Aplicação

Para configurar e rodar a aplicação, siga os passos abaixo:

1. Instale as dependências necessárias:

```bash
cd app
npm ci
```

2. Inicie o serverless offline:

```bash
npm start
```

## Executar

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Decisões Técnicas

Esta aplicação foi desenvolvida levando em consideração duas características principais: facilidade de manutenção e escalabilidade.

### Serverless Lambda Function

A aplicação utiliza funções Lambda do AWS, proporcionando alta escalabilidade e eficiência no gerenciamento de recursos.

### DDD (Domain Driven Design)

Utilizei a abordagem DDD para facilitar futuras alterações, proteger as regras de negócio e garantir que o código seja altamente testável.

### Port/Adapter

A arquitetura Port/Adapter (ou Hexagonal) foi adotada para desacoplar o código, permitindo modificações nas implementações com facilidade e garantindo testabilidade.

### Testes Automatizados

Adicionei testes automatizados tanto para as regras de negócio quanto para as funcionalidades enterprise, fortalecendo e protegendo as regras do sistema.
