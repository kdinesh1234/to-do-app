import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length === 1 ? `${length} list item` : `${length} list items`}
    </footer>
  );
};

export default Footer;