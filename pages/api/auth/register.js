import nc from 'next-connect'
import {Register} from '../../../controllers/all'

const handler = nc();

handler.post(
    Register
   
)

export default handler;