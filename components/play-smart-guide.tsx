import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PlaySmartGuide() {
  return (
    <section className="py-12 md:py-16 border-t border-white/10 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-l-4 border-portugal-green pl-6 mb-10">
          <p className="text-sm font-semibold text-portugal-green uppercase tracking-wider mb-2">Guia Prático</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight text-balance">
            Como Começar a Apostar: Passo a Passo
          </h2>
          <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
            Se é novo no mundo das apostas desportivas, este guia explica todo o processo desde o registo até à primeira aposta de forma segura e informada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {[
            {
              num: "1",
              color: "portugal-green",
              title: "Escolha uma Casa de Apostas",
              body: "Consulte o nosso ranking e selecione um operador licenciado que corresponda às suas preferências. Considere bónus oferecidos, mercados disponíveis e métodos de pagamento.",
              tip: "Verifique sempre se o site possui licença válida do SRIJ antes de se registar.",
            },
            {
              num: "2",
              color: "portugal-red",
              title: "Complete o Registo",
              body: "Preencha o formulário com os seus dados pessoais. Será necessário fornecer nome completo, data de nascimento, morada e contactos. Prepare documentos para a verificação de conta.",
              tip: "Utilize sempre dados verdadeiros. Informações falsas podem resultar no bloqueio da conta.",
            },
            {
              num: "3",
              color: "portugal-green",
              title: "Faça o Primeiro Depósito",
              body: "Escolha um método de pagamento e deposite o valor desejado. Se houver bónus de boas-vindas, insira o código promocional antes de confirmar o depósito.",
              tip: "Comece com um valor modesto enquanto se familiariza com a plataforma.",
            },
            {
              num: "4",
              color: "portugal-red",
              title: "Coloque a Sua Primeira Aposta",
              body: "Navegue pelos mercados, selecione o evento desportivo e o tipo de aposta. Insira o valor no boletim e confirme. Acompanhe o resultado e gira o seu bankroll responsavelmente.",
              tip: "Aposte apenas o que pode perder e nunca tente recuperar perdas com apostas impulsivas.",
            },
          ].map((step) => (
            <div key={step.num} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md p-5 flex gap-4">
              <div
                className={`w-9 h-9 rounded-sm bg-${step.color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}
              >
                {step.num}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">{step.body}</p>
                <div className={`bg-white/5 border-l-2 border-${step.color} p-3 rounded-sm`}>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="font-semibold text-white">Nota: </span>{step.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden">
          <div className="border-b border-white/10 px-6 py-5">
            <h3 className="text-lg font-bold text-white">Perguntas Frequentes</h3>
            <p className="text-sm text-gray-400 mt-1">
              Respostas às dúvidas mais comuns sobre apostas desportivas em Portugal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="px-6 py-2">
              <Accordion type="multiple" className="w-full">
                {[
                  {
                    id: "q1",
                    q: "Como escolher a melhor casa de apostas?",
                    a: "Avalie múltiplos critérios: licença SRIJ válida, variedade de mercados desportivos, competitividade das odds, qualidade do bónus, métodos de pagamento e suporte ao cliente. O nosso ranking analisa todos estes fatores.",
                  },
                  {
                    id: "q2",
                    q: "Qual o valor mínimo para começar a apostar?",
                    a: "A maioria das casas permite depósitos mínimos entre 5€ e 10€. As apostas mínimas variam geralmente entre 0,50€ e 1€. Recomendamos começar com valores baixos para ganhar experiência.",
                  },
                  {
                    id: "q3",
                    q: "Os bónus de boas-vindas valem a pena?",
                    a: "Sim, mas é fundamental ler os termos. Os bónus aumentam o seu saldo inicial, mas têm requisitos de rollover. Compare as condições entre operadores e escolha ofertas realistas e transparentes.",
                  },
                ].map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-white/10">
                    <AccordionTrigger className="text-sm font-semibold text-white hover:text-portugal-green py-4 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-300 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="px-6 py-2">
              <Accordion type="multiple" className="w-full">
                {[
                  {
                    id: "q4",
                    q: "Quanto tempo demora um levantamento?",
                    a: "Carteiras digitais (MB WAY, Neteller) processam em 24-48 horas. Transferências bancárias podem demorar 3-5 dias úteis. A primeira retirada pode ser mais lenta devido à verificação de conta.",
                  },
                  {
                    id: "q5",
                    q: "Posso apostar pelo telemóvel?",
                    a: "Sim. Todas as casas de apostas licenciadas em Portugal oferecem versões mobile otimizadas ou aplicações nativas para iOS e Android, com experiência completa de depósitos, apostas ao vivo e levantamentos.",
                  },
                  {
                    id: "q6",
                    q: "Como funcionam as apostas ao vivo?",
                    a: "As apostas ao vivo permitem apostar durante o decorrer do evento desportivo, com odds a atualizar em tempo real. Exigem atenção e decisões rápidas, ideais para quem acompanha os jogos.",
                  },
                ].map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-white/10">
                    <AccordionTrigger className="text-sm font-semibold text-white hover:text-portugal-green py-4 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-300 leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-4">
            <p className="text-xs text-gray-400">
              Ainda tem dúvidas? Consulte a secção de{" "}
              <a href="/responsible-gambling" className="text-portugal-green font-medium hover:underline">
                Jogo Responsável
              </a>{" "}
              para mais informações sobre segurança e limites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
