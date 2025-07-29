// import { memo } from "react";
import React from "react";

export const Small = React.memo(({ value }) => {
    console.log('Small component rendered');

  return (
    <small>{ value }</small>
  )
})
