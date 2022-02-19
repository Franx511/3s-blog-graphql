import { useRouter } from 'next/router';
import React from 'react';
import { Categories, PostWidget, PostDetail, PostCard, Loader } from '../../components';
import { getCategories, getCategoryPost, getPostDetails, getPosts } from '../../services';
const PostDetails = ({ posts } :any) => {
    const router = useRouter();

    if (router.isFallback) {
      return <Loader />;
    }
  
  return (
    <div className="container mx-auto px-10 pb-3 mb-8">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {
          posts.map((post:any, index:any) =>
          (
            <PostCard post={post.node} key={index}/>
          ))
        }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-10'>
            <PostWidget categories={null} slug={null} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }:any) {
  const data = await getCategoryPost(params.slug);
  return {
    props: {
      posts: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }  : any) => ({ params: { slug } })),
    fallback: true,
  };
}

