import { IList } from "../App";
import { NewVideo, Video, PopularVideo } from "./Video";
import { NewArticle, Article, PopularArticle } from "./Article";


interface ListProps {
  list: IList[];
}

export const List = ({list}: ListProps) => {

  return (
    <>
      {list.map(item => 
        item.views < 100 ? (
          item.type === 'video' && item.url ?
            <NewVideo key={crypto.randomUUID()} url={item.url} views={item.views} />
          : item.type === 'article' && item.title ?
            <NewArticle key={crypto.randomUUID()} title={item.title} views={item.views} /> : '')
        
        : item.views > 1000 ? (
          item.type === 'video' && item.url ?
            <PopularVideo key={crypto.randomUUID()} url={item.url} views={item.views} />
          : item.type === 'article' && item.title ?
            <PopularArticle key={crypto.randomUUID()} title={item.title} views={item.views} /> : '')
      
        : (
          item.type === 'video' && item.url ?
            <Video key={crypto.randomUUID()} url={item.url} views={item.views} />
          : item.type === 'article' && item.title ?
            <Article key={crypto.randomUUID()} title={item.title} views={item.views} /> : '')
      )}
    </>
  )
}
