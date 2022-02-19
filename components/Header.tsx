import React, { useContext } from 'react';

import Link from 'next/link';
const Header = () => {
    const categories = [{ name: 'Foods', slug: 'foods' }, { name: 'Places', slug: 'places' }]
    return (
        <div className='bg-primary'>
        <div className='container mx-auto px-10 py-6 bg-primary'>
            <div className='border-b-2 w-full inline-block border-info px-4 py-5'>
                <div className='md:float-left block'>
                    <Link href={"/"}>
                        <span className='cursor-pointer font-bold text-4xl text-white drop-shadow-lg shadow-info' style={{fontFamily:'Permanent Marker'}}>
                            Saigon so sweet
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer text-white'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
    </div>
        </div>
)


};

export default Header;
