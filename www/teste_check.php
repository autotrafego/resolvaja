
//usa a biblioteca Jquery  que aqui serve para funções de marcar e desmarcar todos
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>

<script type="text/javascript">

 // função do botão que seleciona todos os check box
function MarcarTodosCheckbox(){
$("input[name='check_list[]']").each(function(){
$(this).attr("checked","checked");
})}
   //função que desmarca todos
function Desmarcar(){
$("input[name='check_list[]']").each(function(){
$(this).removeAttr("checked");})}

</script>
<hr>
<form action="" method="post">
 // valores dos chckbox - que podem ser adicionados dinamicamente no sistema
<input type="checkbox" name="check_list[]" value="value 1">
<input type="checkbox" name="check_list[]" value="value 2">
<input type="checkbox" name="check_list[]" value="value 3">
<input type="checkbox" name="check_list[]" value="value 4">
<input type="checkbox" name="check_list[]" value="value 5">
<input type="submit" />

//botões de marcar  ou desmarcar todos os checkbox
<input type="button" value="Marcar todos" onClick="MarcarTodosCheckbox()"/><br>
<input type="button" value="Desmarcar" onClick="Desmarcar()"/>
</form>



<?php

// verifica se não está vazio os valores do checkBox do POST
if(!empty($_POST['check_list'])) {

   //varre o array enviado pelo POST

   foreach($_POST['check_list'] as $check) {
           echo $check . "<br>"; //exibe pra nos o valor recebido atualmente e pula linha

   }
}
?>
