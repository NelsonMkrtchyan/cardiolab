"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511.2616961898646!2d44.4895145913286!3d40.17914683547393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdabfb60ba8d%3A0x7a9909c62e76eb4d!2s1%2C%202%20Tsitsernakaberd%20Hwy%2C%20Yerevan%200082!5e0!3m2!1sen!2sam!4v1731669766078!5m2!1sen!2sam"
          height="550"
          // width="600"
          // style="border:0;"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
