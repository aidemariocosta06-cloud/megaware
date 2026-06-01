import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidade | MegaWare',
  description: 'Política de privacidade e proteção de dados da MegaWare.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-bg px-6 pb-20 pt-32">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
          Proteção de dados
        </p>

        <h1 className="text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          Política de Privacidade
        </h1>

        <p className="mt-6 text-sm leading-7 text-slate-600">
          A MegaWare valoriza a privacidade dos seus clientes e visitantes. Esta Política de Privacidade
          explica de forma simples como podemos recolher, utilizar e proteger os dados pessoais
          fornecidos através do nosso website, formulários, contactos ou pedidos de serviço.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">1. Dados que podemos recolher</h2>
            <p>
              Podemos recolher dados como nome, email, contacto telefónico, localização aproximada,
              mensagem enviada pelo utilizador, dados de faturação, informações sobre equipamentos ou
              outros dados necessários para responder a pedidos de assistência, orçamento ou compra.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">2. Finalidade da recolha</h2>
            <p>
              Os dados são utilizados para responder a contactos, preparar orçamentos, prestar serviços
              técnicos, processar encomendas, gerir apoio ao cliente, melhorar a comunicação e cumprir
              obrigações legais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">3. Conservação dos dados</h2>
            <p>
              Os dados pessoais serão conservados apenas pelo período necessário para cumprir as
              finalidades para as quais foram recolhidos, salvo quando exista obrigação legal de
              conservação por período superior.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">4. Partilha de dados</h2>
            <p>
              A MegaWare não vende dados pessoais a terceiros. Os dados poderão ser partilhados apenas
              quando necessário para prestação de serviços, cumprimento legal, faturação, apoio técnico
              ou utilização de ferramentas essenciais ao funcionamento do website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">5. Cookies</h2>
            <p>
              O website pode utilizar cookies técnicos ou ferramentas de análise para melhorar a
              experiência de navegação, compreender a utilização do website e garantir o seu correto
              funcionamento. O utilizador pode gerir cookies através das definições do navegador.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">6. Direitos do utilizador</h2>
            <p>
              O utilizador pode solicitar o acesso, retificação, atualização ou eliminação dos seus dados
              pessoais, bem como retirar consentimentos previamente dados, nos termos da legislação
              aplicável de proteção de dados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">7. Segurança</h2>
            <p>
              A MegaWare adota medidas técnicas e organizativas adequadas para proteger os dados pessoais
              contra acesso indevido, perda, alteração ou divulgação não autorizada.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-brand-dark">8. Contacto sobre privacidade</h2>
            <p>
              Para exercer direitos ou esclarecer dúvidas sobre esta Política de Privacidade, o utilizador
              pode contactar a MegaWare através da página de contactos.
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
