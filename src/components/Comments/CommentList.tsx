// import {useReducer} from 'react'
import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import reply from '../../assets/icon-reply.svg'

export interface comments {
    id: number,
    username: string,
    time: string,
    content: string,
    likes: number

}

interface UserCommentProps {
    dispatch: (action: { type: string; payload: any }) => void;
}

export const initialComments: comments[] = [
        {
            id : 1,
            username: 'amyrobson',
            time: '1 day ago',
            content: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
            likes: 10
    
        },
        {
            id : 1,
            username: 'John Doe',
            time: '1 month ago',
            content: 'This is the top trend in Kenya now',
            likes: 12
    
        }
    ]

    

const CommentList = ( { dispatch} :UserCommentProps) => {

    // const [state, dispatch] = useReducer(CommentReducer, initialComments);
    

     const handleLike = (id: number) => {
        dispatch({ type: 'LIKE_COMMENT', payload: id });
    };

    const handleUnlike = (id: number) => {
        dispatch ({ type: 'UNLIKE_COMMENT', payload: id });
    };



  return (
     <>
       <div className="container mx-auto px-4 space-y-4">
        {initialComments.map((comment) => (
    <div key={comment.id}className="comment bg-gray-100 p-4 rounded-md shadow-md flex items-start">
        <div className="likes bg-gray-200 mr-4 p-2 rounded-md flex flex-col items-center">
            <button className="likes__button focus:outline-none mb-2" onClick={()=>handleLike(comment.id)}>
                <img src={plus} alt="Increase likes" className="w-3 h-3" />
            </button>
            <span className="likes__count text-blue-500 font-bold">{comment.likes}</span>
            <button className="likes__button focus:outline-none mt-2" onClick={()=>handleUnlike(comment.id)}>
                <img src={minus} alt="Decrease likes" className="w-4 h-1" />
            </button>
        </div>
        <div className="right w-full">
            <div className="comment__user flex items-center justify-between mb-2">
                <div className="info mx-3 flex flex-row items-center">
                <img src={image} alt="User" className="rounded-full w-10 h-10 mr-2" />
                
                <h3 className="text-lg font-semibold">{comment.username}</h3>
                <span className="time mx-3 text-sm text-gray-500">{comment.time}</span>
                </div>

                <button className="reply mr-3 flex items-center text-blue-500 text-sm focus:outline-none">
                <img src={reply} alt="Reply" className="w-4 h-4 mr-1 inline" />
                Reply
                </button>
            </div>
            <p className="comment__content text-gray-800 mb-2">{comment.content}</p>
            
        </div>
    </div>
        ))}
</div>


    </>
  )
}

export default CommentList