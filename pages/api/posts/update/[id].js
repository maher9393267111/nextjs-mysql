

import nc from 'next-connect'
import {UpdatePost} from '../../../../controllers/all'

const handler = nc();

handler.put(UpdatePost)


export default handler;