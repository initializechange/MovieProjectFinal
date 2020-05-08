import React, { useEffect, useState } from "react";

export default function LargerMovieCard(props) {
  const ratings = props.movieInfo["Ratings"];
  return (
    <div className="flex flex-col container shadow cardWidth items-center p-6 hover:shadow-lg">
      <div className=" flex flex-row items-center">
        <div className="flex flex-col mr-10">
          <h1 className="text-2xl font-bold mb-2">
            {props.movieInfo["Title"]}
          </h1>
          <h2 className="text-sm text-gray-800">{props.movieInfo["Year"]}</h2>
          <h2 className="text-sm text-gray-600">
            Director: {props.movieInfo["Director"]}
          </h2>
        </div>
        <div>
          <img className="w-24 h-22 shadow" src={props.movieInfo["Poster"]} />
        </div>
      </div>
      {renderRatings()}

      <div className="flex flex-col mt-4 w-full">
        <h1 className="font-bold">Movie Introduction</h1>
        <h1 className="text-gray-700 mt-2">{props.movieInfo["Plot"]}</h1>
        <h1 className="font-bold mt-4">Actors</h1>
        <h1 className="text-gray-700 mt-2">{props.movieInfo["Actors"]}</h1>
        <h1 className="font-bold mt-4">Awards</h1>
        <h1 className="text-gray-700 mt-2">{props.movieInfo["Awards"]}</h1>
      </div>
    </div>
  );

  function renderRatings() {
    if (ratings !== undefined) {
      return (
        <div className="flex flex-row mt-4 w-full">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[0] !== undefined ? ratings[0]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[0] !== undefined ? ratings[0]["Value"] : <div />}
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[1] !== undefined ? ratings[1]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[1] !== undefined ? ratings[1]["Value"] : <div />}
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[2] !== undefined ? ratings[2]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[2] !== undefined ? ratings[2]["Value"] : <div />}
            </h2>
          </div>
        </div>
      );
    }
  }
}
