import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="bg-site-header border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl py-8 md:py-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-portugal-green mb-2">
            Política Legal
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white text-balance">
            Política de Cookies
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Última atualização: 27 de Janeiro de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-8">

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              O que são Cookies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cookies são pequenos ficheiros de texto guardados no seu navegador ou dispositivo quando visita websites. No ptbestsitesdeapostas.com utilizamos esta tecnologia para melhorar a sua experiência de navegação, personalizar conteúdos apresentados e compreender como os visitantes interagem com o nosso portal de análise de apostas desportivas.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Como Utilizamos Cookies
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O nosso portal emprega cookies para os seguintes propósitos fundamentais:
            </p>
            <ul className="space-y-2">
              {[
                "Assegurar o funcionamento técnico correto de todas as funcionalidades do website",
                "Recordar as suas preferências de visualização e configurações personalizadas",
                "Melhorar a velocidade de carregamento através de cache inteligente de recursos",
                "Recolher dados estatísticos agregados sobre padrões de navegação",
                "Apresentar recomendações de operadores de apostas alinhadas com o seu perfil",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-portugal-green flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Tipos de Cookies Implementados
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Cookies Essenciais",
                  color: "border-portugal-green",
                  text: "Indispensáveis para o funcionamento básico do ptbestsitesdeapostas.com. Permitem navegação segura, gestão de sessões e acesso a funcionalidades protegidas. Não podem ser desativados.",
                },
                {
                  title: "Cookies de Desempenho",
                  color: "border-border",
                  text: "Recolhem informação anónima sobre como os visitantes utilizam o website. Estes dados estatísticos ajudam-nos a identificar páginas populares e otimizar a estrutura do portal.",
                },
                {
                  title: "Cookies Funcionais",
                  color: "border-border",
                  text: "Permitem ao website recordar escolhas que faz (como preferências de visualização), proporcionando funcionalidades melhoradas e mais personalizadas.",
                },
                {
                  title: "Cookies de Marketing",
                  color: "border-portugal-red",
                  text: "Utilizados para apresentar análises de operadores e ofertas de bónus mais relevantes para o seu perfil de interesse. Podem ser partilhados com parceiros de publicidade.",
                },
              ].map((item) => (
                <div key={item.title} className={`bg-card border-l-2 ${item.color} border border-border border-l-[3px] p-4 rounded-r-md`}>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Cookies de Terceiros
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Em determinadas circunstâncias, o ptbestsitesdeapostas.com utiliza cookies fornecidos por parceiros externos:
            </p>
            <ul className="space-y-2">
              {[
                "Plataformas de análise web como Google Analytics para compreender o comportamento dos visitantes",
                "Botões de partilha social que facilitam a divulgação dos nossos artigos",
                "Operadores de apostas parceiros que podem utilizar cookies de rastreamento para identificar referências",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Gestão das suas Preferências
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Mantém controlo total sobre os cookies armazenados. A generalidade dos navegadores modernos permite configurar preferências de cookies, incluindo bloqueio automático ou eliminação periódica. Tenha em atenção que desativar cookies essenciais pode comprometer o correto funcionamento do website.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Para desativar especificamente o rastreamento do Google Analytics, pode instalar o complemento oficial disponível em{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-portugal-green transition-colors"
              >
                tools.google.com/dlpage/gaoptout
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Contacto
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Para dúvidas sobre a nossa utilização de cookies, contacte:{" "}
              <a
                href="mailto:privacidade@ptbestsitesdeapostas.com"
                className="text-foreground font-medium hover:text-portugal-green transition-colors"
              >
                privacidade@ptbestsitesdeapostas.com
              </a>
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
