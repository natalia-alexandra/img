import React, {useState} from 'react'

export default function DeleteImg(props) {
    // console.log(`http://localhost:5000/images/${props.imgId}/${props.imgUploadName}`)

    const [isdeleted, setIsdeleted] = useState(false)
    const [msg, setMsg] = useState("")

    const deleteHandler = () => {
        let confirm = window.confirm("Do you really want to delete this image?")
        if (confirm) {
            //  fetch("http://localhost:5000/images/" + props.imgId, {
            fetch("http://localhost:5000/images/" + props.imgId + "/" + props.imgUploadName, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(res1 => {
                    console.log("deleted", res1)
                    setIsdeleted(true)
                    setMsg("deleted")
                })
        }
    }

    // reload page after deleting image to remove the deleted image from the site 
    if (isdeleted) {
        window.location.reload()
    }

    return (
        <div>
            {msg}
        <button onClick={deleteHandler} >
            delete image
        </button>
        </div>
    )
}
