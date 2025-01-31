import React from "react";
import "./NotFound.module.scss";
import notFoundImg from "./../../assets/error.jpg";

export default function NotFound() {
  return (
    <>
      <div className="sm:ml-60 min-h-svh">
        <img src={notFoundImg} className="w-full" alt="Not Found!" />
      </div>
    </>
  );
}
