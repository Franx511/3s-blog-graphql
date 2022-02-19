import React, { useRef, useEffect, useState } from 'react'
import { submitComment } from '../services';

const CommentForm = ({ slug }: any) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });


  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef<HTMLInputElement>(null);


  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')!;
    emailEl.current.value = window.localStorage.getItem('email')!;
  }, []);
  const onInputChange = (e: any) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);

    const comment = commentEl.current?.value;
    const name = nameEl.current?.value;
    const email = emailEl.current?.value;
    const storeData = storeDataEl.current?.value;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name, email, comment, slug
    }
    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        commentEl.current.value = '';
        setShowSuccessMessage(false);
      }, 2500)
    });
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b-2 border-primary pb-4'>Let us know what you think</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-secondary bg-gray-100 text-gray-500"
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input type="text" ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-secondary bg-gray-100 text-gray-500"
          placeholder='Name'
          name='name'
        />
        <input type="text" ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-secondary bg-gray-100 text-gray-500"
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input type="checkbox" onChange={onInputChange} id="storeData" name="storeData" ref={storeDataEl} value="true'" />
          <label htmlFor='storeData' className='text-gray-500 ml-2 cursor-pointer'>Save my email and name for the next time.</label>
        </div>
        {error && <p className='text-danger  text-md font-bold'>All fields are required</p>}
        {showSuccessMessage && <p className='text-info  text-md font-bold'>Comment submitted</p>}
      </div>
      <div className='mt-6 pb-4'>
        <button type='button' onClick={handleCommentSubmission} className='transition ease  duration-500 px-3 py-2 rounded-full border-2 border-primary ease hover:text-white hover:bg-opacity-70 hover:bg-primary inline-block' >Post your comment</button>
      </div>

    </div>
  )
}

export default CommentForm