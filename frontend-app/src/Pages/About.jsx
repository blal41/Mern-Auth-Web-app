import React from "react";

function About() {
  return (
    <>
      <h2 className="text-center">About</h2>
      <p className="text-center">
        This is a MERN (MongoDB, Express, React, Node.js) stack application with
        authentication. It allows users to sign up, log in, and log out, and
        provides access to protected routes only for authenticated users. The
        front-end of the application is built with React and uses React Router
        for client-side routing. The back-end is built with Node.js and Express,
        and uses MongoDB as the database. Authentication is implemented using
        JSON Web Tokens (JWT). This application is intended as a starting point
        for building full-stack web applications with authentication using the
        MERN stack. Feel free to use it as a template for your own projects!
      </p>
    </>
  );
}

export default About;
