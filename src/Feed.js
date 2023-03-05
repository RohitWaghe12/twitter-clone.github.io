import React, { useEffect, useState } from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            <Tweetbox />
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>


            <Post
                displayName="Rohit Waghe"
                username="Rohit"
                verified={true}
                text="This is test"
                avatar="https://freepngimg.com/thumb/categories/402.png"
                image="https://freepngimg.com/thumb/categories/402.png"
            />
        </div>


    );
}

export default Feed