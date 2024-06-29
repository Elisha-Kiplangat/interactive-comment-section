// import { useState } from 'react'
import AddComment from './components/AddComment'
import UserComment from './components/Reply/UserComment'
import CommentList from './components/Comments/CommentList'
import { useReducer } from 'react'
import { commentReducer, initialComments } from './components/CommentReducer'

function App() {

  const [comments, dispatch] = useReducer(commentReducer, initialComments)

  return (
    <>
      <div className="cover flex flex-col w-3/5 mx-auto mt-8 space-y-4">
           <CommentList/>
            <UserComment comments={comments} dispatch={dispatch} />
           <AddComment dispatch={dispatch}/>
       </div>
    </>
  )
}

export default App
