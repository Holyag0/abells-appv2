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
        <Button className="w-full sm:w-auto" href="https://wa.me/5585985497108" target="_blank">
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
          <SitemapLink href="#sobre-nos">Nossa História</SitemapLink>
          <SitemapLink href="#galeria">Galeria</SitemapLink>
          <SitemapLink href="#destaques">Destaques</SitemapLink>
          <SitemapLink href="#cardapio">Cardápio</SitemapLink>
          <SitemapLink href="#contato">Endereço & Contato</SitemapLink>
        </SitemapLinks>
      </div>
    </>
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

function SocialIconWhatsApp(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.instagram.com/abells_burger/"
        target="_blank"
        aria-label="Siga-nos no Instagram"
        className="text-gray-950 dark:text-white data-hover:text-gray-950/75 dark:data-hover:text-white/75"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
      <Link
        href="https://wa.me/5585985497108"
        target="_blank"
        aria-label="Contato via WhatsApp"
        className="text-gray-950 dark:text-white data-hover:text-gray-950/75 dark:data-hover:text-white/75"
      >
        <SocialIconWhatsApp className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-white/60 text-center sm:text-left">
      <span>&copy; {new Date().getFullYear()} Abell's Gastroburger.</span>
      <span className="block sm:inline"> Todos os direitos reservados.</span>
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
            <h1 className="text-3xl sm:text-4xl font-black italic tracking-tighter text-white text-center">
              <span className="text-red-600 dark:text-red-500 text-shadow-glow">Abell's</span> <span className="text-amber-500">Gastroburger</span>
            </h1>
            <a href="https://www.google.com/maps/search/?api=1&query=Abells+Gastroburguer" target="_blank" className="mt-4 text-sm text-gray-400 hover:text-amber-500 transition-colors">
              R. São Pedro, 150 - Fleicheiras, Trairi - CE, 62690-000
            </a>
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
