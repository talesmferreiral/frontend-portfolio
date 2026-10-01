/* ===========================================
   INTERACTIONS.JS - escuta de eventos do usuário (reatividade)

   Estratégia: EVENT DELEGATION.
   Como o router.js recria o conteúdo de #app a cada troca de rota
   (app.innerHTML = html), qualquer listener preso diretamente a um
   elemento gerado dinamicamente (um card, um botão de modal) seria
   destruído na próxima navegação. Em vez de reanexar listeners a
   cada renderização, registramos UM único listener em document, que
   nunca é recriado, e verificamos o alvo real do clique através de
   event.target.closest(seletor). Isso cobre até elementos que ainda
   nem existem no momento em que o listener é registrado.
   =========================================== */

function abrirModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add('is-open');
}

function fecharModal(modalElement) {
  modalElement.classList.remove('is-open');
  modalElement.hidden = true;
}

// --- NOVO: Função para salvar cadastro no localStorage ---
function salvarNoLocalStorage(dados) {
  let historico = JSON.parse(localStorage.getItem('historico-cadastros') || '[]');
  historico.push(dados);
  localStorage.setItem('historico-cadastros', JSON.stringify(historico));
}

// --- NOVO: Função para obter último cadastro do localStorage ---
function obterUltimoCadastro() {
  const ultimo = localStorage.getItem('ultimo-cadastro');
  return ultimo ? JSON.parse(ultimo) : null;
}

// --- NOVO: Função para restaurar interface do utilizador ---
function restaurarInterface() {
  // Recuperar último cadastro para mensagem de boas-vindas
  const ultimoCadastro = obterUltimoCadastro();
  if (ultimoCadastro) {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <div class="alert alert-success" role="status">
          <strong>Bem-vindo de volta, ${ultimoCadastro.nome}!</strong>
          <br><small>Seu último cadastro foi em ${new Date(ultimoCadastro.dataCadastro).toLocaleDateString('pt-BR')}</small>
        </div>
        ${Templates.renderHome()}
      `;
    }
  }

  // Recuperar histórico de cadastros para exibição
  const historicoStr = localStorage.getItem('historico-cadastros');
  const historico = historicoStr ? JSON.parse(historicoStr) : [];

  // Se houver histórico, pode-se exibir resumo (opcional)
  // Isso ficaria a cargo do designer/desenvolvedor estender o Templates.renderHome()
}

/* ===========================================
   Eventos do formulário de cadastro (rota /cadastro)
   Registrados via Router.registerAfterRender, ou seja, são reanexados
   toda vez que essa rota é renderizada (diferente dos eventos globais
   acima, que usam delegação e só precisam ser registrados uma vez).
   =========================================== */

const regras = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  cep: /^\d{5}-\d{3}$/,
  telefone: /^\(\d{2\)\s\d{4,5}-\d{4}$/,
  email: /^\S+@\S+\.\S+$/
};

function validarCampo(campo) {
  const erroEl = document.getElementById('erro-' + campo.name);
  let mensagem = '';

  if (campo.hasAttribute('required') && campo.value.trim() === '') {
    mensagem = 'Este campo é obrigatório.';
  } else if (regras[campo.name] && campo.value && !regras[campo.name].test(campo.value)) {
    mensagem = 'Formato inválido.';
  }

  if (erroEl) erroEl.textContent = mensagem;
  campo.classList.toggle('campo-invalido', mensagem !== '');
  campo.classList.toggle('campo-valido', mensagem === '' && campo.value.trim() !== '');

  return mensagem === '';
}

function validarPerfilSelecionado(form) {
  const marcado = form.querySelector('input[name="perfil"]:checked');
  const erroEl = document.getElementById('erro-perfil');
  if (erroEl) erroEl.textContent = marcado ? '' : 'Selecione uma opção.';
  return Boolean(marcado);
}

function validarFormulario(form) {
  const campos = form.querySelectorAll('input[name], select[name]'];
  let tudoValido = true;

  campos.forEach(function (campo) {
    if (campo.type === 'radio') return; // tratado à parte
    const valido = validarCampo(campo);
    if (!valido) tudoValido = false;
  });

  if (!validarPerfilSelecionado(form)) {
    tudoValido = false;
  }

  return tudoValido;
}

function initFormEvents() {
  const form = document.getElementById('form-cadastro');
  if (!form) return; // esta função só faz sentido na rota /cadastro

  // Evento SUBMIT: dispara ao clicar em "Enviar cadastro" ou pressionar Enter
  form.addEventListener('submit', function (event) {
    // Impede o comportamento padrão do navegador (que recarregaria a
    // página inteira e navegaria para a action="#"), pois quem controla
    // a navegação aqui é o router da SPA, não o navegador
    event.preventDefault();

    const feedback = document.getElementById('form-feedback');
    const valido = validarFormulario(form);

    if (valido) {
      // --- NOVO: Preparar dados para salvar no localStorage ---
      const dadosCadastro = {
        nome: form.nome.value,
        email: form.email.value,
        cpf: form.cpf.value,
        nascimento: form.nascimento.value,
        cep: form.cep.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
        telefone: form.telefone.value,
        perfil: form.perfil.value,
        dataCadastro: new Date().toISOString()
      };

      // Salvar no localStorage antes de resetar o formulário
      salvarNoLocalStorage(dadosCadastro);
      // Também salvar o último cadastro para mensagem de boas-vindas
      localStorage.setItem('ultimo-cadastro', JSON.stringify(dadosCadastro));

      feedback.innerHTML = '<div class="alert alert-success" role="status">'
        + '<strong>Cadastro enviado com sucesso!</strong> Em breve nossa equipe entrará em contato.</div>';
      form.reset();
      form.querySelectorAll('.campo-valido').forEach(function (el) {
        el.classList.remove('campo-valido');
      });
    } else {
      feedback.innerHTML = '<div class="alert alert-error" role="alert">'
        + '<strong>Erro no envio:</strong> verifique os campos destacados abaixo.</div>';
    }
  });

  // Evento INPUT (delegado dentro do form): valida cada campo em tempo
  // real, conforme o usuário digita, sem esperar o envio do formulário
  form.addEventListener('input', function (event) {
    if (event.target.matches('input, select')) {
      validarCampo(event.target);
    }
  });

  // Evento CHANGE nos radios de perfil (input não dispara bem para radio
  // em todos os navegadores da mesma forma que change)
  form.addEventListener('change', function (event) {
    if (event.target.name === 'perfil') {
      validarPerfilSelecionado(form);
    }
  });
}

// Objeto global exposto para outros módulos (main.js chama initGlobalEvents
// uma única vez; router.js chama initFormEvents após renderizar /cadastro)
const Interactions = { initGlobalEvents, initFormEvents, restaurarInterface, salvarNoLocalStorage, obterUltimoCadastro };
