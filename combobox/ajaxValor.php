<?php 

/*
* 
* Aqui vou passar alguns valores na m�o
* mas voc� poder� isso trazebdo do banco de dados
*
*/

// Conecta ao Banco
$conexao = mysql_connect("localhost", "root", "mysql")
or die ('Não foi possivel conectar ao banco porque; ' . mysql_error());
$db = mysql_select_db("teste1") or die ("Banco de Dados Inexistente");
$id = $_POST["paramentros"];
$sql = "SELECT * FROM teste1 WHERE idTabela = '$id'";
$totalBusca = mysql_query($sql);
echo $totalBusca ;
 
while( $linha = mysql_fetch_assoc($totalBusca) ){
     echo "<option value='".$linha["idTabela"]."'>".htmlentities($linha["outroDado"])."</option>\n";
}
$id = $_POST["id"];

if( $id == 0 ){
	echo "<option value='0'>Nada escolhido</option>";
} else if ($id == 1){
	echo "<option value='1'>".htmlentities("1-Alarmes")."</option>";
	echo "<option value='2'>".htmlentities("2-Rastreador")."</option>";
	echo "<option value='3'>".htmlentities("3-Xeon")."</option>";
} else if ($id == 2){
	echo "<option value='1'>".htmlentities("Carregado opcao 2 - um")."</option>";
	echo "<option value='2'>".htmlentities("Carregado opcao 2 - dois")."</option>";
	echo "<option value='3'>".htmlentities("Carregado opcao 2 - tres")."</option>";
}

?>