

import  db from '../lib/dbknex'



export const Allposts= async (req, res) => {

   
const posts = await db('posts');

res.status(200);
res.json({
    message: 'Posts data',
    data: posts
});



}