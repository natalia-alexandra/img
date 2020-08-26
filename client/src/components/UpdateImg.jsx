import React, { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginFileValidateType)


export default function UpdateImg(props) {
    const [image, setImage] = useState(null)
    const [updateImg, setUpdateImg] = useState(false)

    return (
        <div>
            <button onClick={() => setUpdateImg(!updateImg)}>update image</button>
            
            { updateImg ? (
                    <FilePond
                        name="img-upload"
                        files={image}
                        onupdatefiles={setImage}
                    server={
                        {
                            url: "http://localhost:5000/images/" + props.imgId + "/" + props.imgUploadName,
                            process: {
                    
                                method: 'PUT',
                                withCredentials: false,
                                headers: {},
                                timeout: 7000,
                                onload: null,
                                onerror: null
                            }
                        }}
                        maxFiles={1}
                        allowFileTypeValidation={true}
                        acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg','image/webp', 'image/gif']}
                        fileValidateTypeLabelExpectedTypesMap={{'image/jpeg': '.jpg', 'image/png':'.png', 'image/webp':'.webp'}}
                        labelFileTypeNotAllowed={'Upload only images (jpeg, png, webp, gif)'}
                        maxTotalFileSize={10485760}
                        labelMaxTotalFileSize={'Total file size should be lesser than 10MB.'}
                        allowImageResize={true}
                        imageResizeTargetWidth="200px"
                        className="img-upload"
                />)
                :
                (
                    null
                )
            }
            
        </div>
    )
}
