import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


function Test2() {

    let API_BASE_URI = import.meta.env.VITE_API_BASE_URL;

    const [data, setData] = useState({
        fileName: '',
        imageContent: ''
    })

    useEffect(() => {
        console.log('data loaded');
    }, [data]);

    let uploadImage = (event) => {
        event.preventDefault();
        axios
            .post(`${API_BASE_URI}/image/uploadSingle`, data)
            .then(resp => {
                console.log(resp.data);
                toast.success(resp.data)
                setData({
                    fileName: '',
                    imageContent: ''
                })
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to upload image.')
            })
    }
    return (
        <div>
            <form>
                <input type="file" onChange={(event) => {
                    const reader = new FileReader();
                    let file = event.target.files[0];
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        setData({ fileName: file.name, imageContent: reader.result });
                    };
                }} />
                <button className='btn btn-sm btn-primary' onClick={(event) => uploadImage(event)}>Upload</button>
            </form>
        </div>
    )
}

export default Test2