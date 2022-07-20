import { useState, useEffect } from "react";
import GiphyList from "./GiphyList";

const GiphyBar = (props) => {
  const [giphys, setGiphys] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=zgG3H9AdbBtyzu2lNV6RaZJZwW1LXL0L&limit=8&rating=g"
    )
      .then((res) => res.json())
      .then((json) => setGiphys(json.data));
  }, []);

  return (
    <div className="giphy-bar">{giphys && <GiphyList giphys={giphys} />}</div>
  );
};

export default GiphyBar;
