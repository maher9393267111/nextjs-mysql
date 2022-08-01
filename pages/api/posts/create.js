import nc from 'next-connect'
import {CreatePost} from '../../../controllers/all'

const handler = nc();

handler.post(CreatePost)


export default handler;