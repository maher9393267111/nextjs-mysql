
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { server } from '../config';
import axios from 'axios';



const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]


const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}


const Createpost = () => {

    const router = useRouter();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState();


  // handle image change
const sendImage = (e) => {
  e.preventDefault();
  let reader = new FileReader();
  let file = e.target.files[0];
  reader.onloadend = () => {
    setImage(reader.result);
  //  console.log('RESULT----->',reader.result);
  }
  reader.readAsDataURL(file);
 console.log('image💠💠💠',image);

}




    const handleUpdate = async (e) => {
        e.preventDefault();
        const newData = {
          name,
          desc,
          image: image ? image : 'https://via.placeholder.com/150'
        };
        console.log('newData', newData);
        await  axios.post(`${server}/api/system`, newData);
      };
    





    return (
        <div>
            <div>
                <h1>Create Post</h1>

                <div>

<div>
  <input type="file" onChange={sendImage} />
</div>

<img src={image} alt="" />


      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <ReactQuill
      modules={modules}
      preserveWhitespace value={desc} onChange={setDesc} formats={formats} />
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
