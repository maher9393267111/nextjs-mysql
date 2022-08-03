import nc from 'next-connect'
import { CreateProduct  } from '../../../controllers/all'

const handler = nc();

handler.post(CreateProduct)


export default handler;