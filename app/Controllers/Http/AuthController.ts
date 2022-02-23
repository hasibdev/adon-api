import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
   public login({ }: HttpContextContract) {
      return 'login'
   }
   public async register({ request }: HttpContextContract) {
      const validated = await request.validate(AuthValidator)

      return await User.create(validated)
   }
}
