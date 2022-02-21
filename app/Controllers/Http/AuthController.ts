import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
   public login({ }: HttpContextContract) {
      return 'login'
   }
   public register({ }: HttpContextContract) {
      return 'register'
   }
}
