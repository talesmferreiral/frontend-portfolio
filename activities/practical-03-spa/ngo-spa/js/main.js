/* ===========================================
   MAIN.JS - ponto de entrada da aplicação
   Apenas orquestra a inicialização dos módulos; não contém lógica de
   negócio própria (essa fica dentro de cada módulo especializado).
   =========================================== */

import { initRouter } from './modules/router.js';

initRouter();
