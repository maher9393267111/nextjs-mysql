// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '../../../lib/db';

export default async function handler(req, res) {
  // SHOW ALL SYSTEME
  if (req.method === 'GET') {
    try {
      const result = await excuteQuery({
        query: 'SELECT * FROM `category`'
      });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(402).json(error.message);
    }
  }
  // CREATE A NEW SYSTEME
  else if (req.method === 'POST') {
    console.log('req method', req.method);
console.log('req.body',req.body)
    const { name, desc, image } = req.body;
    console.log('Imageee 💠💠💠---->', image);
    try {
      const result = await excuteQuery({
        query:
          'INSERT INTO `posts`(`name`, `desc`, `image`) VALUES (?, ?, ?)',
    
          values: [name, desc, image]
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(200).json(error);
    }
  }
}