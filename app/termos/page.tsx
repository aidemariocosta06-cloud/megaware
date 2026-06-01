import Link from 'next/link'

export const metadata = {
  title: 'Termos e Condições | MegaWare',
  description: 'Termos e condições de utilização dos serviços da MegaWare.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-bg px-6 pb-20 pt-32">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
          Informação legal
        </p>

        <h1 className="text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          Termos e Condições
        </h1>

        <p className="mt-6 text-sm leading-7 text-slate-600">
          Estes Termos e Condições regulam a utilização do website da MegaWare e dos serviços
          disponibilizados pela empresa. Ao utilizar este website ou solicitar os nossos serviços,
          o utilizador declara que leu, compreendeu e aceita as condições aqui apresentadas.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">1. Identificação</h2>
            <p>
              A MegaWare presta serviços de assistência técnica, soluções informáticas, venda de
              equipamentos, apoio tecnológico e serviços digitais para clientes particulares e empresas.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">2. Utilização do website</h2>
            <p>
              O utilizador compromete-se a utilizar este website de forma responsável, legal e sem
              prejudicar o seu funcionamento, segurança ou disponibilidade. É proibida qualquer tentativa
              de acesso não autorizado, alteração de conteúdos ou utilização abusiva das funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">3. Serviços e orçamentos</h2>
            <p>
              As informações apresentadas no website têm caráter informativo. Os serviços, preços,
              prazos e condições finais podem depender de avaliação técnica, disponibilidade de peças,
              complexidade do serviço e confirmação por parte da MegaWare.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">4. Produtos e disponibilidade</h2>
            <p>
              Os produtos apresentados na loja ou em páginas promocionais podem estar sujeitos a
              disponibilidade de stock, alteração de preço ou atualização de características sem aviso
              prévio. A confirmação final será feita no momento do contacto ou encomenda.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">5. Responsabilidade</h2>
            <p>
              A MegaWare procura garantir que a informação disponibilizada é correta e atualizada, mas
              não garante a ausência total de erros técnicos, falhas temporárias ou interrupções no
              funcionamento do website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">6. Propriedade intelectual</h2>
            <p>
              Todos os conteúdos deste website, incluindo textos, imagens, elementos gráficos, logótipos,
              estrutura visual e componentes de design, pertencem à MegaWare ou são utilizados com a
              devida autorização. A reprodução não autorizada é proibida.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">7. Contacto</h2>
            <p>
              Para qualquer questão relacionada com estes termos, o utilizador pode contactar a MegaWare
              através da página de contacto.
            </p>

            <Link
              href="/contactos"
              className="mt-4 inline-flex rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-light"
            >
              Contactar MegaWare
            </Link>
          </section>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          Última atualização: 2026
        </p>
      </section>
    </main>
  )
}
