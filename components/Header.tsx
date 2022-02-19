import React, { useContext } from 'react'

import Link from 'next/link'
const Header = () => {
  const categories = [
    { name: 'SEO', slug: 'seo' },
    { name: 'GraphQL', slug: 'graphql' },
  ]
  return (
    <div className="bg-primary">
      <div className="container mx-auto bg-primary px-10 py-6">
        <div className="inline-block w-full border-b-2 border-info px-4 py-5">
          <div className="block md:float-left">
            <Link href={'/'}>
              <span
                className="cursor-pointer text-4xl font-bold text-white shadow-info drop-shadow-lg"
                style={{ fontFamily: 'Permanent Marker' }}
              >
                Just a simple blog
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white text-white md:float-right">
                  {category.name}
                </span>
              </Link>
            ))}

            <Link key="about" href={`/about`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white text-white md:float-right">
                    About us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
