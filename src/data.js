// ÚNICO arquivo que você precisa editar.
export const profile = {
  name: 'João Franco',
  role: 'Full Stack',
  focus: 'High-performance & Distributed Systems',
  location: 'Brazil / Remote',
  education: 'Estácio',
  email: 'joao.franco.biz@gmail.com',
  github: 'https://github.com/JoaoFariasFranco',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-farias-franco-75bb70210/',
  // TODO: 2-3 frases suas. Placeholder abaixo.
  about: [
    'Desenvolvedor full stack. Construo sistemas de gestão e integrações entre plataformas — do schema no PostgreSQL até a interface.',
    'Experiência real em Supabase (RLS, RPCs, triggers), automações e apps para Pipefy (SDK, GraphQL, OAuth 2.0), Python/Streamlit e deploy em Vercel/Azure.',
    'Foco em sistemas confiáveis: validação, tolerância a falhas, logs úteis e segurança no acesso a dados.',
  ],
}

// Agrupe como quiser. Chave = label da linha.
export const stack = {
  Backend: ['Python', 'Node.js', 'GraphQL', 'REST/Webhooks'],
  Frontend: ['JavaScript', 'HTML/CSS', 'Streamlit', 'Chart.js'],
  Dados: ['PostgreSQL', 'SQL', 'Supabase (RLS, RPC)'],
  Cloud: ['Azure', 'Vercel', 'Docker'],
  Plataformas: ['Pipefy Apps SDK', 'Power BI', 'Microsoft 365'],
}

// `repo`: deixe '' enquanto o repo for privado (evita link quebrado).
export const projects = [
  {
    name: 'controle-semijoias',
    desc: 'ERP web para gestão de semijoias: kanban de pedidos, maletas de consignação, estoque, compras, contas a pagar/receber, comissões progressivas e dashboard. Backend inteiro no Supabase (PostgreSQL com RLS, RPCs, triggers, storage privado).',
    tech: ['JavaScript', 'Supabase', 'PostgreSQL', 'Chart.js'],
    repo: '',
    demo: '',
    status: 'prod',
  },
  {
    name: 'pipefy-importer',
    desc: 'App Streamlit para criar/atualizar cards e registros do Pipefy em massa a partir de CSV/XLSX. OAuth 2.0 (service account), mapeamento de campos, conversão de tipos, batching, cache de labels/membros e log linha a linha exportável.',
    tech: ['Python', 'Streamlit', 'GraphQL', 'pandas'],
    repo: '',
    demo: '',
    status: 'prod',
  },
  {
    name: 'pipefy-apps',
    desc: 'Conjunto de apps nativos do Pipefy (SDK): aba de card que aprova cotações e move propostas em massa via GraphQL; botão de card que sincroniza fornecedor com ERP via webhook; botão de pipe com relatório Power BI embutido.',
    tech: ['JavaScript', 'Pipefy SDK', 'GraphQL', 'Vercel'],
    repo: '',
    demo: '',
    status: 'prod',
  },
]
