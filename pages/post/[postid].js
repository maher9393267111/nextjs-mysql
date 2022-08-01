import { server } from '../../config';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PostSingle = ({data}) => {
    console.log('data in Client',data[0])
    return (
        <div>

            <h1>Single post Page</h1>
            
        </div>
    );
}

export default PostSingle;




export async function getServerSideProps(context) {
    const { postid } = context.query;
console.log('postid',postid)
    const res = await fetch(`${server}/api/post/${postid}`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true
      };
    }
  
    return {
      props: { data, postid }
    };
  }
