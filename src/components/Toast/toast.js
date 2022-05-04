import React, { useEffect, useState } from "react";
import "./toast.css";

const Toast = ({ position, title, description, icon, color }) => {
  return (
    <div className={`notification-container ${position}`}>
      <div className={`notification toast ${position}`} style={color}>
        <button>X</button>
        <div className="notification-image">
          <img src={icon} alt="" />
        </div>
        <div>
          <p className="notification-title">{title}</p>
          <p className="notification-message">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
