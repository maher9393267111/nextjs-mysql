
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { server } from '../../config';
import { useRouter } from 'next/router';

const Update = () => {

    const router = useRouter();

    return (
        <div>
            <h1>Update Post Page</h1>

        </div>
    );
}

export default Update;
