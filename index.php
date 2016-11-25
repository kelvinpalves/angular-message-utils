<!DOCTYPE html>
<html ng-app="app" ng-strict-di>
<head>
	<title>Angular Message Utils + Toastr</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="bower_components/toastr/toastr.min.css">
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
	<div class="row" style="padding: 15px;">
		<div class="col-md-12" ng-controller="Exemplo as vm">
			<button class="btn btn-primary" ng-click="vm.msgInfo()">Informação</button>
			<button class="btn btn-danger" ng-click="vm.msgError()">Erro</button>
			<button class="btn btn-warning" ng-click="vm.msgWarn()">Alerta</button>
			<button class="btn btn-success" ng-click="vm.msgSuccess()">Sucesso</button>
			<button class="btn btn-default" ng-click="vm.todas()">Diversas</button>	
			<button class="btn btn-default" ng-click="vm.vazio()">Retorno Vazio</button>	
			<button class="btn btn-danger" ng-click="vm.semMensagem(false)">Sem Mensagens Erro</button>	
			<button class="btn btn-success" ng-click="vm.semMensagem(true)">Sem Mensagens Sucesso</button>	
		</div>
	</div>
	<div class="row" style="padding: 15px;">
		<div class="col-md-12">
			<strong>Retorno $http:</strong>
			<pre>
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
			</pre>
		</div>	
	</div>

	<!-- vendor -->
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="bower_components/toastr/toastr.min.js"></script>
	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>

	<!-- utils -->
	<script type="text/javascript" src="src/app/app.module.js"></script>
	<script type="text/javascript" src="src/app/core/core.module.js"></script>
	<script type="text/javascript" src="src/app/core/core.constants.js"></script>
	<script type="text/javascript" src="src/app/core/utils/utils.module.js"></script>
	<script type="text/javascript" src="src/app/core/utils/message.constants.js"></script>
	<script type="text/javascript" src="src/app/core/utils/message.factory.js"></script>

	<!-- exemplo -->
	<script type="text/javascript" src="src/app/exemplo/exemplo.module.js"></script>
	<script type="text/javascript" src="src/app/exemplo/exemplo.js"></script>
</body>
</html>