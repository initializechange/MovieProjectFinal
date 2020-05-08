import React, { useEffect, useState } from "react";
import LargerMovieCard from "../components/LargerMovieCard";
import { useQueryParams } from "hookrouter";
export default function DetailScreen(props) {
  const [queryParams, setQueryParams] = useQueryParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://www.omdbapi.com/?apikey=63004f46&i=" + queryParams["imdbID"],
      true
    );
    req.send();
    req.onload = function() {
      var json = JSON.parse(req.responseText);
      setMovieInfo(json);
      console.log(json);
    };
  }, []);

  return (
    <div className="flex flex-row justify-center w-screen">
      <LargerMovieCard movieInfo={movieInfo} />
    </div>
  );
}
