import StyledComponentsRegistry from './styled-components-registry';
import StyledComponentsTheme from './styled-components-theme';

export const metadata = {
  title: 'Next.js 13 app experimental test',
  description: 'POC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Para testar sem o registry, basta remover ele e deixar direto o children */}
        <StyledComponentsRegistry>
          {/* Não foi possível aplicar o theme dentro do arquivo do registry, não funcionou */}
          <StyledComponentsTheme>
            {children}
          </StyledComponentsTheme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
