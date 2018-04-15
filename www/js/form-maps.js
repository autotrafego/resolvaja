$$(document).on('page:init','.page[data-name="form-maps"]', function(e){
    var page = e.detail;
    console.log(page.name);
    $("#usersList").append(listHtml);
    $$('#btnSalvar').on('click',function () {

            //var formData = app.form.convertToData('#form-user-content')
            var nameInput = $$('#nameInput').val();
            var ageInput = $$('#ageInput').val();
            var emailInput = $$('#emailInput').val();
            var genderSelect = $$('#genderSelect').val();
            var inputBirth = $$('#inputBirth').val();
            var inputBio = $$('#inputBio').val();
            
            var formData = { name: nameInput, age: ageInput, email: emailInput, gender: genderSelect, bithday: inputBirth, bio: inputBio }
            console.log(formData);
            alert(JSON.stringify(formData))
            firebase.database().ref().child('usuarios').push(formData)
            .then( function () {
                    app.dialog.alert('Usuário inserido');
                    $$('input#nameInput').val('');
                    $$('input#ageInput').val('');
                    $$('input#emailInput').val('');
                    $$('input#genderSelect').val('');
                    $$('input#inputBio').val('');
                    $$('input#inputBirth').val('');
                    
            }, function(error){
                    app.dialog.alert('Erro, confira no console');
                    console.error(error)
            })  
                                
            //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

    });      

});      

