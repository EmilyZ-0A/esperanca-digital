# Esperança Digital – Inclusão para todos

## 📖 Sobre o projeto
O **Esperança Digital** é uma iniciativa pedagógica que nasceu com o objetivo de reduzir a exclusão tecnológica.  
Acreditamos que o acesso às ferramentas digitais é um direito de todos e trabalhamos para que comunidades e organizações sociais possam se conectar ao mundo digital.  

Este repositório serve como exemplo prático de boas práticas em:
- Estruturação de projetos web (HTML + CSS).
- Documentação clara e acessível.
- Versionamento com Git e GitHub.
- Acessibilidade seguindo diretrizes **WCAG 2.1**.

---

## 🛠️ Tecnologias utilizadas
- **HTML5** → estrutura semântica e landmarks de acessibilidade.
- **CSS3** → estilização responsiva e moderna.
- **Git & GitHub** → controlo de versão e colaboração.
- **WAI-ARIA** → atributos para acessibilidade em botões, formulários e modais.

---
## ♿ Acessibilidade e modos de cor

Para garantir conformidade com as diretrizes **WCAG 2.1**, implementamos:

- **Dark Mode automático**: ativado via `prefers-color-scheme: dark`, respeitando a configuração do sistema do utilizador.
- **Alto contraste manual**: botão no cabeçalho (`<button id="toggle-contrast">Alto contraste</button>`) que alterna para fundo preto, texto branco e links amarelos.
- **Persistência da escolha**: a preferência do utilizador é salva em `localStorage`, mantendo o modo selecionado mesmo após recarregar ou navegar entre páginas.
- **Transições visuais**: animações suaves (`transition`) aplicadas ao `body`, links e botões para melhorar a experiência de leitura ao alternar modos.

### Elementos ajustados e rácios de contraste
| Elemento | Cores (texto/fundo) | Rácio |
|----------|----------------------|-------|
| Corpo (claro) | #333 / #f9f9f9 | 12.6:1 |
| Corpo (escuro) | #f9f9f9 / #121212 | 15.8:1 |
| Cabeçalho | #fff / #004080 | 8.9:1 |
| Links | #0066cc / #fff | 7.2:1 |
| Botões (claro) | #fff / #004080 | 8.9:1 |
| Botões (escuro) | #000 / #ffcc00 | 12.5:1 |
| Alto contraste | #fff / #000 | 21:1 |

### Ferramentas de verificação
- **WebAIM Contrast Checker**
- **axe DevTools**

## 📂 Estrutura de diretórios
index.html
css/
style.css
img/
