import React from "react";
import user from "../data/user";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={user.links.github}>
        {github}
      </a>
      <br />
      <a href={user.links.linkedin}>
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
