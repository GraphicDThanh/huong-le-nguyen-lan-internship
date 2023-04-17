import { useState } from 'react';

const NewPost = () => {
  const [postContent, setPostContent] = useState('');

  return <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} />;
};

export default NewPost;
