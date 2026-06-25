# Como subir no GitHub Pages

## Estrutura esperada no repositório

```text
/
├── index.html
├── style.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── README.md
├── assets/
│   └── icon.svg
└── data/
    └── especificacao-crust-rev23.json
```

## Recomendação executiva

Não usar o repositório `show-biblico-ibc` para este dashboard, porque ele tem outro propósito. Para governança e segurança, crie um repositório específico:

`dashboard-crust-qualidade`

## Atualização futura da matriz

Quando a planilha matriz mudar, gere novamente o arquivo `data/especificacao-crust-rev23.json` e o `app.js` com a nova base. O dashboard foi estruturado para aceitar evolução: importador Excel, autenticação, controle de permissões e integração com Power BI/SAP podem ser adicionados em versões seguintes.
