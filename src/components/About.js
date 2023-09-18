
import React from "react";
import Links from "../components/Links";
import user from "../data/user";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Display the bio if it's provided and not an empty string */}
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin} h3="Links"/>
    </div>
    
  );
}

export default About;
