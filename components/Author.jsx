import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-orange-900 bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        {' '}
        <img
          alt={author.height}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
          src={author.photo.url}
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-lg normal-case">{author.bio}</p>
    </div>
  )
}

export default Author
