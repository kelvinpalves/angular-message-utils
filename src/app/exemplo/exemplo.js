(function () {
	'use strict';

	angular
		.module('app.exemplo')
		.controller('Exemplo', Exemplo);

	Exemplo.$inject = ['messageUtils'];

	function Exemplo(messageUtils) {
		var vm = this;
		vm.msgError = msgError;
		vm.msgInfo = msgInfo;
		vm.msgSuccess = msgSuccess;
		vm.msgWarn = msgWarn;
		vm.semMensagem = semMensagem;
		vm.todas = todas;
		vm.vazio = vazio;

		function msgError() {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": false,
				 		"message": [
				 			["ERROR", "Exemplo Mensagem de Erro"]
				 		]
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}

		function msgInfo() {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": false,
				 		"message": [
				 			["INFO", "Exemplo Mensagem de Informação"]
				 		]
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}

		function msgSuccess() {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": false,
				 		"message": [
				 			["SUCCESS", "Exemplo Mensagem de Sucesso"]
				 		]
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}

		function msgWarn() {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": false,
				 		"message": [
				 			["WARNING", "Exemplo Mensagem de Alerta"]
				 		]
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}

		function todas() {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": false,
				 		"message": [
				 			["ERROR", "Primeira Mensagem de Erro"],
				 			["ERROR", "Segunda Mensagem de Erro"],
				 			["INFO", "Exemplo Mensagem de Informação"],
				 			["WARNING", "Exemplo Mensagem de Alerta"],
				 			["SUCCESS", "Exemplo Mensagem de Sucesso"]
				 		]
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}

		function vazio() {
			messageUtils.feedMessage({});
		}

		function semMensagem(executed) {
			var retornoHTTP =  {
				 	"data": {
				 		"data": {},
				 		"executed": executed,
				 		"message": []
				 	},
				 	"status": 200,
				 	"config": {
				 		"method": "POST",
				 		"transformRequest": [null],
				 		"transformResponse": [null],
				 		"url": "http://localhost:8080/servico/rs/acao",
				 		"data": {},
				 		"headers": {
				 			"Accept": "application/json, text/plain, */*",
				 			"Content-Type": "application/json;charset=utf-8",
				 			"Authorization": "Bearer JSON Web Token"
				 		},
				 		"cached": false
				 	},
				 	"statusText": "OK"
				};

			messageUtils.feedMessage(retornoHTTP);
		}
	}
})();