import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
            Política de Privacidade
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
              Compromisso com a Proteção de Dados
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O ptbestsitesdeapostas.com reconhece a importância fundamental da privacidade dos seus utilizadores e compromete-se a proteger rigorosamente todos os dados pessoais que nos são confiados. Esta Política de Privacidade detalha de forma transparente as práticas de recolha, tratamento e salvaguarda de informações pessoais, em total conformidade com o RGPD e a legislação portuguesa aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Dados Pessoais Recolhidos
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              No âmbito da sua utilização do ptbestsitesdeapostas.com, podemos recolher e processar as seguintes categorias de informação pessoal:
            </p>
            <ul className="space-y-2">
              {[
                "Identificação: nome completo, pseudónimo ou outros identificadores únicos",
                "Contactos: endereço de email, número de telefone e outros meios de comunicação",
                "Informação Técnica: endereço IP, tipo de navegador, sistema operativo e localização geográfica aproximada",
                "Comportamento de Navegação: páginas visitadas, duração das sessões e padrões de interação",
                "Preferências Comunicacionais: consentimentos para newsletters e notificações",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-portugal-green flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Finalidades do Tratamento
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Os dados pessoais recolhidos são processados exclusivamente para as seguintes finalidades:
            </p>
            <ul className="space-y-2">
              {[
                "Disponibilizar e aperfeiçoar os serviços de comparação de operadores de apostas",
                "Personalizar a experiência de navegação com conteúdos relevantes",
                "Enviar comunicações sobre novas análises e ofertas exclusivas (com consentimento)",
                "Realizar análises estatísticas para otimizar o portal",
                "Proteger a integridade e segurança da plataforma",
                "Cumprir obrigações legais impostas por autoridades reguladoras",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-portugal-green flex-shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Partilha com Entidades Terceiras
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              O ptbestsitesdeapostas.com pode partilhar dados pessoais com terceiros nas seguintes situações:
            </p>
            <ul className="space-y-2">
              {[
                "Operadores de apostas licenciados quando clica em links de afiliação do nosso portal",
                "Prestadores de serviços técnicos para manutenção, hospedagem e suporte",
                "Plataformas de análise web para fins estatísticos agregados",
                "Autoridades judiciais ou reguladoras quando legalmente obrigados",
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
              Os seus Direitos ao Abrigo do RGPD
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Acesso", text: "Obter confirmação e cópia dos dados que tratamos sobre si." },
                { title: "Retificação", text: "Solicitar a correção de dados incompletos ou inexatos." },
                { title: "Apagamento", text: "Requerer a eliminação dos seus dados pessoais." },
                { title: "Limitação", text: "Restringir o tratamento dos seus dados em determinadas circunstâncias." },
                { title: "Portabilidade", text: "Receber os seus dados em formato estruturado e legível por máquina." },
                { title: "Oposição", text: "Opor-se ao tratamento para finalidades específicas, como marketing direto." },
              ].map((right) => (
                <div key={right.title} className="bg-card border border-border p-3 rounded-md">
                  <p className="text-xs font-semibold text-foreground mb-1">Direito de {right.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{right.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Medidas de Segurança
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger os seus dados pessoais contra acesso não autorizado, incluindo encriptação SSL/TLS, controlos de acesso rigorosos e auditorias periódicas de segurança. Contudo, nenhuma transmissão de dados pela internet é completamente segura, pelo que não podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
              Contacto e Reclamações
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Para exercer os seus direitos ou colocar questões sobre proteção de dados, contacte:{" "}
              <a
                href="mailto:privacidade@ptbestsitesdeapostas.com"
                className="text-foreground font-medium hover:text-portugal-green transition-colors"
              >
                privacidade@ptbestsitesdeapostas.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), autoridade de controlo competente em Portugal.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
