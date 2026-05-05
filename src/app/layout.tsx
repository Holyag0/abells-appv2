import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    template: '%s - Abell\'s Gastroburger',
    default: 'Abell\'s Gastroburger - O Melhor de Flecheiras',
  },
}

import { MobileFloatingMenu } from '@/components/mobile-floating-menu'

import { Gradient } from '@/components/gradient'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="bg-white text-gray-950 antialiased dark:bg-gray-950 dark:text-white transition-colors duration-300 min-h-screen relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* O gradiente que servirá de borda */}
            <Gradient className="fixed inset-0 z-0" />
            
            {/* O conteúdo com a margem (bordas), mas mantendo o fundo original das páginas */}
            <div className="relative z-10 m-2 sm:m-4 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)]">
              {children}
            </div>
          </div>
        </ThemeProvider>
        <MobileFloatingMenu />
      </body>
    </html>
  )
}
