import React from "react";
import "./Loader.module.scss";
import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#F29724"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        backgroundColor="#F4F2EE"
        wrapperClass="grid-wrapper wrapper-class h-screen flex justify-center items-center"
      />
    </>
  );
}
