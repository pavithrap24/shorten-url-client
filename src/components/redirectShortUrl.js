import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function RedirectShortUrl() {
  const [longUrl, setLongUrl] = useState();
  const path = window.location.pathname.substr(1);

  useEffect(() => {
    getLongUrl();
  });

  async function getLongUrl() {
    const response = await fetch(`http://localhost:3000/shortUrl/${path}`, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    const newUrl = await `${jsonData.url}`;
    await setLongUrl(newUrl);
  }

  return <div>{longUrl ? window.location.assign(longUrl) : null}</div>;
}

export default RedirectShortUrl;
