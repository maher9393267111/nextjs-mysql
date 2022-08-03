import nc from 'next-connect'
import { CreateCategory   } from '../../../controllers/all'

const handler = nc();

handler.post(CreateCategory)


export default handler;