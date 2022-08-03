import nc from 'next-connect'
import { ChangeProductQuantity  } from '../../../controllers/all'

const handler = nc();





handler.put(ChangeProductQuantity)


export default handler;