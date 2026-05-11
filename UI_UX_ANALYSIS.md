# Relatório de Análise UI/UX - Abell's Gastroburger

## 📊 Visão Geral

A página principal do Abell's Gastroburger apresenta uma estrutura básica mas há várias oportunidades significativas de melhoria em termos de experiência do usuário e qualidade visual.

---

## 🔍 Problemas Identificados (Priorizados por Impacto)

### 🔴 CRÍTICO - Alto Impacto

| # | Problema | Impacto | Solução |
|---|----------|---------|---------|
| 1 | **Hero section desbalanceada** - Logo ocupa espaço excessivo (450px) e texto fica espremido | UX/Visual | Reduzir logo, aumentar foco no copy |
| 2 | **Cardápio em fundo escuro escuro** - Seção com `bg-black/40` reduz legibilidade | Acessibilidade | Aumentar contraste, melhor iluminação |
| 3 | **Links de redes sociais duplicados** - Instagram aparece 2x com handles diferentes (`@abellsgastroburguer` vs `@abells_burger`) | Confusão | Unificar informações |
| 4 | **Galeria sem lightbox** - Imagens não expandem, impossível ver detalhes | UX | Implementar visualizador de imagens |
| 5 | **Navegação por âncora desconsidera navbar fixa** - Scroll para seções cobre conteúdo | UX | Adicionar offset ao scroll |

### 🟡 ALTO - Médio Impacto

| # | Problema | Impacto | Solução |
|---|----------|---------|---------|
| 6 | **Botão "Pedir Agora" aponta para `#pedir` mas seção é `#cardapio`** | Usabilidade | Corrigir âncora |
| 7 | **Seção "Sobre" com 2 imagens idênticas** (sobre-nos.png e testimonial-1.png) | Visual | Usar imagens diferentes |
| 8 | **Falta de micro-interações** - Hover states básicos apenas | Engajamento | Adicionar animações mais elaboradas |
| 9 | **Galeria com grid fixo 4 colunas** - Em mobile reduz muito as imagens | Responsividade | Ajustar grid responsivo |
| 10 | **CTAs não destacados** - Botões perdem-se no fundo escuro | Conversão | Melhor contraste e destaque |

### 🟢 MÉDIO - Baixo Impacto

| # | Problema | Impacto | Solução |
|---|----------|---------|---------|
| 11 | **Ícones SVG inline poluem o código** | Manutenção | Extrair para componente |
| 12 | **Sem indicador de carregamento** no drawer | UX | Adicionar skeleton/loader |
| 13 | **Tipografia não escalável em headings** | Acessibilidade | Usar `clamp()` para responsividade |
| 14 | **Falta de breadcrumbs ou progresso** no cardápio | Navegação | Indicar posição atual |
| 15 | **Sem feedback visual após ação** | UX | Toast notifications |

---

## 🎨 Recomendações Prioritárias de UI/UX

### 1. Refatorar Hero Section
```tsx
// Problema atual: Logo 450px domina o espaço
// Sugerido: Logo menor (max 200-250px), mais breathing room
```
**Benefício**: Melhor proporção visual, destaque para copy principal

### 2. Melhorar Contraste do Cardápio
```tsx
// Substituir bg-black/40 por algo mais claro ou
// adicionar gradientes de luz para destacar itens
```
**Benefício**: Acessibilidade WCAG AA, leitura mais confortável

### 3. Implementar Lightbox na Galeria
```tsx
// Ao clicar, abrir modal com imagem em tamanho real
// Com navegação por setas e zoom
```
**Benefício**: Usuários podem apreciar detalhes dos pratos

### 4. Unificar Informações de Contato
```
@abellsgastroburguer → verificar qual é o correto
Atualizar em ambos os lugares
```
**Benefício**: Elimina confusão do cliente

### 5. Adicionar Scroll Offset
```tsx
// Adicionar scroll-margin-top nas seções
// Considerando altura da navbar
```
**Benefício**: Navegação suave e precisa

---

## 📋 Estimativa de Esforço Total

| Fase | Tempo | Impacto |
|------|-------|---------|
| Correções Imediatas | 1-2h | Alto |
| Melhorias Visuais | 3-4h | Alto |
| Features de UX | 4-6h | Médio-Alto |
| Polimento Final | 2-3h | Médio |
| **TOTAL** | **10-15h** | |

---

**Data**: 2026-05-08
**Analista**: Claude (Opus 4.7)
