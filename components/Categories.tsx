import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => {
      if (result) {
        setCategories(result);
      }
    })

  }, [])
  return <div className='bg-secondary bg-opacity-80 shadow-lg shadow-gray-300 mb-8 rounded-lg d-flex  p-8 mb-8'>
    <h3 className='text-white font-bold mb-2  pb-2 text-xl'>
      Categories
    </h3>
    {categories.map((category: any, index) => (
      <Link href={`/category/${category.slug}`} key={index}>
        <div key={index} className="w-40 md:w-48 lg:w-64 mb-4 d-flex text-center">
          <span className={`cursor-pointer transaition duration-700 block border-2  border-info hover:bg-primary my-2 font-semibold text-white`}>{category.name}</span>
        </div>
      </Link>
    ))}
  </div>;
};


export default Categories; 
