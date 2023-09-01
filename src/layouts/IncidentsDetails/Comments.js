import React, { useState } from 'react';
import { ReplyIcon } from '../../../utility/svg';
import { CommentsWrapper } from './styles';
import { Input } from 'antd';

const chatData = [
  {
    userName: 'danFinn',
    time: '8:57am',
    commentText:
      "This is not acceptable! this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
  },
  {
    userName: 'specterSegun',
    time: '9:57am',
    commentText:
      "This is not acceptable! this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
  },
  {
    userName: 'anthonyMajor',
    time: '10:57am',
    commentText:
      "This is not acceptable! this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
    reply: {
      userName: 'specterSegun',
      time: '11:57am',
      commentText:
        "This is not normal, this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
    },
  },
  {
    userName: 'nelsonSemedo',
    time: '12:57am',
    commentText:
      "This is not acceptable! this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
  },
  {
    userName: 'winnerMartins',
    time: '1:57am',
    commentText:
      "This is not acceptable! this is a total fraud! I won't accept  it, i can never accept it! We should take some actions ASAP!",
  },
];

export default function Comments() {
  const [comments, useComments] = useState(chatData);
  const [commentText, useCommentText] = useState('');

  console.log(commentText);

  return (
    <CommentsWrapper>
      <div className="contain">
        <div className="chat-wrapper d-flex gap-lg-3 gap-2">
          <Input
            placeholder="Add comment"
            onChange={e => useCommentText(e.terget.vale)}
          />
          <div>
            <button className="btn">send</button>
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
                  <h5>@{comment?.userName}</h5>{' '}
                  <div className="time">{comment?.time}</div>
                </div>

                <div className="details">
                  <p className="col">{comment?.commentText}</p>
                  <div className="share col-auto">
                    <button>{ReplyIcon}</button>
                  </div>
                </div>

                {comment?.reply && (
                  <div className="chat reply">
                    <div className="chat-header">
                      <h5>@{comment?.reply?.userName}</h5>{' '}
                      <div className="time">{comment?.reply?.time}</div>
                    </div>

                    <div className="details">
                      <p className="col">{comment?.reply?.commentText}</p>
                    </div>
                  </div>
                )}
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
    </CommentsWrapper>
  );
}
