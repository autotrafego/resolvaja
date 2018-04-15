<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>


    



<script type="text/javascript" src="js/jquery-1.8.2.js"></script>

</head>
<body>
<link rel="stylesheet" type="text/css" href="css/estilo.css">

   <div id="conteudo">
   		<p><span class="destaque">Populando selects usando AJAX + JSON + PHP</span></p>
        <hr />
        <br/>
        
        <div id="pais">
          <label>Selecione o País:</label>
          <select id="cmbPais">
              <option>Carregar Paises</option>
          </select>
          <input type="button" value="Carregar Pais" id="btnPais" class="botao"/>
        </div>

        <div id="estado">
          <label>Selecione o Estado:</label>
          <select id="cmbEstado">
              <option>Carregar Estados</option>
          </select>
        </div>
        
        <div id="cidade">
          <label>Selecione a Cidade:</label>
          <select id="cmbCidade">
              <option>Carregar Cidades</option>
          </select>
        </div>
        
        <hr />
        <p><span class="destaque">Mensagens:</span></p>
        <div id="mensagem">
        	
        </div>
   </div>
</body> 
<script type="text/javascript" src="js/jQuery.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	
	<!-- Carrega os Paises -->
	$('#btnPais').click(function(e){
		$('#btnPais').hide();
		$('#mensagem').html('<span class="mensagem">Aguarde, carregando ...</span>');  
		
		$.getJSON('consulta.php?opcao=pais', function (dados){
			
		   if (dados.length > 0){ 	
			  var option = '<option>Selecione o País</option>';
			  $.each(dados, function(i, obj){
				  option += '<option value="'+obj.sigla+'">'+obj.nome+'</option>';
			  })
			  $('#mensagem').html('<span class="mensagem">Total de paises encontrados.: '+dados.length+'</span>'); 
			  $('#cmbPais').html(option).show();
		   }else{
			   Reset();
			   $('#mensagem').html('<span class="mensagem">Não foram encontrados paises!</span>');
		   }
		})
	})
	
	<!-- Carrega os Estados -->
	$('#cmbPais').change(function(e){
		var pais = $('#cmbPais').val();
		$('#mensagem').html('<span class="mensagem">Aguarde, carregando ...</span>');  
		
		$.getJSON('consulta.php?opcao=estado&valor='+pais, function (dados){ 
		
		   if (dados.length > 0){	
			  var option = '<option>Selecione o Estado</option>';
			  $.each(dados, function(i, obj){
				  option += '<option value="'+obj.sigla+'">'+obj.nome+'</option>';
			  })
			  $('#mensagem').html('<span class="mensagem">Total de estados encontrados.: '+dados.length+'</span>'); 
		   }else{
			  Reset();
			  $('#mensagem').html('<span class="mensagem">Não foram encontrados estados para esse país!</span>');  
		   }
		   $('#cmbEstado').html(option).show(); 
		})
	})
	
	<!-- Carrega as Cidades -->
	$('#cmbEstado').change(function(e){
		var estado = $('#cmbEstado').val();
		$('#mensagem').html('<span class="mensagem">Aguarde, carregando ...</span>');  
		
		$.getJSON('consulta.php?opcao=cidade&valor='+estado, function (dados){
			
			if (dados.length > 0){ 	
				var option = '<option>Selecione a Cidade</option>';
				$.each(dados, function(i, obj){
					option += '<option>'+obj.nome+'</option>';
				})
				$('#mensagem').html('<span class="mensagem">Total de cidades encontradas.: '+dados.length+'</span>');
			}else{
				Reset();
				$('#mensagem').html('<span class="mensagem">Não foram encontradas cidades para esse estado!</span>');  
			}
			$('#cmbCidade').html(option).show();
		})
	})
	
	<!-- Resetar Selects -->
	function Reset(){
		$('#cmbPais').empty().append('<option>Carregar Países</option>>');
		$('#cmbEstado').empty().append('<option>Carregar Estados</option>>');
		$('#cmbCidade').empty().append('<option>Carregar Cidades</option>');
	}
});
</script> 
</body>
</html>