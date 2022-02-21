import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import CategoryValidator from 'App/Validators/CategoryValidator'
import pagination from 'App/helpers/pagination'

export default class CategoriesController {
   public async index({ request }: HttpContextContract) {
      const { page, perPage } = pagination(request)

      const data = await Category.query().paginate(page, perPage)

      return data
   }

   public async store({ request, response }: HttpContextContract) {
      const validated = await request.validate(CategoryValidator)
      const data = await Category.create(validated)

      return response.created(data)
   }

   public async show({ params }: HttpContextContract) {
      return await Category.findOrFail(params.id)
   }

   public async update({ request, response, params }: HttpContextContract) {
      const validated = await request.validate(CategoryValidator)

      const find = await Category.findOrFail(params.id)
      const data = await find.merge(validated).save()

      return response.accepted(data)
   }

   public async destroy({ params }: HttpContextContract) {
      const data = await Category.findOrFail(params.id)
      await data.delete()

      return { message: 'Deleted Successfully' }
   }
}
