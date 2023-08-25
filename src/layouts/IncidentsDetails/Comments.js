import React from 'react';
import { ReplyIcon } from '../../../utility/svg';
import { CommentsWrapper } from './styles';

export default function Comments() {
  return (
    <CommentsWrapper>
      <div className="contain">
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
        </div>

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
        </div>
      </div>
    </CommentsWrapper>
  );
}
