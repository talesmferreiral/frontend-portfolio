/* ===========================================
   MAIN.JS - ponto de entrada da aplicação
   Apenas orquestra a inicialização dos módulos; não contém lógica de
   negócio própria (essa fica dentro de cada módulo especializado).

   Carregado por último (depois de templates.js e router.js), pois
   depende das funções globais definidas neles.
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  // Eventos globais (delegados) só precisam ser registrados uma vez,
  // pois continuam funcionando mesmo depois que #app é recriado
  Interactions.initGlobalEvents();

  // Registra a função que deve rodar toda vez que a rota /cadastro for
  // renderizada (o formulário é recriado a cada navegação, então os
  // listeners específicos dele também precisam ser reanexados)
  Router.registerAfterRender('/cadastro', Interactions.initFormEvents);

  Router.initRouter();
});
