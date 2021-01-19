import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shortUrl.css";

function ShortUrl() {
  const [url, setUrl] = useState();
  const [showUrl, setShowUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState();

  async function getShortUrl() {
    const response = await fetch("http://localhost:3000/shortUrl/", {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: url,
      }),
    });
    const jsonData = await response.json();
    const newUrl = await `${window.location.host}/${jsonData._id}`;
    await setShortUrl(newUrl);
    await setShowUrl(true);
    console.log("ShowUrl ", newUrl, " showUrl ", showUrl);
  }

  return (
    <div className="shortUrl">
      <input
        className="input"
        type="text"
        name="bigUrl"
        placeholder="Enter the URL"
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button className="button" onClick={getShortUrl}>
        Get Short URL
      </button>
      {showUrl ? <label className="labelTag">{shortUrl}</label> : null}
    </div>
  );
}

export default ShortUrl;
