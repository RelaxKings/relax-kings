import './globals.css'

export const metadata = {
  title: 'Relax Kings',
  description: 'Vença a Ansiedade e Estresse | MindFulness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
