import React, { useState, useEffect } from "react";

const Badge = () => {
  const [message, setMessage] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       setMessage(message + 1);
  //     }, 3000);
  //   }, [message]);

  return (
    <>
      <div>Badge</div>
      <h3>Buttons</h3>
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge bg-secondary">{message}</span>
      </button>
      <p></p>
      <h3>Positioned</h3>
      <button type="button" className="btn btn-primary position-relative">
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {message}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
      <p></p>
      <button type="button" className="btn btn-primary position-relative">
        Profile
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <p></p>
      <button
        onClick={() => {
          setMessage(message + 1);
        }}
      >
        text
      </button>
    </>
  );
};

export default Badge;
