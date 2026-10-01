/* ===========================================
   MAIN.JS - ponto de entrada da aplicação
   Apenas orquestra a inicialização dos módulos; não contém lógica de
   negócio própria (essa fica dentro de cada módulo especializado).

   Carregado por último (depois de templates.js e router.js), pois
   depende das funções globais definidas neles.
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  Router.initRouter();
});
