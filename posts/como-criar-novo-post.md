---
title: "Como Criar um Novo Post"
excerpt: "Exemplo de como criar um novo post no blog usando arquivos Markdown."
date: "2024-03-20"
readTime: "3 min"
author: "Guilherme Ribeiro"
tags: ["Tutorial", "Markdown", "Blog"]
published: true
coverImage: "/placeholder.jpg"
---

Este é um exemplo de como criar um novo post no blog. Agora você pode simplesmente criar um arquivo `.md` na pasta `posts/` com o frontmatter correto.

## Frontmatter Obrigatório

Todo post deve ter as seguintes propriedades no frontmatter:

- `title`: Título do post
- `excerpt`: Resumo do post
- `date`: Data no formato YYYY-MM-DD
- `readTime`: Tempo estimado de leitura
- `author`: Nome do autor
- `tags`: Array de tags
- `published`: true/false para publicar ou não

## Frontmatter Opcional

- `coverImage`: URL da imagem de capa

## Conteúdo em Markdown

O conteúdo do post é escrito em Markdown normal. Você pode usar:

### Títulos

- `#` para h1
- `##` para h2
- `###` para h3

### Formatação

- **Negrito**
- *Itálico*
- `Código inline`

### Código

```javascript
function exemplo() {
  console.log("Olá mundo!");
}
```

### Listas

1. Item numerado 1
2. Item numerado 2

- Item com bullet
- Outro item

### Links

[Link para o Google](https://google.com)

## Publicação

Para publicar o post, certifique-se de que `published: true` esteja no frontmatter. O post aparecerá automaticamente na lista do blog.
