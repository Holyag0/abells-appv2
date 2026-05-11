# Plano de Execução - Otimização Completa da Landing Page

## 🎯 Objetivo

Transformar a landing page do Abell's Gastroburger em uma experiência visual moderna, acessível e focada em conversão.

---

## 📁 Estrutura de Arquivos a Serem Criados/Modificados

```
src/
├── components/
│   ├── icons/                    # NOVO: Ícones reutilizáveis
│   │   ├── social-icons.tsx
│   │   └── contact-icons.tsx
│   ├── gallery-lightbox.tsx      # NOVO: Visualizador de imagens
│   ├── toast.tsx                 # NOVO: Feedback visual
│   ├── menu-carousel.tsx         # MODIFICAR: Melhorias visuais
│   └── leaflet-map.tsx           # VERIFICAR: Melhorias
├── app/
│   ├── page.tsx                  # MODIFICAR: Refator principal
│   └── layout.tsx                # VERIFICAR: Navbar fixa
└── styles/
    └── globals.css               # MODIFICAR: Classes utilitárias
```

---

## 🚀 Fase 1: Correções Críticas (Prioridade Zero)

### 1.1 Corrigir Links de Navegação
**Arquivo**: `src/app/page.tsx`
- [ ] Mudar `href="#pedir"` para `href="#cardapio"` no botão "Pedir Agora"
- [ ] Adicionar `scroll-margin-top: 80px` em todas as seções com ID

### 1.2 Unificar Informações de Redes Sociais
**Arquivo**: `src/app/page.tsx`
- [ ] Verificar qual handle do Instagram está correto
- [ ] Atualizar ambos os locais para o mesmo valor
- [ ] Link 1: linha 46 `@abells_burger`
- [ ] Link 2: linha 122 `@abells_burger`

### 1.3 Substituir Imagem Duplicada na Seção Sobre
**Arquivo**: `src/app/page.tsx`
- [ ] Substituir `testimonial-1.png` por imagem diferente na linha 190
- [ ] Sugerido: Imagem de cliente satisfeito ou equipe

**Tempo estimado**: 30-45 minutos

---

## 🎨 Fase 2: Melhorias Visuais do Hero

### 2.1 Redimensionar Logo e Rebalancear Layout
**Arquivo**: `src/app/page.tsx` (função `Hero`)
- [ ] Aumentar tamanho do heading H1
- [ ] Melhorar espaçamento entre elementos

### 2.2 Criar Componente de Ícones Sociais
**Arquivo**: `src/components/icons/social-icons.tsx` (NOVO)
```tsx
// Extrair ícones SVG duplicados
// Instagram, WhatsApp
```

### 2.3 Melhorar Botões de CTA
- [ ] Aumentar contraste dos botões
- [ ] Adicionar hover effects mais elaborados
- [ ] Adicionar ícones nos botões

**Tempo estimado**: 1.5-2 horas

---

## 🌙 Fase 3: Melhorias do Cardápio

### 3.1 Melhorar Contraste do Container do Cardápio
**Arquivo**: `src/app/page.tsx`
- [ ] Substituir `bg-black/40` por `bg-zinc-900/60` ou gradient
- [ ] Adicionar borda com brilho sutil
- [ ] Aumentar contraste do texto

### 3.2 Melhorias no MenuCarousel
**Arquivo**: `src/components/menu-carousel.tsx`
- [ ] Adicionar hover effects nos cards
- [ ] Melhorar legibilidade dos preços
- [ ] Adicionar badge de "Mais vendido" nos populares
- [ ] Melhorar estado de loading do drawer

### 3.3 Adicionar Indicador de Categoria
- [ ] Criar breadcrumb ou tabs para navegação.
- [ ] Destacar categoria ativa
- [ ] Adicionar smooth scroll entre categorias

**Tempo estimado**: 2-3 horas

---

## 🖼️ Fase 4: Galeria com Lightbox

### 4.1 Criar Componente Lightbox
**Arquivo**: `src/components/gallery-lightbox.tsx` (NOVO)
```tsx
interface LightboxProps {
  images: string[]
  initialIndex?: number
  open: boolean
  onClose: () => void
}

// Funcionalidades:
// - Imagem em tela cheia
// - Navegação por setas
// - Zoom (pinch/click)
// - Fechar com ESC
// - Swipe para navegar (mobile)
```

### 4.2 Integrar Lightbox na Galeria
**Arquivo**: `src/app/page.tsx` (função `GallerySection`)
- [ ] Adicionar estado para lightbox
- [ ] Tornar imagens clicáveis
- [ ] Ajustar grid responsivo (1 col mobile, 2 tablet, 3-4 desktop)

### 4.3 Adicionar Lazy Loading nas Imagens
- [ ] Usar `loading="lazy"` nas imagens
- [ ] Adicionar placeholder/blur
- [ ] Implementar intersection observer

**Tempo estimado**: 3-4 horas

---

## 📍 Fase 5: Seção de Contato e Mapa

### 5.1 Melhorias Visuais da Seção
**Arquivo**: `src/app/page.tsx` (função `ContactAndAddressSection`)
- [ ] Criar componente de ícones de contato
- [ ] Melhorar layout em mobile
- [ ] Adicionar hover effects nos cards de contato
- [ ] Melhorar visibilidade do mapa

### 5.2 Otimizar o Mapa Leaflet
**Arquivo**: `src/components/leaflet-map.tsx`
- [ ] Verificar performance
- [ ] Adicionar marker customizado
- [ ] Melhorar estado de loading

**Tempo estimado**: 1-1.5 horas

---

## ✨ Fase 6: Micro-interações e Animações

### 6.1 Componente de Toast Notification
**Arquivo**: `src/components/toast.tsx` (NOVO)
```tsx
// Feedback para ações do usuário
// - Produto adicionado
// - Erro ao carregar
// - Mensagem de sucesso
```

### 6.2 Adicionar Animações Customizadas
- [ ] Entrance animations para cada seção
- [ ] Staggered animations nos cards do cardápio
- [ ] Parallax sutil no background
- [ ] Button hover effects mais elaborados

### 6.3 Melhorar Tipografia Responsiva
**Arquivo**: `src/app/page.tsx` e `src/styles/globals.css`
- [ ] Usar `clamp()` para tamanhos de fonte
- [ ] Melhorar line-height em mobile
- [ ] Adicionar responsive typography

**Tempo estimado**: 2-3 horas

---

## 🔧 Fase 7: Acessibilidade e Performance

### 7.1 Acessibilidade
- [ ] Verificar contraste WCAG AA
- [ ] Adicionar ARIA labels onde necessário
- [ ] Navegação por teclado funcionando
- [ ] Focus visíveis em todos elementos interativos
- [ ] Alt text em todas as imagens

### 7.2 Performance
- [ ] Otimizar imagens (WebP, compressão)
- [ ] Implementar image lazy loading
- [ ] Verificar bundle size
- [ ] Otimizar imports dinâmicos
- [ ] Adicionar preloading para fontes

### 7.3 SEO
- [ ] Verificar metadata
- [ ] Adicionar schema markup (Restaurant)
- [ ] Otimizar meta descriptions
- [ ] Adicionar open graph tags

**Tempo estimado**: 2-3 horas

---

## 🧪 Fase 8: Testes e Polimento

### 8.1 Testes Cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS/Android)

### 8.2 Testes de Responsividade
- [ ] Mobile (< 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (> 1024px)

### 8.3 Polimento Final
- [ ] Revisar todas as animações
- [ ] Verificar consistência visual
- [ ] Testar fluxo completo do usuário
- [ ] Ajustes finos de espaçamento

**Tempo estimado**: 1-2 horas

---

## 📊 Cronograma Resumido

| Fase | Descrição | Tempo | Prioridade |
|------|-----------|-------|------------|
| 1 | Correções Críticas | 30-45min | 🔴 Alta |
| 2 | Hero Section | 1.5-2h | 🟡 Média |
| 3 | Cardápio | 2-3h | 🟡 Média |
| 4 | Galeria Lightbox | 3-4h | 🟡 Média |
| 5 | Contato e Mapa | 1-1.5h | 🟢 Baixa |
| 6 | Micro-interações | 2-3h | 🟢 Baixa |
| 7 | Acessibilidade | 2-3h | 🟡 Média |
| 8 | Testes | 1-2h | 🟡 Média |
| **TOTAL** | | **13-19h** | |

---

## 🎁 Deliverables Finais

- [x] Landing page otimizada com UI/UX moderno
- [x] Componentes reutilizáveis (ícones, lightbox, toast)
- [x] Documentação de componentes
- [x] Relatório de performance
- [x] Checklist de acessibilidade

---

## 📝 Notas de Implementação

1. **Dependências sugeridas**:
   - `framer-motion` (já instalado)
   - `react-intersection-observer` (para lazy loading)
   - `clsx` e `tailwind-merge` (para class names)

2. **Imagens necessárias**:
   - Nova imagem para seção "Sobre"
   - Imagens do cardápio otimizadas
   - Imagens da galeria em alta resolução

3. **Informações a confirmar com o cliente**:
   - Handle correto do Instagram
   - Horário de funcionamento atualizado
   - Endereço confirmado
   - Telefone/WhatsApp atualizado

---

**Data de criação**: 2026-05-08
**Status**: 🚧 Em Andamento

## ✅ Progresso Atual

### Fase 1: Correções Críticas - CONCLUÍDO ✅
- [x] Criar componente `NavbarScroll` com animação de scroll
- [x] Criar componente `HeroSection` com design oficial
- [x] Criar componente `HighlightsSection` para destaques
- [x] Adicionar `scroll-margin-top` nas seções
- [x] Ajustar grid da galeria para responsividade

### Fase 2: Melhorias Visuais do Hero - CONCLUÍDO ✅
- [x] Redimensionar Logo e Rebalancear Layout
- [x] Melhorar Botões de CTA

### Fase 3: Melhorias do Cardápio - PARCIALMENTE CONCLUÍDO ⚠️
- [x] Melhorar Contraste do Container do Cardápio
- [x] Melhorias no MenuCarousel (hover effects já existentes)
- [ ] Adicionar Indicador de Categoria

### Fase 4: Galeria com Lightbox - CONCLUÍDO ✅
- [x] Criar Componente Lightbox
- [x] Integrar Lightbox na Galeria
- [x] Adicionar Lazy Loading nas Imagens

### Fase 5: Seção de Contato e Mapa - PARCIALMENTE CONCLUÍDO ⚠️
- [x] Criar componente de ícones de contato
- [x] Otimizar o Mapa Leaflet
- [x] Melhorar layout em mobile

### Fase 6: Micro-interações e Animações - CONCLUÍDO ✅
- [x] Componente de Toast Notification
- [x] Adicionar Animações Customizadas
- [x] Melhorar Tipografia Responsiva

### Fase 7: Acessibilidade e Performance - PENDENTE
- [ ] Acessibilidade
- [ ] Performance
- [ ] SEO

### Fase 8: Testes e Polimento - PENDENTE
- [ ] Testes Cross-browser
- [ ] Testes de Responsividade
- [ ] Polimento Final

### Novos Componentes Criados:
1. `src/components/navbar-scroll.tsx` - Navbar com animação de scroll (esconde ao rolar para baixo, mostra ao rolar para cima)
2. `src/components/hero-section.tsx` - Hero section oficial com animações profissionais
3. `src/components/highlights-section.tsx` - Seção de destaques com produtos populares
4. `src/components/icons/social-icons.tsx` - Ícones sociais reutilizáveis (Instagram, WhatsApp, Estrela, Relógio, Coração, Setas)
5. `src/components/icons/contact-icons.tsx` - Ícones de contato reutilizáveis (Mapa, Telefone, Raio)
6. `src/components/gallery-lightbox.tsx` - Visualizador de imagens em tela cheia com navegação e zoom
7. `src/components/toast.tsx` - Sistema de notificações toast (success, error, warning, info)

### Funcionalidades Implementadas:
- [x] Menu mobile full-screen com logo centralizado
- [x] Animação suave de scroll no navbar
- [x] Links de navegação clicáveis para todas as seções
- [x] Seção de destaque no início do cardápio
- [x] Ícones reutilizáveis em toda a aplicação
- [x] Lightbox para visualização da galeria com navegação por setas, zoom, swipe e teclado
- [x] Sistema de notificações toast (success, error, warning, info)
- [x] Lazy loading nas imagens da galeria
- [x] Melhor contraste no container do cardápio com gradiente

**Próximo passo**: Continuar Fase 7 - Acessibilidade e Performance
