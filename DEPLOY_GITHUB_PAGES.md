# Deploy GitHub Pages · Dashboard Crust Itália V24

## Estrutura obrigatória na raiz

- `index.html`
- `style.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `.nojekyll`
- `README.md`
- `data/especificacao-crust-rev23.json`
- `assets/icon.svg`

## Ativação

1. Abra o repositório `jaimeleite2012-sketch/Especifica-Crust-`.
2. Vá em `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Selecione branch `main` e pasta `/root`.
5. Clique em `Save`.

## URL esperada

`https://jaimeleite2012-sketch.github.io/Especifica-Crust-/`

## Após atualizar arquivos

No celular, feche e abra novamente o app. Se a versão antiga continuar aparecendo, atualize a página no navegador uma vez. O novo service worker `crust-qualidade-v24-mobile-edit` atualizará o cache.

## Backup dos ajustes locais

Antes de trocar celular, limpar cache ou alterar domínio/URL, use no dashboard:

`Cadastro > Exportar backup`

Depois, no novo celular:

`Cadastro > Importar backup`
