import nc from 'next-connect'
import {Allposts} from '../../../controllers/all'
import authorization from '../../../middlware/auth'

const handler = nc();

handler
//.use(authorization)
.get(Allposts)


export default handler;