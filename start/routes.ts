import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
   // Admin Group
   Route.group(() => {
      Route.post('/login', 'AdminsController.login')
   }).prefix('admin')

   // User Auth
   Route.post('login', 'AuthController.login')
   Route.post('register', 'AuthController.register')

   Route.resource('categories', 'CategoriesController').apiOnly()
}).prefix('api')

