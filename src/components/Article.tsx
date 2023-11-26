import { New } from "./New";
import { Popular } from "./Popular";

interface ArticleProps {
  title?: string,
  views: number,
}

export const Article = ({ title, views }: ArticleProps) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  )
}

export const PopularArticle = Popular(Article);
export const NewArticle = New(Article);
