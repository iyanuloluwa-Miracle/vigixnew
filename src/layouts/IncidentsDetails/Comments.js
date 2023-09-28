import React, { useState, useEffect } from 'react';
import { CommentsWrapper } from './styles';
import { Input, Button } from 'antd';
import { fetchCommentsId } from "../../../apis"
import Cookies from 'js-cookie';
import { OverlayContext } from '../../../components/Layout';
import api from '../../../apis';
import { BASE_URL } from '../../../utility/constants';



export default function Comments({ incidentId }) {
  const [message, setMessage] = useState("")
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('');
  const token = Cookies.get('token');
  const { user } = OverlayContext();
  console.log(incidentId)

  const formatTimestamp = (timestamp) => {
    const formattedDate = new Date(timestamp).toLocaleString(); // You can adjust the format as needed
    return formattedDate;
  };




  // Function to fetch comments when the component mounts
  useEffect(() => {
    // Check if incidentId is available (assuming it's passed as a prop)
    if (incidentId) {
      // Call your fetchCommentsId API function
      async function fetchComments() {
        try {
          const commentsData = await fetchCommentsId(token, incidentId);
          // Set the retrieved comments in the state
          setComments(commentsData.data);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }

      // Call the function to fetch comments
      fetchComments();
    }
  }, [incidentId, token]);


  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  };

  const sendComment = async (e) => {
    e.preventDefault();


    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Adjust content type if needed
    };

    const payload2 = {
      "incident_id": incidentId,
      "sender_id": user.id,
      "post": message
    };
    try {
      const res1 = await api.post2(
        `${BASE_URL}/incident/indicent-comments`,
        payload2,
        headers
      );
      if (res1) {
        setComments((prevComments) => [...prevComments, res1.data]);
        setMessage('');
      }


    } catch (error) {
      console.error(error);
    }
  };


  return (
    <CommentsWrapper>
      <div className="contain">
        <div className="chat-wrapper d-flex gap-lg-3 gap-2">
          <Input
            placeholder="Add comment"
            value={message}
            onChange={handleMessageChange}
          />
          <div>
            <Button className="btn" onClick={sendComment}>send</Button>
          </div>
        </div>

        {comments?.map((comment, index) => (
          <>
            <div
              className={
                comment?.reply ? `chat-wrapper multi-reply` : `chat-wrapper`
              }
              key={index}
            >
              <div className="chat">
                <div className="chat-header">
                  <h5>@{comment?.sender?.first_name} {comment?.sender?.last_name}</h5>{' '}
                  <div className="time">{formatTimestamp(comment?.created_at)}</div>
                </div>

                <div className="details">
                  <p className="col">{comment?.post}</p>
                  {/* <div className="share col-auto">
                  <button>{ReplyIcon}</button>
                </div> */}
                </div>


              </div>
            </div>
          </>
        ))}

        {/* <div className="chat-wrapper">
        

        <div className="chat-wrapper multi-reply">
          <div className="chat">
            <div className="chat-header">
              <h5>@user ID</h5> <div className="time">8:57am</div>
            </div>

            <div className="details">
              <p className="col">
                This is not acceptable! this is a total fraud! I won’t accept
                it, i can never accept it! We should take some actions ASAP!
              </p>
              <div className="share col-auto">
                <button>{ReplyIcon}</button>
              </div>
            </div>

            <div className="chat reply">
              <div className="chat-header">
                <h5>@user ID</h5> <div className="time">8:57am</div>
              </div>

              <div className="details">
                <p className="col">
                  This is not acceptable! this is a total fraud! I won’t accept
                  it, i can never accept it! We should take some actions ASAP!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-wrapper">
          <div className="chat">
            <div className="chat-header">
              <h5>@user ID</h5> <div className="time">8:57am</div>
            </div>

            <div className="details">
              <p className="col">
                This is not acceptable! this is a total fraud! I won’t accept
                it, i can never accept it! We should take some actions ASAP!
              </p>
              <div className="share col-auto">
                <button>{ReplyIcon}</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </CommentsWrapper >
  );
}
