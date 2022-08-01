

import nc from 'next-connect'
import {DeletePost} from '../../../../controllers/all'

const handler = nc();

handler.delete(DeletePost)


export default handler;