import { useState } from 'react';
import image from '../assets/avatars/image-amyrobson.png';
// import { Comment } from '../components/CommentReducer';

// interface AddCommentProps {
//     dispatch: (action: { type: string; payload: Comment }) => void;
// }

const AddComment= ( {dispatch}: any ) => {
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newComment = {
            id: Date.now(),
            username: 'newuser',
            time: 'just now',
            content: comment,
            likes: 0,
        };

        dispatch({ type: 'ADD_COMMENT', payload: newComment });
        setComment('');
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <form className="add-comment flex" onSubmit={handleSubmit}>
                    <div className="add-comment__user mr-4">
                        <img src={image} alt="User" className="rounded-full w-10 h-10" />
                    </div>
                    <textarea
                        className="add-comment__content flex-grow border border-gray-300 p-2 rounded-md"
                        placeholder="Write your comment here"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button className="add-comment__submit bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 h-10" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddComment;
