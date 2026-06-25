# Dashboard Crust Itália · V26 GitHub Sync

Versão mobile-first com edição operacional centralizada via GitHub API.

## Objetivo da V26

A versão anterior gravava alterações apenas no navegador do celular/computador. A V26 mantém a segurança local como contingência, mas adiciona um **banco central GitHub**:

- quem consulta abre a base central mais recente;
- quem possui token autorizado pode editar e enviar a alteração para todos;
- cada alteração gera commit no GitHub;
- o dashboard baixa a base central ao abrir, ao voltar para a tela e periodicamente.

## Arquivos principais

- `index.html`: interface mobile.
- `app.js`: lógica do dashboard e integração GitHub API.
- `style.css`: layout e UX mobile.
- `data/especificacao-crust-rev23.json`: base oficial extraída da matriz.
- `data/crust-sync-store.json`: camada central de alterações operacionais.
- `sw.js`: cache PWA com atualização forçada V26.

## Permissão necessária para salvar para todos

Cada usuário autorizado precisa criar um **GitHub Fine-grained Personal Access Token** limitado ao repositório `jaimeleite2012-sketch/Especifica-Crust-`, com permissão:

- Repository permissions > Contents: Read and write

O token deve ser colado dentro do dashboard, na aba **Cadastro > Banco central GitHub API**. Ele fica salvo apenas no navegador do aparelho autorizado.

## Segurança

Não inclua token dentro do código, dentro do GitHub Pages ou em prints compartilhados. Usuários sem token podem consultar; usuários com token podem alterar o banco central.

## URL esperada

https://jaimeleite2012-sketch.github.io/Especifica-Crust-/?v=26-github-sync
