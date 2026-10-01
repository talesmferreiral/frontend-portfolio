/* ===========================================
   DATA.JS - fonte de dados da aplicação
   Mantém o conteúdo separado da marcação: para adicionar uma nova
   campanha, basta acrescentar um objeto a este array, sem tocar em
   nenhum template HTML.
   =========================================== */

const campanhas = [
  {
    id: 'agasalho',
    titulo: 'Campanha do Agasalho',
    badgeTexto: 'Urgente',
    badgeClasse: 'badge-urgente',
    imagem: '../images/campanha-agasalho.png',
    imagemAlt: 'Ilustração de casacos dobrados representando a campanha do agasalho',
    descricaoResumo: 'Arrecadação de roupas de frio para famílias em situação de vulnerabilidade durante o inverno.',
    descricaoCompleta: 'Estamos arrecadando casacos, cobertores e roupas de frio em bom estado até o fim do inverno. Pontos de coleta abertos de segunda a sexta, das 9h às 17h, na sede da ONG.'
  },
  {
    id: 'reforco',
    titulo: 'Reforço Escolar',
    badgeTexto: 'Ativa',
    badgeClasse: 'badge-ativa',
    imagem: '../images/reforco-escolar.png',
    imagemAlt: 'Ilustração de um quadro com anotações representando o projeto de reforço escolar',
    descricaoResumo: 'Aulas de reforço gratuitas em português e matemática para crianças e adolescentes da rede pública.',
    descricaoCompleta: 'Aulas gratuitas de português e matemática, duas vezes por semana, voltadas a crianças e adolescentes da rede pública com dificuldade de aprendizagem.'
  },
  {
    id: 'alimentos',
    titulo: 'Cesta Básica Solidária',
    badgeTexto: 'Ativa',
    badgeClasse: 'badge-ativa',
    imagem: '../images/campanha-agasalho.png',
    imagemAlt: 'Ilustração representando a arrecadação de alimentos não perecíveis',
    descricaoResumo: 'Arrecadação mensal de alimentos não perecíveis destinados a famílias cadastradas em nossa rede de apoio.',
    descricaoCompleta: 'Montamos e entregamos cestas básicas mensalmente para cerca de 60 famílias. Aceitamos doações de arroz, feijão, óleo, açúcar e itens de higiene em nossos pontos de coleta.'
  }
];
