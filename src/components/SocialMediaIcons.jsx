import React from "react";
const SocialMediaIcons = () => {
  return (
    <div className="social-media">
      <ul className="list-inline">
        <li>
          <a href="#" className="color-facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="color-instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#" className="color-twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="color-youtube">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="color-pinterest">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
