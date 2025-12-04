import React from "react";
import "./sharedWindow.css";

export default function SharedWindow({ title, children, onClose }) {
  return (
    <div className="win-overlay">
      <div className="win-container">
        <div className="win-titlebar">
          <span>{title}</span>
          <button className="win-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="win-toolbar">
          <div className="tb-right">
            <select className="tb-select">
              <option>Vistas</option>
            </select>

            <input className="tb-search" />
            <div className="tb-search-icon"></div>
          </div>
        </div>

        <div className="win-body">{children}</div>
      </div>
    </div>
  );
}
