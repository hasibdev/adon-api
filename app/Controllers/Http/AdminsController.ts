import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AdminLoginValidator } from 'App/Validators/AuthValidator'

export default class AdminsController {
   public async login({ request, auth }: HttpContextContract) {
      const { email, password } = await request.validate(AdminLoginValidator)
      const result = await auth.use('admin').attempt(email, password, {
         expiresIn: '2days',
      })

      return result
   }
}
