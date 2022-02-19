import React from 'react'
import Image from 'next/image'
const Author = ({ author }: any) => {
  return (
    <div className="shadow-lg rounded-lg relative text-center mt-20 p-12 mb-10 bg-primary bg-opacity-80 ">
      <div className='absolute left-0 right-0 -top-16 flex justify-center'>
        <div className='bg-main rounded-full' style={{ width: '120px', height: '118px' }}  ></div>
      </div>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <div className='mt-3'>
        <h3 className='inline align-middle text-white my-5  text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-xl'> {author.bio} </p>
      </div>
    </div>
  )
}

export default Author