import React, { useState, useRef } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEL = useRef()
  const emailEL = useRef()
  const storeDataEL = useRef()

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEL.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name', name)
      localStorage.removeItem('email', email)
    }
  }

  return (
    <div className="ob-12 mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentsForm</h3>

      <div className="mb-4 grid grid-cols-1 gap-4">
        Comment
        <textarea
          ref={commentEl}
          placeholder="enter comment here ..."
          name="comment"
          className="w-full rounded-lg bg-gray-200 p-4 text-gray-200 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <h1 className="p-2">Name and Email</h1>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEL}
          placeholder="enter name here "
          name="name"
          className="w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-200 outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          type="text"
          ref={emailEL}
          placeholder="enter e-mail address here "
          name="email"
          className="w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-200 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEL}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="ml-2 cursor-pointer normal-case text-gray-500"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="ease inline-block cursor-pointer bg-orange-300 px-8 py-3  text-black transition duration-500  hover:bg-rose-300"
        >
          Post comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 font-semibold text-green-500">
            comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
