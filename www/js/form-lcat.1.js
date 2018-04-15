
// inicio codigo js
$$(document).on('page:init','.page[data-name="form-lcat"]', function(e){

    //var e = document.getElementById('usersList');
    
    firebase.database().ref('cat').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#lcatv").empty();
    
        snapshot.forEach(function(item){
        var x = document.createElement("TD");
        var t = document.createTextNode('item.val().nome');
        x.appendChild(t);
        $$(document).getElementById("myTr").appendChild(x);
    
            var listHtml = '<div class="row no-gap">';
            listHtml += '<div class="col">'+ item.val().nome +'</div>';
            listHtml += '<div class="col">'+ item.val().img +'</div>';
            listHtml += '<div class="col numeric-cell">'+ item.val().desc +'</div>';
            listHtml += '</div>';
                
            

            //////////////////////////////////////////////////
           
                 var req = new XMLHttpRequest(); 
                    var x = $$('#select-client');
                     var y = Template7.templates.templateClient({ client: clientsList });
                      document.getElementById("myTable").innerHTML = y; 
                      //x.innerHTML = y; 
                      //myApp.initSmartSelects($$('#page-main')); }; 
                    
                     
            /////////////////////////////////////////////////
            
                listHtml += '</tr>';
    
                //e.append(listHtml).innerHTML;
                // $$("#nome").append(item.val().nome);
                $$("#lcatv").append(listHtml).innerHTML;
                // $$("#ca1").append("item.val().nome");
                // alert(listHtml);
                console.log(listHtml);
    
    
        })
    })
    
    })
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

