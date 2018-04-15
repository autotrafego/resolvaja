// inicio codigo js
var $$ = Dom7;
$$(document).on('page:init','.page[data-name="form-lcat"]', function(e){
    var page = e.detail;
    // console.log(page.name);
                ///////////////////////////////////////
            //     firebase.database().ref('cat').orderByChild("nome").equalTo('chaveiro').on('value', function (snapshot) {
            //         //snapshot would have list of NODES that satisfies the condition
            //      console.log(snapshot.val())
            //          console.log('-----------');
              
            //         //go through each item found and print out the emails
            //         snapshot.forEach(function(childSnapshot) {
             
            //         var key = childSnapshot.key;
            //        var childData = childSnapshot.val();
                 
                 
            //          //this will be the actual email value found
            //           console.log(childData.idc);
            //    });
             
            //  });
                //////////////////////////////////////
                firebase.database().ref('cat').on('value', function (snapshot){
                    //usersList.innerHTML = '';
                    $$("#lcatv").empty();
                /////////////////////////////////
                var diasDaSemana = ["Segunda", "Quarta", "Quinta"];//Deverá ser carregada do banco de dados

                // $$.each(diasDaSemana, function(idx, val) {
                //   $$('#dias_semana option[value=' + val + ']').attr('selected', true);
                // });
                ////////////////////////////////
                    snapshot.forEach(function(item){
                          var listHtml = '<tr>';
                            // listHtml += '<th scope="row" class="id-column tupe=hidden">'+item.key+'</th>';
                            listHtml += ' <td class="checkbox-cell">';
                            listHtml += ' <label class="checkbox">';
                            listHtml += ' <input type="checkbox" class="selecao" value="' + item.key +'"/>';
                            listHtml += ' <i class="icon-checkbox"></i>';
                            listHtml += ' </label>';
                            listHtml += ' </td>';
                            listHtml += '<td class="label-cell">'+ item.val().nome +'</td>';
                            listHtml += '<td class="numeric-cell"><i class="icon material-icons md-only">'+ item.val().img +'</i></td>';
                            listHtml += '<td class="numeric-cell">'+ item.val().desc +'</td>';
                            listHtml += '<td class="actions-cell">';
                            listHtml += '</tr>';
                            //e.append(listHtml).innerHTML;
                            $("#lcatv").append(listHtml);
                    })
                })
            
               // Apaga registro 
  //     var userId = firebase.auth().currentUser.uid;
  // console.log(userid);
      // Get a reference to the database service
      var markup = '';
      var database = firebase.database();
      var query = firebase.database().ref("cat").orderByChild('nome').limitToLast(20);
      query.once("value")
        .then(function(snapshot) {
          snapshot.forEach(renderSingleSnapshot);
        }).then(function(){
          $(document).find('#list').html(markup);
        });
  
      var renderSingleSnapshot = function(categoriaRef) {
        var categoria = categoriaRef.val();
        // console.log(categoriaRef.key,  categoria.nome);
  
        var imdb = '';
        var editLink = '';
        var html = '';

        var remove = function(e){
            alert("clicou");
          e.preventDefault();
          e.stopPropogation();
          var key = $(this).data('key');
          if(confirm('Are you sure?')){
            firebase.database().ref("movies").child(key).remove();
          }
        }
    }  

    // Captura Lista selecionada inicio
$$('input[type="checkbox"]').once('keyup keydown change', function (e) {
    console.log('o valor do imput foi mudado');
    var valores = $(':checked').get().map(el => el.value).join(',');
    if (valores) {            
        var listaa = valores.split(",");
        var totalv = listaa.length ;
        console.log('Totalv :' + totalv);
        for(i=0;i<listaa.length;i++){
            console.log(listaa[i]);
            firebase.database().ref().child('cat').child(listaa[i]).remove();
        }}
    console.log(valores);
  });
// Captura Lista selecionada fim

//    captura o clique de apagar Inicio
 $$('.btnapagar').on('click',function () { 
    var valores = $(':checked').get().map(el => el.value).join(',');
    app.dialog.confirm ( 'Confirma a exclusão dos Itens selecionados' ,' título ',function(){        
    if (valores) {            
        var listaa = valores.split(",");
        for(i=0;i<listaa.length;i++){
            console.log(listaa[i]);
            firebase.database().ref().child('cat').child(listaa[i]).remove();
        }}
        
  
    });

   
 });
//    captura o clique de apagar Fim
})
