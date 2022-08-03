import nc from 'next-connect'
import { AllProducts   } from '../../../controllers/all'

const handler = nc();

handler.get(AllProducts)


export default handler;