export function AboutSection() {
  return (
    <section className="py-10 md:py-12 border-t border-white/10">
      <div className="max-w-[1150px] mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="block w-6 h-px bg-portugal-green" />
            <p className="text-xs font-semibold tracking-widest uppercase text-portugal-green">Sobre Nós</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
            O que é o ptbestsitesdeapostas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-black/40 backdrop-blur-sm rounded-sm p-5 border border-white/10 border-l-2 border-l-portugal-green">
            <h3 className="text-sm font-semibold text-white mb-2">A Nossa Missão</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              O ptbestsitesdeapostas é o portal de referência para apostadores portugueses que procuram informação fiável sobre casas de apostas legais em Portugal. Analisamos criteriosamente cada operador licenciado pelo SRIJ, garantindo recomendações de plataformas seguras e confiáveis.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-sm p-5 border border-white/10 border-l-2 border-l-portugal-red">
            <h3 className="text-sm font-semibold text-white mb-2">Metodologia Rigorosa</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              A nossa equipa avalia cada casa de apostas com base em critérios objetivos: variedade de mercados, competitividade de odds, qualidade do serviço ao cliente, métodos de pagamento, bónus e experiência do utilizador. Todas as classificações resultam de testes reais e análises imparciais.
            </p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-sm border border-white/10">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: "100%", label: "Operadores Licenciados SRIJ", color: "text-portugal-green" },
              { value: "24/7", label: "Monitorização de Ofertas", color: "text-portugal-red" },
              { value: "+50", label: "Casas de Apostas Analisadas", color: "text-white" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 text-center">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-xs text-gray-400 max-w-3xl">
            Todas as casas de apostas recomendadas possuem licença válida do Serviço de Regulação e Inspeção de Jogos (SRIJ) e cumprem a legislação portuguesa em vigor. As apostas são proibidas a menores de 18 anos.
          </p>
        </div>
      </div>
    </section>
  )
}
