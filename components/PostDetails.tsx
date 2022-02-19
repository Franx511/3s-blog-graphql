import React from 'react';

import moment from 'moment';
import ReactPlayer from 'react-player'

const PostDetail = ({ post } :any) => {
  const getContentFragment = (index:any, text:any, obj:any, type='') => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    } 
    switch (type) {
      
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            
          />
        );
        case 'video':
        return (
          <ReactPlayer key={index} height={obj.height} 
           width={obj.width} url={obj.src}  controls playing light={true} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-lg lg:p-8 pb-12 mb-8 bg-white">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-md"
                src={post.author.photo.url}
              />
             <p className='inline align-middle text-metal ml-2 text-lg'>{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill='#fe6d73'><path d="M24,10V24H0V10Zm0-2V5a3,3,0,0,0-3-3H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V8Zm-6,6H16v2h2Zm-5,0H11v2h2ZM8,14H6v2H8Zm10,4H16v2h2Zm-5,0H11v2h2ZM8,18H6v2H8Z" /></svg>
              <span className="align-middle">{moment(post.createdAt).format('DD/MM/YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj:any, index:any) => {
            const children = typeObj.children.map((item:any, itemindex:any) => getContentFragment(itemindex, item.text, item));
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;
