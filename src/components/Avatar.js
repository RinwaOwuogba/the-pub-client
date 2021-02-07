import React from "react";
import multiAvatar from "@multiavatar/multiavatar";
import DOMPurify from "dompurify";

const Avatar = ({ name }) => {
  const avatar = DOMPurify.sanitize(multiAvatar(name));

  return (
    <div
      className="w-40 md:w-64 mt-7 md:mt-0 mb-4 max-w-full"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: avatar }}
    />
  );
};

export default Avatar;
