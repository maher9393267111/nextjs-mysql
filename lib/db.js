import mysql from 'serverless-mysql';
const db = mysql({
 
 
  config: {
    // host: 'localhost',
    // database: 'test',
    // user: 'root',
    // root:'localhost',
    // password: ''
    host : 'localhost',
    port : '3306',
    database : 'test',
    user : 'root',
    //password : '',
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.log(error);
    return { error };
  }
}