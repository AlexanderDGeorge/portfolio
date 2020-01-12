import React from 'react';
import './main.css';

function TextRender(){
  return (
    <div className="text-render">
      <div className="line">
        <h1 className="tag">{"<"}</h1>
        <h1 className="tag-name">ADG</h1>
        <h1 className="tag">{">"}</h1>
      </div>

      <div className="indent">
        <div className="line">
          <h1 className="tag">{"<"}</h1>
          <h1 className="tag-name">h1</h1>
          <h1 className="tag">{">"}</h1>
          <h1 className="line-text">Hi, I'm Alex!</h1>
          <h1 className="tag">{"</"}</h1>
          <h1 className="tag-name">h1</h1>
          <h1 className="tag">{">"}</h1>
        </div>
      </div>

      <div className="indent">
        <div className="line">
          <h1 className="tag">{"<"}</h1>
          <h1 className="tag-name">body</h1>
          <h1 className="tag">{">"}</h1>
        </div>
      </div>

      <div className="double-indent">
        <h1 className="line-text">I build full-stack</h1>
        <h1 className="line-text">web applications.</h1>
      </div>

      <div className="indent">
        <div className="line">
          <h1 className="tag">{"</"}</h1>
          <h1 className="tag-name">body</h1>
          <h1 className="tag">{">"}</h1>
        </div>
      </div>

      <div className="line">
        <h1 className="tag">{"</"}</h1>
        <h1 className="tag-name">ADG</h1>
        <h1 className="tag">{">"}</h1>
      </div>
    </div>
  );
}

export default TextRender;