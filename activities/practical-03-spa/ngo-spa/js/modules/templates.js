/* ===========================================
   TEMPLATES - cada função retorna o HTML (como string) de uma "página"
   Mantém a lógica de marcação separada da lógica de roteamento
   =========================================== */

export function renderHome() {
  return `
    <section id="sobre">
        <h1>Mãos que Ajudam</h1>
        <img src="../images/equipe-voluntarios.png" alt="Ilustração de voluntários da ONG reunidos para uma ação comunitária">
        <p>Somos uma organização sem fins lucrativos dedicada a transformar
        vidas por meio da solidariedade, conectando doadores e voluntários
        a causas que fazem a diferença na comunidade de Franca e região.</p>
    </section>

    <section id="missao">
        <h2>Nossa Missão</h2>
        <p>Ampliar o alcance social por meio de projetos comunitários,
        promovendo dignidade e oportunidades para quem mais precisa.</p>
    </section>

    <aside>
        <h2>Por que doar?</h2>
        <p>Mais de 820 mil organizações do terceiro setor atuam no Brasil,
        mas apenas 30% possuem presença digital adequada. Sua contribuição
        ajuda a mudar essa realidade.</p>
    </aside>
  `;
}

export function renderProjetos() {
  return `
    <h1>Nossos Projetos</h1>

    <section id="campanhas">
        <h2>Campanhas em Andamento</h2>

        <div class="grid-12">
            <article>
                <span class="badge badge-urgente">Urgente</span>
                <h3>Campanha do Agasalho</h3>
                <img src="../images/campanha-agasalho.png" alt="Ilustração de casacos dobrados representando a campanha do agasalho">
                <p>Arrecadação de roupas de frio para famílias em situação de
                vulnerabilidade durante o inverno.</p>
                <button type="button" class="btn-modal" data-modal="agasalho">Saiba mais</button>
            </article>

            <article>
                <span class="badge badge-ativa">Ativa</span>
                <h3>Reforço Escolar</h3>
                <img src="../images/reforco-escolar.png" alt="Ilustração de um quadro com anotações representando o projeto de reforço escolar">
                <p>Aulas de reforço gratuitas em português e matemática para
                crianças e adolescentes da rede pública.</p>
                <button type="button" class="btn-modal" data-modal="reforco">Saiba mais</button>
            </article>
        </div>
    </section>

    <section id="como-doar">
        <h2>Como Doar</h2>
        <p>Você pode contribuir financeiramente via PIX ou transferência
        bancária, ou doar itens como roupas, alimentos não perecíveis e
        material escolar.</p>
        <ul>
            <li>PIX: contato@maosqueajudam.org.br</li>
            <li>Pontos de coleta: sede da ONG, de segunda a sexta, das 9h às 17h</li>
        </ul>
    </section>

    <section id="cta">
        <h2>Quer fazer parte dessa transformação?</h2>
        <p><a href="#/cadastro">Cadastre-se agora como doador ou voluntário</a></p>
    </section>

    <div class="modal-overlay" id="modal-agasalho" hidden>
        <div class="modal-box" role="dialog" aria-labelledby="modal-agasalho-title">
            <button type="button" class="modal-close" data-close-modal aria-label="Fechar modal">&times;</button>
            <h3 id="modal-agasalho-title">Campanha do Agasalho</h3>
            <span class="badge badge-urgente">Urgente</span>
            <p>Estamos arrecadando casacos, cobertores e roupas de frio em
            bom estado até o fim do inverno. Pontos de coleta abertos de
            segunda a sexta, das 9h às 17h, na sede da ONG.</p>
            <button type="button" class="btn-fechar" data-close-modal>Fechar</button>
        </div>
    </div>

    <div class="modal-overlay" id="modal-reforco" hidden>
        <div class="modal-box" role="dialog" aria-labelledby="modal-reforco-title">
            <button type="button" class="modal-close" data-close-modal aria-label="Fechar modal">&times;</button>
            <h3 id="modal-reforco-title">Reforço Escolar</h3>
            <span class="badge badge-ativa">Ativa</span>
            <p>Aulas gratuitas de português e matemática, duas vezes por
            semana, voltadas a crianças e adolescentes da rede pública.</p>
            <button type="button" class="btn-fechar" data-close-modal>Fechar</button>
        </div>
    </div>
  `;
}

export function renderCadastro() {
  return `
    <h1>Cadastro de Doadores e Voluntários</h1>
    <p>Preencha o formulário abaixo para fazer parte da nossa rede de apoio.</p>

    <div class="alert alert-info" role="status">
        <strong>Atenção:</strong> todos os campos são obrigatórios.
    </div>

    <div id="form-feedback"></div>

    <form id="form-cadastro" novalidate>
        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome completo</label>
            <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
            <span class="erro-campo" id="erro-nome"></span>

            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
            <span class="erro-campo" id="erro-email"></span>

            <label for="nascimento">Data de nascimento</label>
            <input type="date" id="nascimento" name="nascimento" required>
            <span class="erro-campo" id="erro-nascimento"></span>

            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required maxlength="14" placeholder="000.000.000-00">
            <span class="erro-campo" id="erro-cpf"></span>
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>

            <label for="cep">CEP</label>
            <input type="text" id="cep" name="cep" required maxlength="9" placeholder="00000-000">
            <span class="erro-campo" id="erro-cep"></span>

            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
            <span class="erro-campo" id="erro-cidade"></span>

            <label for="estado">Estado</label>
            <select id="estado" name="estado" required>
                <option value="">Selecione</option>
                <option value="SP">São Paulo</option>
                <option value="MG">Minas Gerais</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="PR">Paraná</option>
                <option value="outros">Outro</option>
            </select>
            <span class="erro-campo" id="erro-estado"></span>
        </fieldset>

        <fieldset>
            <legend>Contato e Perfil</legend>

            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
            <span class="erro-campo" id="erro-telefone"></span>

            <label id="perfil-label">Deseja ser:</label>
            <div class="radio-group" role="radiogroup" aria-labelledby="perfil-label">
                <span class="radio-option">
                    <input type="radio" id="doador" name="perfil" value="doador" required>
                    <label for="doador">Doador</label>
                </span>
                <span class="radio-option">
                    <input type="radio" id="voluntario" name="perfil" value="voluntario">
                    <label for="voluntario">Voluntário</label>
                </span>
            </div>
            <span class="erro-campo" id="erro-perfil"></span>
        </fieldset>

        <div class="form-actions">
            <button type="submit">Enviar cadastro</button>
        </div>
    </form>
  `;
}

export function renderNotFound() {
  return `
    <h1>Página não encontrada</h1>
    <p>O conteúdo que você procura não existe. <a href="#/">Voltar ao início</a></p>
  `;
}
