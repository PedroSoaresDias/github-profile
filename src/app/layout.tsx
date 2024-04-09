import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ]
}

export const metadata: Metadata = {
  title: 'GitHub Profile',
  description: 'Encontre o desenvolvedor que você procura na plataforma GitHub, pesquise por profissionais disponíveis, explore seus repositórios e projetos, conheça mais detalhes sobre o perfil escolhido, descubra mais sobre desenvolvedores e organizações da área de tecnologia.',
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GitHub Profile",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "GitHub Profile",
    title: "GitHub Profile",
    description: 'Encontre o desenvolvedor que você procura na plataforma GitHub, pesquise por profissionais disponíveis, explore seus repositórios e projetos, conheça mais detalhes sobre o perfil escolhido, descubra mais sobre desenvolvedores e organizações da área de tecnologia.',
  },
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
