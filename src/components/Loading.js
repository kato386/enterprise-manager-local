import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full bg-purple-400">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2  border-gray-900 rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-40 h-40 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
