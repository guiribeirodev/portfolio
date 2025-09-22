# Sistema de Blog com Markdown

O blog agora utiliza arquivos Markdown (`.md`) para armazenar as postagens, em vez de um array hardcoded no código.

## Estrutura

```
posts/
├── introducao-nextjs-14.md
├── typescript-boas-praticas.md
├── apis-rest-nodejs-express.md
├── react-hooks-basico-avancado.md
└── como-criar-novo-post.md
```

## Como Criar um Novo Post

1. Crie um novo arquivo `.md` na pasta `posts/`
2. O nome do arquivo será usado como slug da URL (ex: `meu-post.md` → `/blog/meu-post`)
3. Adicione o frontmatter no início do arquivo:

```markdown
---
title: "Título do Post"
excerpt: "Resumo do post que aparece na listagem"
date: "2024-03-20"
readTime: "5 min"
author: "Seu Nome"
tags: ["Tag1", "Tag2", "Tag3"]
published: true
coverImage: "/caminho/para/imagem.jpg" # opcional
---

# Conteúdo do post em Markdown

Aqui vai o conteúdo do seu post...
```

## Frontmatter Obrigatório

- `title`: Título do post
- `excerpt`: Resumo/descrição do post
- `date`: Data no formato "YYYY-MM-DD"
- `readTime`: Tempo estimado de leitura (ex: "5 min")
- `author`: Nome do autor
- `tags`: Array de strings com as tags
- `published`: `true` para publicar, `false` para manter como rascunho

## Frontmatter Opcional

- `coverImage`: Caminho para imagem de capa

## Tecnologias Utilizadas

- **gray-matter**: Para parsing do frontmatter
- **marked**: Para conversão de Markdown para HTML
- **Next.js**: Framework para geração estática

## Como Funciona

1. Os arquivos `.md` são lidos da pasta `posts/`
2. O frontmatter é extraído usando `gray-matter`
3. O conteúdo Markdown é convertido para HTML usando `marked`
4. Os posts são ordenados por data (mais recentes primeiro)
5. Apenas posts com `published: true` são exibidos

## Vantagens

- ✅ Fácil criação de novos posts
- ✅ Controle de versão com Git
- ✅ Sintaxe Markdown familiar
- ✅ Separação clara entre metadados e conteúdo
- ✅ Suporte a rascunhos (`published: false`)
- ✅ Geração estática para melhor performance
