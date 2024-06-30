import image from '../../assets/avatars/image-amyrobson.webp';
import plus from '../../assets/icon-plus.svg';
import minus from '../../assets/icon-minus.svg';
import dlt from '../../assets/icon-delete.svg';
import edit from '../../assets/icon-edit.svg';
import { Comment } from '../CommentReducer';

interface UserCommentProps {
    comments: Comment[];
    dispatch: (action: { type: 'ADD_COMMENT'; payload: Comment }) => void;
}

const UserComment = ({ comments }: UserCommentProps) => {
    const handleLike = () => {
        
    };

    const handleUnlike = () => {
        // Logic to handle unlike
    };

    return (
        <>
            <div className="container-reply w-4/5 mx-auto px-4 space-y-4 flex flex-col">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment bg-white p-4 rounded-lg shadow-md flex items-start">
                        <div className="likes bg-gray-200 mr-4 p-2 rounded-md flex flex-col items-center">
                            <button className="likes__button focus:outline-none mb-2" onClick={handleLike}>
                                <img src={plus} alt="Increase likes" className="w-3 h-3" />
                            </button>
                            <span className="likes__count text-blue-500 font-bold">{comment.likes}</span>
                            <button className="likes__button focus:outline-none mt-2" onClick={handleUnlike}>
                                <img src={minus} alt="Decrease likes" className="w-4 h-1" />
                            </button>
                        </div>
                        <div className="right w-full">
                            <div className="comment__user flex items-center justify-between mb-2">
                                <div className="info flex flex-row items-center">
                                    <img src={image} alt="User" className="rounded-full w-10 h-10 mr-3" />
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold">{comment.username}</h3>
                                        <span className="time text-sm text-gray-500">{comment.time}</span>
                                    </div>
                                </div>
                                <div className="controlbtns flex flex-row items-center">
                                    <button className="delete flex items-center mr-3 text-red-500 focus:outline-none">
                                        <img src={dlt} alt="Delete" className="w-4 h-4 mr-1 inline" />
                                        Delete
                                    </button>
                                    <button className="edit flex items-center text-blue-500 focus:outline-none">
                                        <img src={edit} alt="Edit" className="w-4 h-4 mr-1 inline" />
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <p className="comment__content text-gray-800">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserComment;
