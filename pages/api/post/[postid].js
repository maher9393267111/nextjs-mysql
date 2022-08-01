// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '../../../lib/db';

export default async function handler(req, res) {
  // SHOW SELECTED SYSTEME
  if (req.method === 'GET') {
    try {
      const postid = req.query.postid;
      console.log('postid------>',postid)
      const result = await excuteQuery({
        query: 'SELECT * FROM `posts` WHERE id = ?',
        values: postid
      });
      console.log('result',result)
      res.status(200).json(result);
    } catch (error) {
        console.log(error);
      res.status(404).json(error);
    }
  }

  // DELETE SELECTED SYSTEME
  else if (req.method === 'POST') {
    try {
      const id = req.query.id;
      const result = await excuteQuery({
        query: 'DELETE FROM `systeme` WHERE id_systeme = ?',
        values: id
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error);
    }
  }

  // UPDATE SELECTED SYSTEME
  else if (req.method === 'PUT') {
    const { name, desc, image } = req.body.newData;
    const id = req.query.id;
    try {
      const result = await excuteQuery({
        query:
          'UPDATE `systeme` SET `id_systeme`= ?,`name_systeme`= ?,`desc_systeme`= ?,`image_systeme`= ? WHERE id_systeme = ?',
        values: [id, name, desc, image, id]
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}