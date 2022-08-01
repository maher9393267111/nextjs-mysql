
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { server } from '../../config';
import { useRouter } from 'next/router';
import axios from 'axios';
const Update = ({data:post,id}) => {


    const data = post[0];
    const [name, setName] = useState(data?.name);
    const [desc, setDesc] = useState(data?.desc);
    const [image, setImage] = useState(data?.image);

    const router = useRouter();


    const handleUpdate = async (e) => {
        e.preventDefault();
        const newData = {

          name,
          desc,
          image: 'https://via.placeholder.com/150'
        };
        console.log('newData', newData);
        await  axios.put(`${server}/api/post/${id}`, newData);
      };
    






    return (
        <div>
            <h1>Update Post Page</h1>


<img 
style={{"width":"100px","height":"100px"}}
src={image} alt="" />


<div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <ReactQuill preserveWhitespace value={desc} onChange={setDesc} />
      <Button onClick={handleUpdate}>Save</Button>
      <Button onClick={() => router.back()} color="warning">
        Cancel
      </Button>
    </div>

        </div>
    );
}

export default Update;



export async function getServerSideProps(context) {
    const { id } = context.query;
console.log('id',id)
    const res = await fetch(`${server}/api/post/${id}`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true
      };
    }
  
    return {
      props: { data, id }
    };
  }
