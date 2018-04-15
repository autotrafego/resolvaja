$$(document).on('page:init','.page[data-name="form-teste2"]', function(e){
        var page = e.detail;
        console.log(page.name);

        var uploader = $$('#uploader');
        var dataset = $$('#my-div').dataset();
        console.log(dataset);
        $$('#my-div').data('data-campinas', 'campinas2');

        // ouvir o evento change
        $$('#inputPhoto').on('change',function (a) { //ouvindo a mudança
            //Obter o arquivo    
            var file = a.target.files[0] //array de arquivos..., igual 0 está como single
        
            //Referenciar o Storage
            var storage = firebase.storage();
            //var storageRef = firebase.storage.ref('arquivos/'+ file.name)
            var storageRef = storage.ref();
            var imagesRef = storageRef.child('arquivos');
            var spaceRef = storageRef.child('arquivos/'+ file.name);
        
            //Enviar o arquivo
            var task = spaceRef.put(file)
        
            //Atualizar o Progress Bar
            task.on('state_changed',
                function progress(snapshot){
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    uploader.value = percentage
        
                },
                function error(err){
                    console.log(err)
                },
                function complete(){
                    var url = task.snapshot.downloadURL;
                    console.log(url);
                    alert('Envio Completo!!!')
                    $$('#imgPhoto').attr('src',url);  
                    //var urlPhoto = $$('img').attr('src');
                    //alert(urlPhoto);                          
                }
            )
        })
        var dataset = $$('#my-div').dataset();
        /*
        dataset will contain plain object with camelCase keys and with formatted boolean and number types:
        {
            loop: true,
            animatePages: false,
            index: 0,
            hello: 'world'
        }
        */
       console.log(dataset);
        $$('#btnSalvar').on('click',function () {

                
                //var formData = app.form.convertToData('#form-user-content')
                var nameInput = $$('#nameInput').val();
                var inputBio = $$('#inputBio').val();
                var inputImg = $$('#imgInput').val();
                
                var formData = { nome: nameInput, desc: inputBio, img: inputImg }
                console.log(formData);
                alert(JSON.stringify(formData))
                firebase.database().ref().child('cat').push(formData)
                // task = spaceRef.put(file);
                .then( function () {
                        console.log('inserido');
                        // app.dialog.alert('Usuário inserido');
                        $$('input#nameInput').val('');
                        $$('input#inputBio').val('');
                        $$('imgInput').val('');

                        
                }, function(error){
                        app.dialog.alert('Erro, confira no console');
                        console.error(error)
                })  
                //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

        });      

});      

