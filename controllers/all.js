

import  db from '../lib/dbknex'



export const Allposts= async (req, res) => {

   
const posts = await db('posts');

res.status(200);
res.json({
    message: 'Posts data',
    data: posts
});



}



export const CreatePost= async (req, res) => {

    const { title, content } = req.body;

    const create = await db('posts2').insert({
        title,
        content
    });
    
    console.log('create',create)
    const createdData = await db('posts2').where('id', create).first();

    console.log('createdData',createdData)
    res.status(200);
    res.json({
        message: 'Post created successfully',
        data: createdData
    });
   
 

    
    }
    
    


     export const UpdatePost= async (req, res) => {

        const { id } = req.query;
        const { title, content } = req.body;
    
        // update post

        const update = await db('posts2')
                                .where({ id })
                                .update({
                                    title,
                                    content
                                });
    
        // fetch updated post after update
        const updatedData = await db('posts').where({ id }).first();
    
        res.status(200);
        res.json({
            message: 'Post updated successfully',
            data: updatedData
        });


     }