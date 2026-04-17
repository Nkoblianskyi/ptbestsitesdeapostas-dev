import { AlertTriangle, Clock, Ban, Wallet, Brain, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="bg-site-header border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl py-8 md:py-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-portugal-red mb-2">
            Aviso Importante
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white text-balance">
            Jogo Responsável
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Aposte com consciência e dentro dos seus limites
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-8">

          {/* Intro alert */}
          <div className="bg-card border-l-2 border-portugal-red p-4 rounded-r-md border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              O ptbestsitesdeapostas.com defende que as apostas desportivas devem ser encaradas exclusivamente como forma de entretenimento, nunca como meio de obter rendimento ou solucionar dificuldades financeiras. Se sente que o jogo está a afetar a sua vida, procure ajuda imediatamente.
            </p>
          </div>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Identificar Comportamentos de Risco
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Reconhecer sinais de alerta é fundamental. Se identifica algum destes comportamentos, procure apoio profissional:
            </p>
            <ul className="space-y-2">
              {[
                "Dedicar tempo ou recursos financeiros superiores ao que pode permitir-se",
                "Dificuldade em controlar ou interromper a atividade de apostas",
                "Ocultar de familiares a extensão real dos seus hábitos de apostas",
                "Recorrer às apostas como fuga a problemas pessoais ou emocionais",
                "Contrair empréstimos para financiar apostas desportivas",
                "Negligenciar responsabilidades profissionais, familiares ou sociais",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-portugal-red flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Princípios de Apostas Conscientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: <Clock className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Estabeleça Limites Temporais",
                  text: "Defina quanto tempo pretende dedicar às apostas e respeite esse limite com rigor.",
                },
                {
                  icon: <Wallet className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Defina Orçamentos Rígidos",
                  text: "Aposte exclusivamente com valores que pode perder sem comprometer o seu bem-estar financeiro.",
                },
                {
                  icon: <Ban className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Faça Intervalos Regulares",
                  text: "Apostar continuamente compromete a capacidade de tomar decisões racionais e informadas.",
                },
                {
                  icon: <Brain className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Aposte com Conhecimento",
                  text: "Compreenda as probabilidades e as regras dos mercados em que aposta antes de o fazer.",
                },
                {
                  icon: <AlertTriangle className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Nunca Persiga Perdas",
                  text: "Tentar recuperar perdas anteriores conduz frequentemente a perdas ainda maiores.",
                },
                {
                  icon: <Phone className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Procure Apoio Especializado",
                  text: "Não hesite em contactar serviços especializados. O apoio é gratuito e confidencial.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-card border border-border rounded-md">
                  {item.icon}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Apoio Especializado em Portugal
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Organizações que disponibilizam apoio gratuito e confidencial a jogadores com dificuldades:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { org: "SICAD", contact: "211 210 200", href: "tel:211210200" },
                { org: "Linha SOS Vício do Jogo", contact: "213 950 213", href: "tel:213950213" },
                { org: "APAJO", contact: "Apoio presencial e online", href: "#" },
                { org: "GamCare", contact: "gamcare.org.uk", href: "https://www.gamcare.org.uk" },
              ].map((item) => (
                <div key={item.org} className="bg-card border border-border p-3 rounded-md flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-foreground">{item.org}</p>
                  <a
                    href={item.href}
                    className="text-xs text-portugal-green font-medium hover:text-portugal-dark-green transition-colors"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.contact}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Ferramentas de Autocontrolo
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Os operadores licenciados pelo SRIJ são obrigados a disponibilizar as seguintes ferramentas de controlo:
            </p>
            <ul className="space-y-2">
              {[
                "Limites de Depósito — valores máximos configuráveis por dia, semana ou mês",
                "Limites de Aposta — controlo do montante máximo por sessão ou por evento",
                "Limites de Tempo — duração máxima das sessões de jogo",
                "Períodos de Reflexão — pausas temporárias de 24 horas até 6 semanas",
                "Autoexclusão — bloqueio permanente ou de longa duração da conta",
                "Alertas de Realidade — notificações sobre tempo decorrido e valores apostados",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-portugal-green flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
