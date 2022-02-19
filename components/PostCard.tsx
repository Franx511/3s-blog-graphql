import React from 'react';
import moment from 'moment';
import Calendar from '/calendar.svg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
const PostCard = ({ post }: { post: any }) => {
    return (
        <div className='bg-white shadow-sm shadow-info rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md  pb-80 mb-4'>
                <img src={post.featuredImage.url} alt={post.title} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' />
            </div>
            <h1 className='transaition duration-700 text-center mb-8 
            cursor-pointer hover:text-secondary text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                    <img alt={post.author.name} height="40px" width="40px" className='align-middle rounded-md' src={post.author.photo.url} />
                    <p className='inline align-middle text-metal ml-2 text-lg'>{post.author.name}</p>
                </div>

                <div className='font-medium'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill='#fe6d73'><path d="M24,10V24H0V10Zm0-2V5a3,3,0,0,0-3-3H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V8Zm-6,6H16v2h2Zm-5,0H11v2h2ZM8,14H6v2H8Zm10,4H16v2h2Zm-5,0H11v2h2ZM8,18H6v2H8Z" /></svg>
                    <span className='ml-2 mt-2'>
                        {moment(post.createdAt).format('DD/MM/YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-2">
                {post.excerpt}
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transaition duration-700 cursor-pointer hover:translate-x-3 inline-block bg-secondary p-3 rounded-md text-white'>Continue Reading 
                    </span>
                </Link>
            </div>
        </div>
    )
};

export default PostCard;
