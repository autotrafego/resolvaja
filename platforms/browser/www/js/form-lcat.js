
// inicio codigo js
var $$ = Dom7;



$$(document).on('page:init','.page[data-name="form-lcat"]', function(e){

    $$('#slcategoria2').on('change',function (a) { //ouvindo a mudança
       alert("ouviu");
    })








    $$('#btnselect').val('New value here');
    $$('input[type="select"]').prop('checked', true);
    $$('btnselect').on('click', function (e) {
        console.log('clicked');
        alert("inicio");
      });
  
    $$('input[type="checkbox"]').prop('checked', true);
    $$('slcategoria').attr('value',' + item.val().nome' );
    $$('input#btnselect').val('New value here');
    $$('input#myInput').val('New value here');
    $('#slcategoria option[value=' +" val "+ ']').attr('selected', true);
    $$('#slcategoria option[value="aaaaaaaaaaa"]').attr('selected', true);
    $('#btnselect').on('onclick', function(){
        alert("clicou");
        var formData = {
          'name': 'John',
          'email': 'john@doe.com',
          'gender': 'agora',
          'toggle': ['yes'],
        }
       

      });
    

    // $$('#btnSalvar').on('click',function () {
//     //var e = document.getElementById('usersList');
    
//     firebase.database().ref('cat').on('value', function (snapshot){
//         //usersList.innerHTML = '';
//         $$("#lcatv").empty();
    
//         snapshot.forEach(function(item){
//         var x = document.createElement("TD");
//         var t = document.createTextNode('item.val().nome');
//         x.appendChild(t);
//         $$(document).getElementById("myTr").appendChild(x);
    
//             var listHtml = '<div class="row no-gap">';
//             listHtml += '<div class="col">'+ item.val().nome +'</div>';
//             listHtml += '<div class="col">'+ item.val().img +'</div>';
//             listHtml += '<div class="col numeric-cell">'+ item.val().desc +'</div>';
//             listHtml += '</div>';
                
            

            //////////////////////////////////////////////////
            // $(document).ready(function() {

                //var e = document.getElementById('usersList');
                ///////////////////////////////////////
                firebase.database().ref('cat').orderByChild("idc").equalTo('26092-3').on('value', function (snapshot) {
                    //snapshot would have list of NODES that satisfies the condition
                 console.log(snapshot.val())
                     console.log('-----------');
              
                    //go through each item found and print out the emails
                    snapshot.forEach(function(childSnapshot) {
             
                    var key = childSnapshot.key;
                   var childData = childSnapshot.val();
                 
                 
                     //this will be the actual email value found
                      console.log(childData.idc);
               });
             
             });
                //////////////////////////////////////
                firebase.database().ref('cat').on('value', function (snapshot){
                    //usersList.innerHTML = '';
                    $("#lcatv").empty();
                /////////////////////////////////
                var diasDaSemana = ["Segunda", "Quarta", "Quinta"];//Deverá ser carregada do banco de dados

                $.each(diasDaSemana, function(idx, val) {
                  $('#dias_semana option[value=' + val + ']').attr('selected', true);
                });
                ////////////////////////////////
                    snapshot.forEach(function(item){
                          var listHtml = '<tr>';
                            // listHtml += '<th scope="row" class="id-column tupe=hidden">'+item.key+'</th>';
                            listHtml += '<td class="label-cell">'+ item.val().nome +'</td>';
                            listHtml += '<td class="numeric-cell"><i class="icon material-icons md-only">'+ item.val().img +'</i></td>';
                            listHtml += '<td class="numeric-cell">'+ item.val().desc +'</td>';
                            listHtml += '<td class="actions-cell">';
                            listHtml += '<a class="link icon-only">';
                            listHtml += ' <i class="icon f7-icons ios-only">compose</i>';
                            listHtml += ' <i class="icon material-icons md-only">edit</i>';
                            listHtml += '</a>';
                            listHtml += '<a class="link icon-only " id="btnselect">';
                            listHtml += ' <i class="icon f7-icons ios-only">trash</i>';
                            listHtml += ' <i class="icon material-icons md-only">delete</i>';
                            listHtml += '</a>';
                            listHtml += '</td>';
                            listHtml += '</tr>';
                
                            //e.append(listHtml).innerHTML;
                            $("#lcatv").append(listHtml);
                           
                
                
                    })
                })
                
                })
                    
                     
            /////////////////////////////////////////////////
        
    
                //e.append(listHtml).innerHTML;
                // $$("#nome").append(item.val().nome);
               
                // $$("#ca1").append("item.val().nome");
                // alert(listHtml);
          
    
    

    

// Fim codigo js








// $$(document).on('page:init','.page[data-name="form-lcat"]', function(e){
//         var page = e.detail;
//         console.log(page.name);

//         var uploader = $$('#uploader');
        
//         // ouvir o evento change
//         $$('#inputPhoto').on('change',function (a) { //ouvindo a mudança
//             //Obter o arquivo    
//             var file = a.target.files[0] //array de arquivos..., igual 0 está como single
        
//             //Referenciar o Storage
//             var storage = firebase.storage();
//             //var storageRef = firebase.storage.ref('arquivos/'+ file.name)
//             var storageRef = storage.ref();
//             var imagesRef = storageRef.child('arquivos');
//             var spaceRef = storageRef.child('arquivos/'+ file.name);
        
//             //Enviar o arquivo
//             var task = spaceRef.put(file)
        
//             //Atualizar o Progress Bar
//             task.on('state_changed',
//                 function progress(snapshot){
//                     var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                     uploader.value = percentage
        
//                 },
//                 function error(err){
//                     console.log(err)
//                 },
//                 function complete(){
//                     var url = task.snapshot.downloadURL;
//                     console.log(url);
//                     alert('Envio Completo!!!')
//                     $$('#imgPhoto').attr('src',url);  
//                     //var urlPhoto = $$('img').attr('src');
//                     //alert(urlPhoto);                          
//                 }
//             )
//         })

//         $$('#btnSalvar').on('click',function () {

                
//                 //var formData = app.form.convertToData('#form-user-content')
//                 var nameInput = $$('#nameInput').val();
//                 var inputBio = $$('#inputBio').val();
//                 var inputImg = $$('#imgInput').val();
                
//                 var formData = { nome: nameInput, desc: inputBio, img: inputImg }
//                 console.log(formData);
//                 alert(JSON.stringify(formData))
//                 firebase.database().ref().child('cat').push(formData)
//                 // task = spaceRef.put(file);
//                 .then( function () {
//                         console.log('inserido');
//                         // app.dialog.alert('Usuário inserido');
//                         $$('input#nameInput').val('');
//                         $$('input#inputBio').val('');
//                         $$('imgInput').val('');

                        
//                 }, function(error){
//                         app.dialog.alert('Erro, confira no console');
//                         console.error(error)
//                 })  
//                 //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

//         });      

// });      

