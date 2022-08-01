
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { server } from '../config';
import axios from 'axios';


const Createpost = () => {

    const router = useRouter();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState();


    const handleUpdate = async (e) => {
        e.preventDefault();
        const newData = {
          name,
          desc,
          image: 'https://via.placeholder.com/150'
        };
        console.log('newData', newData);
        await  axios.post(`${server}/api/system`, newData);
      };
    





    return (
        <div>
            <div>
                <h1>Create Post</h1>

                <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <ReactQuill preserveWhitespace value={desc} onChange={setDesc} />
      <Button onClick={handleUpdate}>Save</Button>
      <Button onClick={() => router.back()} color="warning">
        Cancel
      </Button>
    </div>



            </div>
        </div>
    );
}

export default Createpost;
