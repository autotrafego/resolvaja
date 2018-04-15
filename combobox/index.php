<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Modelo de carregamento de select via jQuery-Ajax</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <!-- <script type="text/javascript" src="jquery-1.3.2.min.js"></script> -->
	<style type="text/css">
    
    body,td,th {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 11px;
    }
    label{
        display:block;
        padding-bottom:5px;
        margin-top:15px;
    }
   
    </style>    
	
    <script type="text/javascript" src="js/jQuery.js"></script>
  
    
</head>

<body>

<form action="" method="post">

    <label>Selecione o seu valor que vai passar:</label>
    <select name="passaValor" id="passaValor" onchange="getValor(this.value, 0)">
       <option value="0" id ="optioncat">Tipo de serviço</option>
      
       
    </select>
    
    <label>Selecione aqui depois de ter selecionao acima</label>
    <select name="recebeValor" id="recebeValor" >
        <option value="0">Selecione algo acima primeiro</option>
    </select>

</form>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
<script type="text/javascript">


// Initialize Firebase
var config = {
  apiKey: "AIzaSyD0qIG6bdfLnWKL_RTfLnbBRmXdwvNWlBU",
  authDomain: "resolvaja-2be0f.firebaseapp.com",
  databaseURL: "https://resolvaja-2be0f.firebaseio.com",
  projectId: "resolvaja-2be0f",
  storageBucket: "resolvaja-2be0f.appspot.com",
  messagingSenderId: "326853649628"
};

firebase.initializeApp(config);
  
    firebase.database().ref('cat').on('value', function (snapshot){
                    snapshot.forEach(function(item){
                            var chave = item.key;
                            var nome = item.val().nome;
                            var desc = item.val().desc;
                         
                           
                            // console.log('desc : ' + desc);
                            var listHtml = '<option value="'+ chave +'">'+ nome +'</option> ';
                            $("#passaValor").append(listHtml);
                            // $("#passaValor").html("<option value="+ chave +">'nome'</option>");
                            console.log('key depois do passavalor  : '  + chave );
                            // $("#passaValor").html("<option value="+ nome +">'nome'</option>");
                            // console.log('nome : ' + nome);
                            // $("#passaValor").html("<option value="+ chave +">'nome'</option>");



                    })
                })

                // VERIFICA  Opcoes
    function listadados(id){
    console.log('id : ' + id);
if( id == 0 ){

    $("#recebeValor").html("<option value='0'>Nada Escolhido</option>");
} else if (id == 1){
   
    firebase.database().ref('cat').orderByChild("nome").equalTo('chaveiro').on('value', function (snapshot) {
                    //snapshot would have list of NODES that satisfies the condition
                 console.log(snapshot.val())
                     console.log('-----------');
              
                    //go through each item found and print out the emails
                    snapshot.forEach(function(childSnapshot) {
             
                    var key = childSnapshot.key;
                    console.log('chave : ' + key);
                   var childData = childSnapshot.val();
                   console.log('childData : ' + childData);
                     //this will be the actual email value found
                      console.log(childData.idc);
               });
             });
      
     

} else if (id == 2){
    $("#recebeValor").html("<option value='1'>1- faxina</option>");
}
};
		function getValor(valor){
            console.log('valor da funcao getvalor nome : ' + 'valor : ' + valor);
			$("#recebeValor").html("<option value='0'>Carregando...</option>");
			setTimeout(function(){
				$("#recebeValor").load(listadados(valor))
			}, 2000);
		};
    </script>
</body>
</html>
