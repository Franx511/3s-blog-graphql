import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }: any) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res)
    })
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-bold border-b-2 border-primary pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment: any) => (
            <div key={comment.createdAt} className='bg-gray-200 p-4 rounded-lg w-fit' >
              <p className="mb-4">
                  <span className="font-semibold text-secondary">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('DD/MM/YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 ">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments