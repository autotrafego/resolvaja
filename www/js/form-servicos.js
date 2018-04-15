$$(document).on('page:init','.page[data-name="instaladores"]', function(e){
    var page = e.detail;
    console.log(page.name);
    $$('#btnsalvando').on('click',function () {
alert("botao salvar")
        //     //var formData = app.form.convertToData('#form-user-content')
        //     var nameInput = $$('#nameInput').val();
        //     var ageInput = $$('#ageInput').val();
        //     var emailInput = $$('#emailInput').val();
        //     var genderSelect = $$('#genderSelect').val();
        //     var inputBirth = $$('#inputBirth').val();
        //     var inputBio = $$('#inputBio').val();
            
        //     var formData = { name: nameInput, age: ageInput, email: emailInput, gender: genderSelect, bithday: inputBirth, bio: inputBio }
        //     console.log(formData);
        //     alert(JSON.stringify(formData))
        //     firebase.database().ref().child('usuarios').push(formData)
        //     .then( function () {
        //             app.dialog.alert('Usuário inserido');
        //             $$('input#nameInput').val('');
        //             $$('input#ageInput').val('');
        //             $$('input#emailInput').val('');
        //             $$('input#genderSelect').val('');
        //             $$('input#inputBio').val('');
        //             $$('input#inputBirth').val('');
                    
        //     }, function(error){
        //             app.dialog.alert('Erro, confira no console');
        //             console.error(error)
        //     })  
                                
        //     //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

    });      

});     

// nova funcao  para consultar
// $$('.fill-form-from-data').on('click', function(){
//         var formData = {
//           'name': 'John',
//           'email': 'john@doe.com',
//           'gender': 'female',
//           'toggle': ['yes'],
//         }
//         app.form.fillFromData('#my-form', formData);
//       });
// firebase.database().ref('cat').orderByChild("idc").startAt('t').on('value', function (snapshot) {
//         //snapshot would have list of NODES that satisfies the condition
//      console.log(snapshot.val())
//          console.log('-----------');
  
//         //go through each item found and print out the emails
//         snapshot.forEach(function(childSnapshot) {
 
//         var key = childSnapshot.key;
//        var childData = childSnapshot.val();
//        alert(key);
     
//          //this will be the actual email value found
//           console.log(childData.idc);
//    });
 
//  });


