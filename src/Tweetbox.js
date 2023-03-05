import React,{useState} from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';

function Tweetbox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("")

  const sendTweet = e =>{
    e.preventDefault();

    db.collection('posts').add({
      displayName:'Rohit Waghe',
      username:'rohitwaghe',
      verified:true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://scontent.fnag1-1.fna.fbcdn.net/v/t1.6435-9/62017839_867146730301908_3515918897758863360_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=GtA9EwJRyGAAX81VYos&_nc_ht=scontent.fnag1-1.fna&oh=00_AfARRtvRdf_MM8ioOq3URfPPPlLv0lJCQPudANj2hRDmQw&oe=641A821A'

    });

    setTweetMessage("");
    setTweetImage("")

  };
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://scontent.fnag1-1.fna.fbcdn.net/v/t1.6435-9/62017839_867146730301908_3515918897758863360_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=GtA9EwJRyGAAX81VYos&_nc_ht=scontent.fnag1-1.fna&oh=00_AfARRtvRdf_MM8ioOq3URfPPPlLv0lJCQPudANj2hRDmQw&oe=641A821A" />
                <input
                onChange={(e)=>setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="What's happening?" type='text' />
            </div>
            <input
            value={tweetImage}
            onChange={(e)=>setTweetImage(e.target.value)}
            className='tweetBox__imageInput' placeholder='Optional: Enter Image URL' type='text' />

            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>
                Tweet
            </Button>
        </form>
    </div>
  )
}

export default Tweetbox