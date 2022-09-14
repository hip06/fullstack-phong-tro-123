import React, { useState } from 'react'
import { Overview, Address } from '../../components'
import { BsCameraFill } from 'react-icons/bs'
import { apiUploadImages } from '../../services'

const CreatePost = () => {

    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceNumber: 0,
        areaNumber: 0,
        image: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',
        province: ''
    })
    // console.log(payload);
    const handleFiles = async (e) => {
        e.stopPropagation()
        let files = e.target.files
        let images = new FormData()
        for (let i of files) {
            console.log(1);
            images.append('file', i)
            images.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)

            let response = await apiUploadImages(images)
            console.log(response);
        }
    }
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
            <div className='flex gap-4'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address payload={payload} setPayload={setPayload} />
                    <Overview payload={payload} setPayload={setPayload} />
                    <div className='w-full'>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className='w-full'>
                            <label className='w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md' htmlFor="file">
                                <BsCameraFill color='blue' size={50} />
                                Thêm ảnh
                            </label>
                            <input onChange={handleFiles} value='' hidden type="file" id='file' multiple />
                        </div>
                    </div>
                    <div className='h-[500px]'>

                    </div>
                </div>
                <div className='w-[30%] flex-none'>
                    maps
                </div>
            </div>
        </div>
    )
}

export default CreatePost