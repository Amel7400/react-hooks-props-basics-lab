import React from "react";
import user from "../data/user";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={user.github}>
        {github}
      </a>
      <br />
      <a href={user.linkedin}>
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
