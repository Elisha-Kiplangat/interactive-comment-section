export interface Comment {
    id: number;
    username: string;
    time: string;
    content: string;
    likes: number;
}

export const initialComments: Comment[] = [
    {
        id: 1,
        username: 'amyrobson',
        time: '1 day ago',
        content: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
        likes: 10
    },
    {
        id: 2,
        username: 'John Doe',
        time: '1 month ago',
        content: 'This is the top trend in Kenya now',
        likes: 12
    }
];

type Action = 
    { type: 'ADD_COMMENT', payload: Comment }
|   { type: 'LIKE_COMMENT', payload: number }
|   { type: 'UNLIKE_COMMENT', payload: number };


export const commentReducer = (state: Comment[], action: Action): Comment[] => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.payload];

        case 'LIKE_COMMENT':
            return state.map((comment) => 
                comment.id === action.payload ? { ...comment, likes: comment.likes + 1 } : comment
            
            );
        case 'UNLIKE_COMMENT':
            return state.map((comment) =>
                comment.id === action.payload ? { ...comment, likes: comment.likes - 1 } : comment
            );

        default:
            return state;
    }
};
