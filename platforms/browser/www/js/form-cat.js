$$(document).on('page:init','.page[data-name="form-cat"]', function(e){
        var page = e.detail;
        console.log(page.name);

        var uploader = $$('#uploader');
        
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

        $$('#btnSalvar').on('click',function () {

                
                //var formData = app.form.convertToData('#form-user-content')
                var nameInput = $$('#nameInput').val();
                var inputBio = $$('#inputBio').val();
                var inputImg = $$('#imgInput').val();
                var size = 5 ;//Gera o prompt que pergunta o tamanho do ID e armazena na variável
                var randomized = Math.ceil(Math.random() * Math.pow(10,size));//Cria um número aleatório do tamanho definido em size.
                var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
                while(digito > 10){//Pega o digito inicial e vai refinando até ele ficar menor que dez
                    digito = Math.ceil(Math.log(digito));
                }
                var id = randomized + '-' + digito;//Cria a ID

                var formData = { idc:id,nome: nameInput, desc: inputBio, img: inputImg }
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

