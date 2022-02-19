import { useRouter } from 'next/router';
import React from 'react';
import { Categories, PostWidget, PostDetail, Loader, Author, CommentForm, Comments } from '../../components';
import { getPostDetails, getPosts } from '../../services';
const PostDetails = ({ post } :any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 pb-3 mb-8">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          <PostDetail post={post} />
          <CommentForm slug={post.slug}/>
          <Comments slug={post.slug}/>
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative lg:top-14 top-4'>
            <Author author= { post.author}/>
            <PostWidget categories={post.categories.map((category : any) => category.slug)} slug={post.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>

  );
};

export default PostDetails;

export async function getStaticProps({ params }:any) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } } : any) => ({ params: { slug } })),
    fallback: true,
  };
}

