import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';
const PostWidget = ({ categories, slug }: { categories: any, slug: any }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        if (result) {
          setRelatedPosts(result);
        }
      })
    } else {
      getRecentPosts().then((result) => {
        if (result) {
          setRelatedPosts(result);
        }
      })
    }
  },[slug])  
  return <div className='bg-secondary bg-opacity-80 shadow-lg shadow-gray-300 mb-8 rounded-lg p-8'>
    <h3 className='text-white font-bold mb-3  pb-3 text-xl border-b-2 border-info'>
      {slug? 'Related Posts': 'Recent Posts'}
    </h3>
    {relatedPosts.map((post:any, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              // loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className=" text-info font-xs">{moment(post.createdAt).format('DD/MM/YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}>
              <div  className="text-md text-white font-semibold cursor-pointer">
              {post.title}
              </div></Link>
          </div>
        </div>
      ))}
  </div>;
};

export default PostWidget;
