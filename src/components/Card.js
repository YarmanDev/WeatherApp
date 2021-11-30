import React from "react";

export default function Card({ style, children, className }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
