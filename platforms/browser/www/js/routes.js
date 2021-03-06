routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/teste/',
    url: './pages/teste2.html',
  },
  {
    path: '/form-user/',
    url: './pages/form-user.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form-cat/',
    url: './pages/form-cat.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form-servicos/',
    url: './pages/form-servicos.html',
    // url: './pages/teste.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form-newservice/',
    url: './pages/form-newservice.html',
    // url: './pages/teste.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form-maps/',
    url: './pages/form-maps.html',
    // url: './pages/teste.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form-myservice/',
    url: './pages/form-myservice.html',
    // url: './pages/teste.html',
//    path: '/form/',
//    url: './pages/form.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path: '/form-lcat/',
    url: './pages/form-lcat.html',
  },
  // Left View Pages
  {
    path: '/left-page-1/',
    url: './pages/left-page-1.html',
  },
  {
    path: '/left-page-2/',
    url: './pages/left-page-2.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
