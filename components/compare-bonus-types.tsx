import { Gift, Coins, Zap } from "lucide-react"
import { FadeIn } from "./animations/fade-in"

export function CompareBonusTypes() {
  return (
    <section className="py-12 md:py-16 border-t border-white/10 max-w-[1150px] mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="border-l-4 border-portugal-red pl-6 mb-12">
            <p className="text-sm font-semibold text-portugal-red uppercase tracking-wider mb-2">Guia de Bónus</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight text-balance">
              Tipos de Bónus: Entenda as Diferenças
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
              Nem todos os bónus são iguais. Conheça as principais modalidades de promoções oferecidas pelas casas de apostas e saiba qual se adequa melhor ao seu perfil de apostador.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100}>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md p-5 border-t-2 border-t-portugal-green">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-portugal-green/20 rounded">
                  <Gift className="h-5 w-5 text-portugal-green" />
                </div>
                <h3 className="text-base font-bold text-white">Apostas Grátis</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Créditos oferecidos pela casa de apostas que permitem fazer apostas sem utilizar o seu próprio saldo. Os ganhos são creditados como dinheiro real, excluindo o valor da aposta.
              </p>
              <div className="bg-white/5 rounded p-3">
                <p className="text-xs font-semibold text-white mb-1">Como funciona:</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Após cumprir os requisitos (geralmente uma aposta qualificativa), recebe o valor em apostas grátis.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md p-5 border-t-2 border-t-portugal-red">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-portugal-red/20 rounded">
                  <Coins className="h-5 w-5 text-portugal-red" />
                </div>
                <h3 className="text-base font-bold text-white">Bónus de Depósito</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                A casa de apostas iguala uma percentagem do seu primeiro depósito, adicionando fundos extra para aumentar o seu poder de aposta.
              </p>
              <div className="bg-white/5 rounded p-3">
                <p className="text-xs font-semibold text-white mb-1">Como funciona:</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Deposite um valor e receba um bónus percentual (ex: 100% até 50€). Os fundos ficam bloqueados até cumprir os requisitos de rollover.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-md p-5 border-t-2 border-t-portugal-green">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-portugal-green/20 rounded">
                  <Zap className="h-5 w-5 text-portugal-green" />
                </div>
                <h3 className="text-base font-bold text-white">Bónus Sem Depósito</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Créditos oferecidos apenas pelo registo, sem necessidade de qualquer depósito inicial. Ideal para testar o serviço sem risco.
              </p>
              <div className="bg-white/5 rounded p-3">
                <p className="text-xs font-semibold text-white mb-1">Como funciona:</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Complete o registo e verificação da conta. Os valores são geralmente mais baixos com rollover mais exigente.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 bg-black/40 backdrop-blur-sm border border-white/10 border-l-4 border-l-white/30 p-5 rounded-sm">
            <p className="text-sm font-semibold text-white mb-2">Nota Editorial</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leia sempre os termos e condições antes de aceitar qualquer bónus. Verifique os requisitos de rollover, odds mínimas, prazos de validade e restrições de mercados. Um bónus com termos justos vale mais do que um valor elevado com condições impossíveis de cumprir.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
