import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
  { name: 'live', slug: 'react' },
  { name: 'laugh', slug: 'web-dev' },
  { name: 'love', slug: 'cat-love' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-black py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-black">
              choonsik
            </span>
          </Link>
        </div>
        <div className="hidden text-black md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="ml-4 mt-2 cursor-pointer align-middle font-semibold text-black md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
