# ☕ Café Aurora

Site de página única de uma cafeteria fictícia, feito com **HTML, CSS e JavaScript puros** (sem frameworks e sem dependências externas). Projeto acadêmico focado em **acessibilidade (WCAG 2.1 AA)**, **usabilidade** e **psicologia das cores**.

🔗 **Site online:** (https://github.com/gabrielgramos1711/cafe-aurora)

## Funcionalidades

- Navegação em **abas** (Início, Cardápio, Contato, Login, Acessibilidade)
- **Carrossel** de destaques com anterior/próximo, indicadores, troca automática e botão de pausa
- **Cartões** explicativos e de produtos
- **Busca e filtro** do cardápio em tempo real
- **Formulário de contato** e **página de login** com validação
- **Modo claro/escuro** (respeita a preferência do sistema e salva a escolha)
- **Aba de acessibilidade:** aumentar/diminuir fonte, alto contraste e redução de animações
- **Rodapé** com endereço, horário e declaração de acessibilidade

## Paleta de cores

| Função | Claro | Escuro | Alto contraste |
|---|---|---|---|
| Fundo | `#FFFAF3` | `#1C1410` | `#000000` |
| Superfície | `#FFFFFF` | `#2A1E17` | `#000000` |
| Texto | `#2B1D14` | `#F5EBE0` | `#FFFFFF` |
| Primária | `#6B3E26` | `#E0A96D` | `#FFE600` |
| Destaque | `#B45309` | `#F0B76F` | `#FFE600` |

Todas as combinações de texto têm contraste mínimo de **4,5:1 (nível AA)**. As cores vêm da identidade do produto: marrom (café, confiança), creme (acolhimento) e âmbar (calor e apetite).

## Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Link "Ir para o conteúdo" para pular o menu
- Abas com `role="tablist"`, `role="tab"`, `role="tabpanel"` e `aria-selected`
- Erros de formulário ligados aos campos com `aria-describedby` e `aria-invalid`
- Foco visível em todos os elementos interativos
- Carrossel pausável (WCAG 2.2.2) e opção de reduzir animações
- Cor nunca é a única forma de transmitir informação

## Como executar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/cafe-aurora.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador. Não precisa instalar nada.

## Estrutura de arquivos

```
cafe-aurora/
├── index.html   # estrutura e conteúdo
├── style.css    # estilos, variáveis de cor e temas
├── script.js    # abas, carrossel, busca, formulários, tema e acessibilidade
└── README.md
```

## Passo a passo da construção

1. **Planejamento:** definição do tema, público e requisitos (cartões, abas, carrossel, formulários, modo claro/escuro, rodapé).
2. **Paleta e contraste:** cores escolhidas a partir do produto e contraste calculado para cada par.
3. **HTML semântico:** estrutura com `header`, `nav`, `main`, `section`, `article` e `footer`.
4. **Variáveis CSS:** cores declaradas em `:root` e redefinidas para os modos escuro e alto contraste.
5. **Layout responsivo:** Flexbox e CSS Grid (`auto-fill` / `minmax`) e `clamp()` nos títulos.
6. **Abas:** botões com papéis ARIA e JavaScript que exibe uma seção por vez.
7. **Carrossel:** três slides com controles, indicadores, autoplay e pausa.
8. **Cardápio dinâmico:** array de itens e função `render()` que filtra por texto e categoria.
9. **Formulários:** validação com mensagens claras e opção de mostrar a senha.
10. **Tema e acessibilidade:** alternância de tema, ajuste de fonte e alto contraste, com preferências salvas em `localStorage`.
11. **Testes:** navegação só com teclado, teste em tela de 360 px, auditoria com Lighthouse/axe e leitor de tela.
12. **Publicação:** versionamento no GitHub e deploy no GitHub Pages.

## Tecnologias e ferramentas

HTML5 · CSS3 · JavaScript (ES6) · Git e GitHub · GitHub Pages · WebAIM Contrast Checker · 

## Referências

- W3C. *Web Content Accessibility Guidelines (WCAG) 2.1* — https://www.w3.org/TR/WCAG21/
- W3C WAI. *ARIA Authoring Practices Guide* — https://www.w3.org/WAI/ARIA/apg/
- Nielsen Norman Group. *10 Usability Heuristics for User Interface Design* — https://www.nngroup.com/articles/ten-usability-heuristics/
- WebAIM. *Contrast Checker* — https://webaim.org/resources/contrastchecker/
- MDN Web Docs — https://developer.mozilla.org/pt-BR/

## IAs utilizadas

O código e a documentação foram desenvolvidos com auxílio do **Claude (Anthropic)**. 

## Autor(a)

Gabriel Gonçalves Ramos · Desenvolvimento de Interfaces · CEUB