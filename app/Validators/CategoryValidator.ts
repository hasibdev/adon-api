import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export default class CategoryCreateValidator extends BaseValidator {
   constructor(protected ctx: HttpContextContract) {
      super()
   }
   public schema = schema.create({
      name: schema.string({ trim: true }),
      description: schema.string.nullableAndOptional({ trim: true }),
   })
}
