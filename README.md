
# QI Math

Um jogo interativo para praticar matemática simples. O jogo apresenta uma operação com um número faltando, e o jogador deve adivinhar qual é o valor correto. O jogo inclui operações de soma, subtração, multiplicação e divisão.

## Tecnologias

- HTML
- CSS
- JavaScript

## Funcionalidades

- **Operações Matemáticas**: O jogo gera operações aleatórias de soma, subtração, multiplicação ou divisão.
- **Valor Faltando**: O jogo oculta um dos valores na operação, e o jogador deve descobrir qual é o valor faltante.
- **Resposta Correta/Errada**: O jogador pode inserir uma resposta e o sistema informará se a resposta está correta ou não.
- **Reinício**: Após acertar, o jogo reinicia automaticamente com novos valores e operações.

## Screenshots

*Não foi fornecida uma imagem para este projeto. Caso haja, adicione-a aqui.*

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/LacamJC/qimath.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd qimath
    ```

3. Abra o arquivo `index.html` em um navegador para jogar!

## Estrutura de Arquivos

### `index.html`

O arquivo HTML contém a estrutura do jogo, onde as operações matemáticas são exibidas. Ele também inclui os campos para o usuário inserir sua resposta e botões para interagir com o jogo.

### `style.css`

O arquivo CSS define o estilo do layout do jogo, incluindo a aparência das operações matemáticas, os botões de interação e os avisos de resposta correta/errada.

### `script.js`

Este arquivo contém a lógica do jogo:
- Gera operações matemáticas aleatórias.
- Exibe um dos valores da operação como "?".
- Verifica se a resposta fornecida pelo usuário está correta e exibe a mensagem correspondente.
- Reinicia o jogo automaticamente após o jogador acertar.

## Como Funciona o Jogo

- O jogo gera dois números aleatórios entre 0 e 50.
- Um dos números é ocultado e o jogador deve descobrir qual é o valor faltante.
- O operador da operação (soma, subtração, multiplicação ou divisão) também é gerado aleatoriamente.
- O jogador deve inserir a resposta no campo fornecido e clicar em "Responder".
- Se a resposta estiver correta, o jogo exibe uma mensagem de sucesso e reinicia com novos números e operação.

## Contribuições

Se você quiser contribuir com o projeto, fique à vontade para abrir uma *issue* ou criar um *pull request* com melhorias ou correções.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
