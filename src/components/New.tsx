import React from "react";
import { NewProps } from "./Popular";

export const New = (Component: React.FC<NewProps>) => {
  const NewComponent = (props: NewProps) => {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        <Component views={props.views} url={props.url} title={props.title} />
      </div>
    )
  }
  return NewComponent;
}
