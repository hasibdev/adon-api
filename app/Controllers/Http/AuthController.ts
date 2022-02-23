import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { RegisterValidator, LoginValidator } from 'App/Validators/AuthValidator'

export default class AuthController {
   public async login({ request, auth }: HttpContextContract) {
      const { identifier, password } = await request.validate(LoginValidator)
      const result = await auth.use('api').attempt(identifier, password, {
         expiresIn: '7days',
      })
      return result
   }
   public async register({ request }: HttpContextContract) {
      const validated = await request.validate(RegisterValidator)

      return await User.create(validated)
   }
}
