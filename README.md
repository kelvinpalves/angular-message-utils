## MessageUtils + Toastr

Módulo para gerenciar as mensagens do sistema.

Para utilização do módulo basta injeta-lo no seu núcleo principal.

```javascript
angular.module('app', ['app.core']);
```

O retorno esperado pelo serviço deverá seguir o seguinte padrão:

```javascript
 {
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
 }
```

Este é o padrão retornado pela factory $http do AngularJS.

O atributo "data" deverá ser criado pelo Back-End.

### Exemplo

![Exemplo](http://github.com/kelvinpalves/angular-message-utils/tree/master/src/img/exemplo.png)

### Créditos e Dependências

**toastr** [https://github.com/CodeSeven/toastr]

**AngularJS** [https://github.com/angular/angular.js]