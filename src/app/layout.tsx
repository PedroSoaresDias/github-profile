import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Profile',
  description: 'Encontre o desenvolvedor que você procura na plataforma GitHub, pesquise por profissionais disponíveis, explore seus repositórios e projetos, conheça mais detalhes sobre o perfil escolhido, descubra mais sobre desenvolvedores e organizações da área de tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
