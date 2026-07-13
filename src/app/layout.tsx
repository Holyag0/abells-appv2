import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Dr. Brasil',
    default: 'Dr. Brasil - Clínica Médica e Odontológica em Apuiarés-CE',
  },
  description: 'Clínica Médica e Odontológica Dr. Brasil. Atendimento humanizado e multidisciplinar de alta qualidade no centro de Apuiarés - CE.',
}

import { ToastContainer } from '@/components/toast'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased text-zinc-955 bg-amber-400 min-h-screen relative selection:bg-primary/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <div className="relative z-10 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)]">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
