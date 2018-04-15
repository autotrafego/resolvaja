// Dom7
var $$ = Dom7;
// var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
 
  var name = user.displayName;
  var email = user.email;
  var photoUrl = user.photoURL;
  var emailVerified = user.emailVerified;
  var uid = user.uid;//  console.log("logado");
  // Login com sucesso
  var alerta_login = app.toast.create({
    text: "Bem vindo : " + email,
    closeTimeout: 3000,
  });
  alerta_login.open();
  $$('.perfil-mostrar').text(email);
  $$('.toolbar-inner').text('Bem Vindo: ' + email  );
  $$('.logoff').show();
  $$('My-Entrar').hide();
  $$('input#email').val('');
  $$('input#password').val('');
  $$('.myservice').show();
  $$('.admin').show();
  $$('.geolocalizacao').show();
  $$('.Perfil-Entrar').hide();
  $$('.entrarMenu').hide();
  $$('.toolbar-inner').text(email);
  
  console.log("logado" );
  // alert('sim' + email);

  } else {
    //  Saida Com Sucesso
  $$('.toolbar-inner').text('Usuário não autenticado');
  // app.dialog.alert('Usuário não autenticado');
  $$('input#email').val('');
  $$('input#password').val('');
  $$('.logoff').hide();
  // $$('#entrarpainel').hide();
  // this.$('.userLogon').text("<a href='#' class='small login-screen-open' data-login-screen='#my-login-screen' id='UserLogon'> Entrar </a>");
  // this.$('.userLogon').text('saiu agora');
  // $$('.userLogon').attr({text:'agora1'})
  $$('.myservice').hide();
  $$('.geolocalizacao').hide();
  $$('.admin').hide();
  $$('.login-screen-open').show();
  $$('.Perfil-Entrar').show();
  //  Saida Com Sucesso
  console.log("Deslogado" );
    // No user is signed in.
    // alert('nao : ' + email);
  }
});


console.log("-------Antes do  observador-------------");
  ///////////////////////////////////////// OBSERVADOR ///////////////////////////

  console.log("-------Antes do  observador-------------"); 
    
    
    
    // alert("Nome : " + name  + "," +  "Email: " + email + "," + "ID : " + uid );
  
    ///////////////////////////////////////// OBSERVADOR ///////////////////////////


function permissoes(objeto){
  if ( objeto = 1 ){
    var name = user.displayName;
    var email = user.email;
    var photoUrl = user.photoURL;
    var emailVerified = user.emailVerified;
    var uid = user.uid;//  console.log("logado");
    // Login com sucesso
    var alerta_login = app.toast.create({
      text: "Bem vindo : " + email,
      closeTimeout: 3000,
    });
    alerta_login.open();
    $$('.perfil-mostrar').text(email);
    $$('.toolbar-inner').text('Bem Vindo: ' + email  );
    $$('.logoff').show();
    $$('My-Entrar').hide();
    $$('input#email').val('');
    $$('input#password').val('');
    $$('.myservice').show();
    $$('.admin').show();
    $$('.geolocalizacao').show();
    $$('.Perfil-Entrar').hide();
    $$('.entrarMenu').hide();
    $$('.toolbar-inner').text(email);
    
    console.log("logado" );
    // Chamar permissoes de Administrador

  }
}


// MOSTRA dados do PERFIL
// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }



// var resposta2 = notfunc(error.code);
// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Resolva Já', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  
    notification: {
   
  icon: '<i class="f7-icons">info</i>',
  title: 'Aviso',
  titleRightText: 'now',
  subtitle: 'Acesso',
  text: 'Clique para Fechar',
  closeOnClick: true,
    },
    toast: {
      text: 'Aviso',
  closeButton: true,
  position: 'bottom',
  closeButtonText: 'ok',
  closeButtonColor: 'yellow',
    },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
  

  
});

var mainView = app.views.create('.view-left', {
  url: '/'
});
// Init/Create main view
var mainView = app.views.create('.view-main', {

  url: '/'
});
// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }

});

// mudar conteudo de classe
// this.$('.userLogon').text('Bemssssssssssssss vindo ');
// Create toast with custom button text
// var alerta_login = app.toast.create({
//   text: 'Aviso funcao',
// });

// this.app.popup.open('.login-screen')
                    ////////////////////////////////
                    function minhaFuncao(objeto) {
                      objeto.title = "Novo titulo";
                    }
                    
                    var meucarro = {
                      title: "titulo antigo",
                      };
                    var x, y;
                    
                    x = meucarro.title;     // x recebe o valor "Honda"
                    
                    minhaFuncao(meucarro);
                    y = meucarro.title;     // y recebe o valor "Toyota"
                                        // (a propriedade make foi alterada pela função)
                                        console.log("objeto alerta com titulo criado : " + x + "<br>" + "Depois da Função : " + y);
                  
                    ///////////////////////////////



//  C A R R E G A  T E L A  I N I C I A L

// var teste = notfunc()
// F U N C A O 
function notfunc (erroslogin) {
  // erroslogin.AlertLogin ="testeteste";
  var AlertLogin ;
  if (erroslogin == 'auth/invalid-email'){
      AlertLogin ="Email Invalido, reveja o email ";
  }
  if (erroslogin == 'auth/email-already-in-use'){
    AlertLogin ="Email já  esta em uso ! ";
    console.log(AlertLogin) ;

  }
    if (erroslogin == 'auth/user-not-found'){
      AlertLogin ='Email Invalido';
      console.log(AlertLogin) ;
    }
    if (erroslogin == 'auth/weak-password'){
      AlertLogin ='Senha muito fraca';
      // console.log(AlertLogin) ;
    }
    if (erroslogin == 'auth/wrong-password'){
      AlertLogin ='Email e/ou Senha Invalido';
      // console.log(AlertLogin) ;
    }
    
   return AlertLogin ; 
  };





  


$$('#my-login-screen .SignUp').on('click', function() {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  var name = $$('#my-login-screen [name="Nome"]').val();
  var respostas;
  // app.dialog.alert('Username: ' + username + '<br>Password: ' + password); //promisses asicronas
  
  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)
    .then( function(){
      app.dialog.alert('Bem vindo:' + username);
      this.$$('.toolbar-inner').innerHtml ='Bem vindo ' + username ;

/////////////////////////////////////
var formData = {uid:"", unome:"",uemail: username,uimg:"",utipo:"2",uperfil:"Gratis",ustatus:"Ativo" }
console.log(formData);
alert(JSON.stringify(formData))


firebase.database().ref("categorias").child(key).remove();
firebase.database().ref().child('users').push(formData)
// task = spaceRef.put(file);
.then( function () {
        console.log('inserido');
}, function(error){
        app.dialog.alert('Erro, confira no console');
        console.error(error)
})  
//firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
////////////////////////////////////

    })
    .catch( function(error){
      
      var errorMessage = error.message;
      console.error("Codigo de erro :" + error.code + " mensagem : " + errorMessage )
      // console.error(error.message)

respostas = notfunc(error.code);
var alerta_login = app.toast.create({
  text: respostas,
  closeButton: true,
});
alerta_login.open();
     
// app.dialog.alert('Erro:' + respostas);
    })
  })
////////////////////////////////////////////



  
// Criar Usuario
$$('#my-login-screen .SignUp').on('click', function() {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  var name = $$('#my-login-screen [name="Nome"]').val();
  var respostas;
  // app.dialog.alert('Username: ' + username + '<br>Password: ' + password); //promisses asicronas
  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)
    .then( function(){
      app.dialog.alert('Bem vindo:' + username);
      this.$$('.toolbar-inner').innerHtml ='Bem vindo ' + username ;

/////////////////////////////////////
var formData = {uid:"", unome:"",uemail: username,uimg:"",utipo:"2",uperfil:"Gratis",ustatus:"Ativo" }
console.log(formData);
alert(JSON.stringify(formData))
firebase.database().ref("categorias").child(key).remove();


firebase.database().ref().child('users').push(formData)
// task = spaceRef.put(file);
.then( function () {
        console.log('inserido');
}, function(error){
        app.dialog.alert('Erro, confira no console');
        console.error(error)
})  
//firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
////////////////////////////////////

    })
    .catch( function(error){
      
      var errorMessage = error.message;
      console.error("Codigo de erro :" + error.code + " mensagem : " + errorMessage )
      // console.error(error.message)

respostas = notfunc(error.code);
var alerta_login = app.toast.create({
  text: respostas,
  closeButton: true,
});
alerta_login.open();
     
// app.dialog.alert('Erro:' + respostas);
    })
  })
  // L O G A R 
  $$('#My-Entrar .SingIn').on('click', function () {
    var username = $$('#My-Entrar [name="email"]').val();
    var password = $$('#My-Entrar [name="password"]').val();
    firebase
      .auth()
      .signInWithEmailAndPassword(username,password)//Promisses
      .then( function () {
        // Alerta Login com sucesso
        
        /////////////////////verifica Admin //////////////////////////////
        firebase.database().ref('users').orderByChild("utipo").equalTo('1').on('value', function (snapshot) {
          //snapshot would have list of NODES that satisfies the condition
       console.log(snapshot.val())
           console.log('-----------');
    
          //go through each item found and print out the emails
          snapshot.forEach(function(childSnapshot) {
            
         var key = childSnapshot.key;
         var resultado = childSnapshot.val();
         var utipo = resultado.utipo ;
       
           //this will be the actual email value found
            console.log(utipo);
            permissoes(resultado);
     });
   
   });
   
     
   //////////////////////////////////////////////////


        var alerta_login = app.toast.create({
          text: "Bem vindo " + username,
          closeTimeout: 3000,
        });
        alerta_login.open();
        // Alerta Login com sucesso
        $$('.perfil-mostrar').text(username);
        $$('.toolbar-inner').text('Bem Vindo : ' + username );
        $$('.logoff').show();
        $$('#My-Entrar').hide();
        $$('input#email').val('');
        $$('input#password').val('');
        $$('.myservice').show();
        $$('.admin').show();
        $$('.geolocalizacao').show();
        // $$('.Perfil-Entrar').hide();
        // Login com sucesso
      })
    .catch(function(error){
      var errorMessage = error.message;
      console.error("Codigo de erro :" + error.code + " mensagem : " + errorMessage )
      
      respostas = notfunc(error.code);
    
      var alerta_login = app.toast.create({
        text: respostas,
        closeTimeout: 3000,
      });
      alerta_login.open();
    })
    // app.loginScreen.close('#my-login-screen');
  });
   ////////////////////// Sair MENU ///////////////////////
    $$('.logoff').on('click', function () {
    $$('#email').val('');
    $$('#password').val('');
    firebase
      .auth()
      .signOut()
      .then( function(){
        $$('.toolbar-inner').text('Usuario não Autenticado');
        app.loginScreen.close('#My-Entrar');
        $$('.perfil-mostrar').text("Entrar");
        $$('logoff').hide();
        $$('input#emailInput').val('');
        $$('input#passwordInput').val('');
        // this.$('.userLogon').text("<a href='#' class='small login-screen-open' data-login-screen='#my-login-screen' id='UserLogon'>Entrar</a>");
        $$('.myservice').hide();
        $$('.geolocalizacao').hide();
        $$('.admin').hide();
        $$('.login-screen-open').show();
      }, function(error){
        console.error(error)
      })
    });

    /////////////////// D E S L O G A R  /////////////////////
    $$('#My-Entrar .SingOut').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      //  Saida Com Sucesso
      $$('.perfil-mostrar').text('Entrar');
      $$('.toolbar-inner').text('Entre com seu Email ');
      // app.dialog.alert('Usuário não autenticado');
      $$('input#email').val('');
      $$('input#password').val('');
      $$('.logoff').hide();
      // $$('#entrarpainel').hide();
      // this.$('.userLogon').text("<a href='#' class='small login-screen-open' data-login-screen='#my-login-screen' id='UserLogon'> Entrar </a>");
      // this.$('.userLogon').text('saiu agora');
      // $$('.userLogon').attr({text:'agora1'})
      $$('.myservice').hide();
      $$('.geolocalizacao').hide();
      $$('.admin').hide();
      $$('.login-screen-open').show();
      // $$('.Perfil-Entrar').show();
      //  Saida Com Sucesso
    }, function(error){
      console.error(error)
    })  
  });
   


