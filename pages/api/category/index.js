import nc from 'next-connect'
import { AllCategories   } from '../../../controllers/all'

const handler = nc();

handler.get(AllCategories)


export default handler;