# Publicação da V26 GitHub Sync

1. Substitua todos os arquivos do repositório pelos arquivos deste pacote.
2. Confirme que o arquivo abaixo existe no repositório:

```text
data/crust-sync-store.json
```

3. No GitHub, mantenha GitHub Pages em:

```text
Settings > Pages > Deploy from a branch > main > /root
```

4. Acesse:

```text
https://jaimeleite2012-sketch.github.io/Especifica-Crust-/?v=26-github-sync
```

5. No primeiro acesso, vá em:

```text
Cadastro > Banco central GitHub API
```

6. Cole o token autorizado e clique em **Salvar conexão**.
7. Clique em **Baixar atualização central**.
8. Faça uma pequena alteração de teste e salve. A alteração deverá ser enviada ao arquivo:

```text
data/crust-sync-store.json
```

## Teste de validação

- Altere um artigo no celular com token configurado.
- Abra o dashboard no computador com `?v=26-github-sync`.
- Clique em **Cadastro > Baixar atualização central** ou atualize a página.
- A alteração deve aparecer também no computador.

## Observação

A gravação central depende da GitHub API. Sem internet ou sem token, o dashboard mantém a alteração localmente e avisa que a sincronização central não foi realizada.
