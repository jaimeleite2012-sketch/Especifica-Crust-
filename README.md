# Dashboard Crust Itália · Qualidade V25

Versão mobile editável com correção de cache/PWA.

## Correção desta versão

- Arquivos CSS/JS/manifest com `?v=25-cache-corrigido` para evitar navegador carregar versão antiga.
- Service Worker com política network-first para HTML.
- Limpeza agressiva de caches antigos na ativação do PWA.
- Mantém edição mobile, cadastro de novos artigos, marcação de obsoleto e backup local.

## Publicação

Substitua todos os arquivos na raiz do repositório GitHub Pages. Depois acesse:

https://jaimeleite2012-sketch.github.io/Especifica-Crust-/?v=25-cache-corrigido

Se ainda aparecer a versão antiga, remover o app da tela inicial e limpar dados do site no navegador.

# Dashboard Crust Itália · Qualidade · Mobile Editável V24

Dashboard PWA mobile-first gerado a partir da matriz **BRM-MDL-SQ-SGI-033 Rev.23**.

## Atualização desta versão

Esta versão permite uso operacional direto no celular:

- Editar artigo existente durante a rotina de produção.
- Cadastrar novo artigo em aba própria de cadastro.
- Marcar artigo como **Obsoleto**; o card fica vermelho automaticamente.
- Registrar observações operacionais locais.
- Salvar alterações no navegador do celular via `localStorage`.
- Reaplicar os ajustes locais mesmo quando a base oficial for atualizada no GitHub Pages.
- Exportar/importar backup JSON dos ajustes locais.

## Como publicar no GitHub Pages

Envie todos os arquivos para a raiz do repositório e ative:

`Settings > Pages > Deploy from a branch > main > /root > Save`

URL esperada:

`https://jaimeleite2012-sketch.github.io/Especifica-Crust-/`

## Atenção operacional

As alterações feitas no celular ficam salvas naquele navegador/aparelho. Para não perder dados em caso de troca de celular, limpeza de cache ou mudança de URL, use o botão **Exportar backup** periodicamente.

## Confidencialidade

Este dashboard contém dados técnicos industriais. Avalie a política interna antes de manter o repositório público.
