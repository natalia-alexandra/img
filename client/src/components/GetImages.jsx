import React, {useState, useEffect} from 'react'
import DeleteImg from './DeleteImg'
import UpdateImg from './UpdateImg';


export default function GetImages() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/images")
            .then(res => res.json())
            .then(data => {
                setImages(data.images)
            })
    }, [])


    if (!images) {
        return "loading"
    }

    const imgData = images && images.map((img, i) => {
        return (
            <li key={i}>
                <p>origin name: {img.originName}</p>
                <p>mime type: {img.mimeType}</p>
                <img src={img.imgPath} alt="image" width="200" />
                <DeleteImg imgId={img._id} imgUploadName={img.uploadName} />
                <UpdateImg imgId={img._id} imgUploadName={img.uploadName} />
            </li>
        )
    })

    // console.log("images:", images)

    return (
        <div>
            <h2>images</h2> 
            {
                <ul> {imgData} </ul>
            }
        </div>
    )
}
