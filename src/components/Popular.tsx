import React from "react";

export interface NewProps {
  url?: string,
  title?: string,
  views: number,
}

export const Popular = (Component: React.FC<NewProps>) => {
  const NewComponent = (props: NewProps) => {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        <Component views={props.views} url={props.url} title={props.title} />
      </div>
    )
  }
  return NewComponent;
}
