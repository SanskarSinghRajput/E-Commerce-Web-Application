import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforsanskarsingh9999@gmail.com">
        <Button>Contact: sanskarsingh9999@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
