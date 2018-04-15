// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.myservice').show();
$$('.geolocalizacao').show();
$$('.login-screen-open').show();
var crialerta = {
  title: 'simplesbbbbbbbb',
  subtile:'objeto criados',
  closeOnClick: true,
}
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
  position: 'top',
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


    })
    .catch( function(error){
      console.error(error.code)
      var errorMessage = error.message;
      console.error("Codigo de erro :" + error.code + " mensagem : " + errorMessage )
      // console.error(error.message)
//       var x, y;
// minhaFuncao(LoginAlert);
// x = LoginAlert.text; 
// var LoginAlert = app.toast.create({
//   text: x,
//  c
//   closeTimeout: 2000,
//   });
//   console.log(x) ;
//   LoginAlert.open();
// alert(error.code);
// app.dialog.alert('Bem vindo:' );
respostas = notfunc(error.code);
var alerta_login = app.toast.create({
  text: respostas,
  closeButton: true,
});
alerta_login.open();
     
// app.dialog.alert('Erro:' + respostas);
 
      
    })

    

  })

  this.$('.userLogon').text("Entrar");
  // L O G A R 
  $$('#my-login-screen .SingIn').on('click', function () {
    var username = $$('#my-login-screen [name="email"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
    firebase
      .auth()
      .signInWithEmailAndPassword(username,password)//Promisses
      .then( function () {
        // app.dialog.alert('Bem vindo: ' + username);
        this.$('.userLogon').text(username);
        this.$$('.toolbar-inner').text('Bem Vindo: ' + username + 'vc está logado!');
        $$('.logoff').show();
        $$('#my-login-screen').hide();
        $$('input#email').val('');
        $$('input#password').val('');
        $$('.myservice').show();
        $$('.geolocalizacao').show();
        $$('login-screen-open').hide();
///////////////////////////////////////////
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    Console.log("Nome : " + displayName + "---------------------------------------------" + 
                "Email : " + email);

    // ...
  } else {
    // User is signed out.
    // ...
  }
});
//////////////////////////////////////////
        var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}


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
   // Sair Usuario
   $$('#my-login-screen .SignOut').on('click', function () {
    $$('#email').val('');
    $$('#password').val('');
    firebase
      .auth()
      .signOut()
      .then( function(){
        this.$$('.toolbar-inner').text('Usuario não Autenticado');
        app.dialog.alert('Usuario não Autenticado') ;
        app.loginScreen.close('#my-login-screen')
        $$('logoff').hide();
        $$('login-screen-open').show();
        $$('input#emailInput').val('');
        $$('input#passwordInput').val('');
        this.$('.userLogon').text("<a href='#' class='small login-screen-open' data-login-screen='#my-login-screen' id='UserLogon'>Entrar</a>");

      }, function(error){
        console.error(error)
      })
          
    });

$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      // app.dialog.alert('Usuário não autenticado');
      $$('input#email').val('');
      $$('input#password').val('');
      $$('.logoff').hide();
      // $$('#entrarpainel').hide();
      // this.$('.userLogon').text("<a href='#' class='small login-screen-open' data-login-screen='#my-login-screen' id='UserLogon'> Entrar </a>");
      this.$('.userLogon').text("saiu agora");
      // $$('.login-screen-open').show();
      $$('.myservice').hide();
      $$('.geolocalizacao').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
  });
    // Close
   $$('#my-login-screen .SignOut').on('click', function () {
    var username = $$('#my-login-screen [name="email"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
    firebase
      .auth()
      .signOut()
      .then( function(){
        this.$$('.toolbar-inner').text('Usuario não Autenticado');
        app.dialog.alert('Usuario não Autenticado') ;
        app.loginScreen.close('#my-login-screen')
        $$('logoff').hide();
        $$('login-screen-open').show();
        $$('input#emailInput').val('');
        $$('input#passwordInput').val('');
      }, function(error){
        console.error(error)
      })
          
    });


