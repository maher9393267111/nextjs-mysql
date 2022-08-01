import nc from 'next-connect'
import {Allposts} from '../../../controllers/all'

const handler = nc();

handler.get(
    Allposts
)

export default handler;