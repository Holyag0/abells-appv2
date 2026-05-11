import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Ficou com fome?</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 dark:text-white sm:text-5xl">
          Peça o seu agora mesmo.
          <br />
          Entregamos rapidinho na sua casa.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500 dark:text-gray-400">
        O melhor blend, o pão mais macio e aquele molho especial que só a gente tem.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="#pedir">
          Pedir no WhatsApp
        </Button>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-white/60">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-white/90 data-hover:text-amber-500 transition-colors"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Menu</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#cardapio">Hambúrgueres</SitemapLink>
          <SitemapLink href="/cardapio">Cardápio Completo</SitemapLink>
          <SitemapLink href="#contato">Endereço & Contato</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Siga-nos no Facebook"
        className="text-gray-950 dark:text-white data-hover:text-gray-950/75 dark:data-hover:text-white/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://www.instagram.com/abells_burger/"
        target="_blank"
        aria-label="Siga-nos no Instagram"
        className="text-gray-950 dark:text-white data-hover:text-gray-950/75 dark:data-hover:text-white/75"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="Siga-nos no X"
        className="text-gray-950 dark:text-white data-hover:text-gray-950/75 dark:data-hover:text-white/75"
      >
        <SocialIconX className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-white/60">
      &copy; {new Date().getFullYear()} Abell's Gastroburger. Todos os direitos reservados.
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative mt-24 bg-zinc-950 border-t border-white/10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem]">
        <Container className="relative z-10 py-16">
          <CallToAction />
          
          <div className="flex flex-col items-center justify-center py-12 border-t border-white/5">
            <Logo className="h-20 sm:h-24 mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white text-center">
              <span className="text-red-600 dark:text-red-500 text-shadow-glow">Abell's</span> <span className="text-amber-500">Gastroburger</span>
            </h2>
          </div>

          <PlusGrid className="pb-16 text-white/70">
            <PlusGridRow>
              <div className="flex justify-center pb-12">
                <div className="grid grid-cols-1 text-center">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
    </footer>
  )
}
