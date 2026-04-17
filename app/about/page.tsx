import { Shield, Award, Users, BarChart, Target, Lightbulb } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="bg-site-header border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl py-8 md:py-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-portugal-green mb-2">
            Quem Somos
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white text-balance">
            Sobre o ptbestsitesdeapostas
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Comparador independente de apostas desportivas em Portugal
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-10">

          {/* Intro */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
              A Nossa Missão
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O ptbestsitesdeapostas.com nasceu da necessidade de criar um portal informativo rigoroso, dedicado aos apostadores portugueses que procuram orientação objetiva no mercado regulado de apostas desportivas. Somos uma equipa de analistas especializados com vasta experiência no setor do jogo online em Portugal.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desde a regulamentação do mercado, acompanhamos a evolução do setor, testamos dezenas de plataformas e desenvolvemos uma metodologia de avaliação rigorosa que coloca sempre o apostador no centro das nossas análises.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
              A Nossa Visão
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Acreditamos que o apostador português merece acesso a informação transparente, imparcial e atualizada sobre os operadores licenciados pelo SRIJ. O nosso objetivo é apresentar análises técnicas que ajudam cada utilizador a identificar a plataforma mais adequada ao seu perfil, sem ruído publicitário.
            </p>
          </section>

          {/* Methodology */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Metodologia de Avaliação
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Cada operador é submetido a um processo de avaliação exaustivo que abrange múltiplas dimensões:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Shield className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Segurança e Licenciamento",
                  text: "Verificação rigorosa do licenciamento SRIJ, protocolos de encriptação e conformidade com a legislação portuguesa.",
                },
                {
                  icon: <Award className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Ofertas e Condições",
                  text: "Análise de bónus de boas-vindas, promoções e programas VIP. Exame detalhado de requisitos de rollover e restrições.",
                },
                {
                  icon: <Users className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Usabilidade da Plataforma",
                  text: "Testes da interface em desktop e mobile, avaliando velocidade, intuitividade e acessibilidade geral.",
                },
                {
                  icon: <BarChart className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Mercados e Cotações",
                  text: "Comparação da amplitude de desportos, variedade de mercados e competitividade das odds oferecidas.",
                },
                {
                  icon: <Target className="h-5 w-5 text-portugal-green flex-shrink-0" />,
                  title: "Pagamentos e Transações",
                  text: "Teste de todos os métodos de depósito e levantamento, com cronometragem real dos prazos de processamento.",
                },
                {
                  icon: <Lightbulb className="h-5 w-5 text-portugal-red flex-shrink-0" />,
                  title: "Apoio ao Cliente",
                  text: "Contacto com suporte via todos os canais disponíveis, avaliando tempos de resposta e qualidade do serviço.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 bg-card border border-border rounded-md"
                >
                  {item.icon}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Transparency */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Transparência e Parcerias
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O ptbestsitesdeapostas.com mantém parcerias comerciais com diversos operadores licenciados. Quando efetua um registo através dos nossos links, podemos receber uma comissão de afiliação. Esta relação comercial é sempre divulgada de forma clara.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Garantimos que estas parcerias não comprometem a independência das nossas análises. As classificações baseiam-se exclusivamente nos méritos objetivos de cada plataforma, avaliados com base nos critérios descritos acima.
            </p>
          </section>

          {/* Responsible gambling */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Jogo Responsável
            </h2>
            <div className="bg-card border-l-2 border-portugal-red p-4 rounded-r-md">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Promovemos ativamente práticas de jogo responsável. As apostas devem ser encaradas como entretenimento, nunca como fonte de rendimento. Incentivamos todos os utilizadores a estabelecer limites claros de tempo e orçamento. Em caso de dificuldades, contacte o SICAD: <a href="tel:211210200" className="text-foreground font-medium hover:text-portugal-green transition-colors">211 210 200</a>.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Contacto
            </h2>
            <div className="bg-card border border-border p-4 rounded-md">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para questões, correções ou sugestões, contacte a nossa equipa editorial:{" "}
                <a
                  href="mailto:redacao@ptbestsitesdeapostas.com"
                  className="text-foreground font-medium hover:text-portugal-green transition-colors"
                >
                  redacao@ptbestsitesdeapostas.com
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">Comprometemo-nos a responder em 48 horas úteis.</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
