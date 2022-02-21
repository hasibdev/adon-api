import { RequestContract } from '@ioc:Adonis/Core/Request'

export default function (request: RequestContract) {
   const page = request.input('page', 1)
   const perPage = request.input('perPage', 25)

   return { page, perPage }
}
