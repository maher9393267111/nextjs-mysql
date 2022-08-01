import { server } from '../../config';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AlertDelete from '../../components/AlertDelete';

const PostSingle = ({data,postid}) => {

    const [deleteAlerte, setDeleteAlerte] = useState(false);

    console.log('data in Client',data[0])
    return (
        <div>

            <h1>Single post Page</h1>
            <h4>{data[0]?.name}</h4>


            <p dangerouslySetInnerHTML={{ __html: data[0]?.desc }} />



<div>
<Button
          color="error"
          variant="contained"
          disableElevation
          onClick={() => setDeleteAlerte(true)}
        >
          Supprimer
        </Button>
</div>

<div>
<AlertDelete
        route="post"
        deleteAlerte={deleteAlerte}
        setDeleteAlerte={setDeleteAlerte}
        id={postid}
      />
</div>



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
