// import { useState } from 'react'
import AddComment from './components/AddComment'
import UserComment from './components/Reply/UserComment'
import CommentList from './components/Comments/CommentList'
// import { useReducer } from 'react'

function App() {

  return (
    <>
      <div className="cover flex flex-col w-3/5 mx-auto mt-8 space-y-4">
           <CommentList />
           <UserComment />
           <AddComment />
       </div>
    </>
  )
}

export default App
