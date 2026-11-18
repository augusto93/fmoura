# FMoura Advogados

Site institucional desenvolvido em HTML, CSS e JavaScript, organizado em uma página única com navegação por seções. Apresenta o escritório, os profissionais, os reconhecimentos profissionais, a área de atuação em Direito Tributário e o contato do escritório em São Paulo.

## Tecnologias

- **HTML5:** estrutura e conteúdo das seções.
- **CSS3:** identidade visual, layouts com Flexbox, variáveis de cores, animações e adaptação para telas menores por media queries.
- **JavaScript puro:** navegação, menu mobile, carrossel, expansão de biografias e detalhamento da área de atuação.
- **GSAP 3.12.5:** animações de interface, hospedado em `vendor/`.
- **Roboto:** fonte variável hospedada em `fonts/`.
- **Google Maps:** mapa incorporado por iframe, carregado só depois do clique do visitante.

## Organização dos arquivos

| Arquivo ou pasta | Função |
| --- | --- |
| `index.html` | Estrutura da página e conteúdo institucional. |
| `global.css` | Variáveis, estilos globais e regras básicas de layout. |
| `style.css` | Estilos das seções, componentes e regras responsivas. |
| `font.css` | Declaração da Roboto hospedada no site. |
| `aviso-de-privacidade.html`, `termos-de-uso.html` | Páginas legais. |
| `robots.txt`, `sitemap.xml` | Indexação nos buscadores. |
| `script.js` | Interações e animações da página. |
| `image/` | Fotografias, logotipos, ícones e selos em JPG, PNG e SVG. |

## Funcionalidades

Navegação com rolagem suave, cabeçalho com alteração de aparência durante a rolagem, menu mobile, carrosséis de reconhecimentos e de profissionais, biografias expansíveis, detalhes da área de atuação e mapa do escritório. A seção de contato reúne links para telefone, WhatsApp, e-mail e ouvidoria.

## Como executar

Baixe ou clone o repositório e abra o arquivo `index.html` em um navegador. Não há instalação de pacotes nem etapa de compilação. Só o mapa precisa de conexão com a internet.

O projeto é estático, sem backend ou banco de dados. Para hospedá-lo, mantenha o `index.html` na raiz da pasta publicada e preserve os caminhos dos demais arquivos.
