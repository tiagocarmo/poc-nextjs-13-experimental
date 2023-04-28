export const metadata = {
  title: 'Next.js 13 app experimental test',
  description: 'POC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
