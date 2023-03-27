import React from "react";
import useFetchParam from "../api/useFetchParam";
import Context from "./Context";
import Loading from "./Loading";
const Search = () => {
  const { data: names, isPending, error } = useFetchParam("enterpriseArray");

  return (
    <div className="intro">
      {error && (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <div className="container flex z-20 absolute items-center h-full justify-center">
            <h4 className="text-white text-4xl">
              {error}. Make sure server is online.
            </h4>
          </div>
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}
      {!error && !isPending && <Context names={names.content} />}
    </div>
  );
};

export default Search;
