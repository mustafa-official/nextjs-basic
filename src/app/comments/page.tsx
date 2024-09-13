import getComments from '@/lib/getRequest';
import React from 'react';

const Comments = async () => {
type Comments = {
    "postId": number;
    "id": number;
    "name": string;
    "email": string;
    "body": string;
    }

const data = await getComments()

return (
    <div>
        {
data?.map((comment: Comments)=> <div key={comment?.id}>{comment.email}</div>)
    }
    </div>
);
};

export default Comments;