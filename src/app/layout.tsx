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
import { ToastContainer } from '@/components/toast'

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
      <body className="antialiased text-white transition-colors duration-300 min-h-screen relative selection:bg-amber-500/30">
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
        <MobileFloatingMenu />
        <ToastContainer />
      </body>
    </html>
  )
}
