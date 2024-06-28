import image from '../../assets/avatars/image-amyrobson.webp'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import dlt from '../../assets/icon-delete.svg'
import edit from '../../assets/icon-edit.svg'

import { initialComments} from '../Comments/CommentList'


const UserComment = () => {
  return (
    <>
        <div className="container-reply mx-auto px-4 space-y-4">
            {initialComments.map((comment) => (
                
            <div className="comment bg-white p-4 rounded-md shadow-md flex items-start">
                <div className="likes">
                    <button className="likes__button">
                        <img src={plus} alt="" />
                    </button>
                    <span className="likes__count">{comment.likes}</span>
                    <button className="likes__button">
                        <img src={minus} alt="" />
                    </button>

                </div>
                <div className="right">
                <div className="comment__user">
                    <div className="details">
                        <img src={image} alt="User" />
                        <h3>{comment.username}</h3>
                        <span className='user'>you</span>
                        <span className='time'>{comment.time}</span>
                    </div>
                    <button className='delete'>
                        <img src={dlt} alt="" />
                        Delete
                    </button>
                    <button className='edit'>
                        <img src={edit} alt="" />
                        Edit
                    </button>
                </div>
                <p className="comment__content">{comment.content}</p>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default UserComment