import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export class AdminLoginValidator extends BaseValidator {
   constructor(protected ctx: HttpContextContract) {
      super()
   }

   public schema = schema.create({
      email: schema.string(),
      password: schema.string(),
   })

   public messages = {
      ...this.messages,
      'email.required': "Email is required",
      'password.required': "Password is required",
   }
}

export class LoginValidator extends BaseValidator {
   constructor(protected ctx: HttpContextContract) {
      super()
   }

   public schema = schema.create({
      identifier: schema.string(),
      password: schema.string(),
   })

   // public messages = {}
}

export class RegisterValidator extends BaseValidator {
   constructor(protected ctx: HttpContextContract) {
      super()
   }

   public schema = schema.create({
      firstName: schema.string({}, [
         rules.minLength(2),
         rules.maxLength(50),
      ]),
      lastName: schema.string({}, [
         rules.minLength(2),
         rules.maxLength(50),
      ]),
      email: schema.string({}, [
         rules.email(),
         rules.unique({ table: 'users', column: 'email' }),
      ]),
      phone: schema.string({}, [
         rules.mobile(),
         rules.unique({ table: 'users', column: 'phone' }),
      ]),
      password: schema.string({}, [
         rules.maxLength(180),
         rules.confirmed(),
      ]),
   })

   public messages = {
      ...this.messages,
      'email.unique': "E-mail already exits",
      'phone.unique': "Phone Number already exits",
   }
}
