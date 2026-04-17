"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X, Info, ShieldAlert } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[92vw] max-w-[440px] p-0 overflow-hidden border border-white/15 bg-black/80 backdrop-blur-md text-white [&>button]:hidden">
        {/* Header */}
        <DialogHeader className="px-5 pt-5 pb-4 border-b border-white/10 flex-row items-center justify-between">
          <DialogTitle className="text-sm font-semibold text-white tracking-tight">
            Divulgação de Informação
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white transition-colors rounded focus:outline-none focus:ring-1 focus:ring-white/30">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </DialogHeader>

        <div className="px-5 py-5 space-y-5">
          {/* Advertiser block */}
          <div className="flex gap-3">
            <div className="mt-0.5 shrink-0 w-7 h-7 rounded-sm bg-portugal-green/20 flex items-center justify-center">
              <Info className="h-3.5 w-3.5 text-portugal-green" />
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-portugal-green uppercase tracking-widest">
                Informação Publicitária
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                O ptbestsitesdeapostas.com é um serviço de comparação independente e gratuito. Podemos receber comissões de afiliação dos operadores em destaque, o que pode influenciar a sua ordem de apresentação, sem prejuízo da objetividade das análises.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Todos os operadores apresentados são licenciados pelo SRIJ. As ofertas de bónus estão sujeitas a alterações — consulte sempre os termos e condições no site do operador antes de os reclamar.
              </p>
            </div>
          </div>

          {/* Age block */}
          <div className="border-t border-white/10 pt-5 flex gap-3">
            <div className="mt-0.5 shrink-0 w-7 h-7 rounded-sm bg-portugal-red/20 flex items-center justify-center">
              <ShieldAlert className="h-3.5 w-3.5 text-portugal-red" />
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-portugal-red uppercase tracking-widest">
                Restrição de Idade · +18
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Este portal destina-se exclusivamente a maiores de 18 anos. Ao navegar neste site confirma que cumpre este requisito legal.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                As apostas devem ser encaradas como entretenimento. Nunca aposte valores que não pode perder. Ajuda:{" "}
                <a href="tel:211210200" className="text-white font-semibold hover:text-portugal-green transition-colors">
                  211 210 200
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 border-t border-white/10 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-white bg-portugal-green hover:bg-portugal-dark-green transition-colors px-5 py-2 rounded-sm"
          >
            Compreendido
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
