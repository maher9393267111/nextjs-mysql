import nc from 'next-connect'
import {Login} from '../../../controllers/all'

const handler = nc();

handler.post(
    Login
   
)


export default handler;