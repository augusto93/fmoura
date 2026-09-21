# FMoura Advogados

Site institucional desenvolvido em HTML, CSS e JavaScript, organizado em uma página única com navegação por seções. Apresenta o escritório, os sócios, os reconhecimentos profissionais, as áreas de atuação e os contatos das unidades de São Paulo e do Rio de Janeiro.

## Tecnologias

- **HTML5:** estrutura e conteúdo das seções.
- **CSS3:** identidade visual, layouts com Flexbox, variáveis de cores, animações e adaptação para telas menores por media queries.
- **JavaScript puro:** navegação, menu mobile, carrossel, expansão de biografias e alternância entre áreas de atuação e mapas.
- **GSAP 3:** animações de interface, carregadas via CDN.
- **Google Fonts e Adobe Fonts:** fontes externas utilizadas na composição visual.
- **Google Maps:** mapas incorporados por iframe.

## Organização dos arquivos

| Arquivo ou pasta | Função |
| --- | --- |
| `index.html` | Estrutura da página e conteúdo institucional. |
| `global.css` | Variáveis, estilos globais e regras básicas de layout. |
| `style.css` | Estilos das seções, componentes e regras responsivas. |
| `font.css` | Definições e carregamento das fontes Adobe Fonts. |
| `script.js` | Interações e animações da página. |
| `image/` | Fotografias, logotipos, ícones e selos em JPG, PNG e SVG. |

## Funcionalidades

Navegação com rolagem suave, cabeçalho com alteração de aparência durante a rolagem, menu mobile, carrossel de reconhecimentos, biografias expansíveis, detalhes das áreas de atuação e alternância entre os mapas dos dois escritórios. A seção de contato reúne links para telefone, WhatsApp, e-mail e ouvidoria.

## Como executar

Baixe ou clone o repositório e abra o arquivo `index.html` em um navegador. Não há instalação de pacotes nem etapa de compilação. As fontes externas, o GSAP e os mapas precisam de conexão com a internet.

O projeto é estático, sem backend ou banco de dados. Para hospedá-lo, mantenha o `index.html` na raiz da pasta publicada e preserve os caminhos dos demais arquivos.
