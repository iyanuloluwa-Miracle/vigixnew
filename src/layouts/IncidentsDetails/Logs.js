import React from 'react';
import { LogsWrapper } from './styles';

const logData = [
  {
    id: 1,
    time: '9:00am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 2,
    time: '9:10am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 3,
    time: '9:20am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 4,
    time: '9:30am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 5,
    time: '9:40am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 6,
    time: '9:50am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 7,
    time: '9:55am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
  {
    id: 8,
    time: '10:05am',
    CommentBy: 'user ID',
    activity: 'assign incident to NPF',
  },
];

export default function Logs() {
  return (
    <LogsWrapper>
      <div className="contain">
        <div className="headers">
          <div className="col-5">
            <h5>Time</h5>
          </div>

          <div className="col">
            <h5 className="">incident Logs</h5>
          </div>
        </div>

        {logData?.map(el => (
          <div className="logged-item">
            <div className="col-5">
              <p className="time">9:00am</p>
            </div>

            <div className="col">
              <p>
                <span className="user-id">@user ID</span> assign incident to NPF
              </p>
            </div>
          </div>
        ))}
      </div>
    </LogsWrapper>
  );
}
