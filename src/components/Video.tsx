import { Popular } from "./Popular";
import { New } from "./New";

interface VideoProps {
  url?: string,
  views: number,
}

export const Video = ({ url, views }: VideoProps) => {
  return (
    <div className="item item-video">
      <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  )
}

export const PopularVideo = Popular(Video);
export const NewVideo = New(Video);
