import React from 'react';
import {server} from '../../config'

const Posts = ({data}) => {
    console.log('data in client' ,data.data)
    return (
        <div>
            posts page
        </div>
    );
}

export default Posts;



export async function getServerSideProps(context) {
    const res = await fetch(`${server}/api/posts`);
    console.log('res',res)
    const data = await res.json();
    console.log('res------>',data)
  
 
 
 
 
   if (!res) {
     return {
       notFound: true
     };
   }
 
   return {
     props: { data }
   };
 }
 