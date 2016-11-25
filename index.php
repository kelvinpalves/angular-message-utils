<!DOCTYPE html>
<html>
<head>
	<title>Angular Message Utils + Toastr</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="bower_components/toastr/toastr.min.css">
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
	<div class="row" style="padding: 15px;">
		<div class="col-md-12">
			<button class="btn btn-primary">Exemplo Mensagem de Informação</button>
			<button class="btn btn-danger">Exemplo Mensagem de Erro</button>
			<button class="btn btn-warning">Exemplo Mensagem de Alerta</button>
			<button class="btn btn-success">Exemplo Mensagem de Sucesso</button>
			<button class="btn btn-default">Exemplo com Todas as Mensagens</button>	
		</div>
	</div>
	<div class="row" style="padding: 15px;">
		<div class="col-md-12">
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

	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="bower_components/toastr/toastr.min.js"></script>
</body>
</html>