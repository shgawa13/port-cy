import React from 'react';

function SmoothScrollLink(props) {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.offsetTop;

    // Add a delay of 300ms before scrolling to the target element
    setTimeout(() => {
      window.scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }, 300);
  };

  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default SmoothScrollLink;
