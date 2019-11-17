import React from 'react';

import { getTags, TagsResponse } from '../../services/articleClient'; 
import useFetch from '../../hooks/useFetch';

interface Props {
  onClick: (tagName: string) => void,
}

const PopularTags: React.FC<Props> = ({ onClick }) => {
  const [getTagsFun, { data }] = useFetch<TagsResponse>(getTags);

  React.useEffect(() => {
    getTagsFun();
  }, []);

  if (!data) {
    return null;
  }
  
  return (
    <div className="tag-list">
      {data.tags.map(tag => (
        <a
          key={tag}
          href=""
          className="tag-pill tag-default"
          onClick={(event) => {
            event.preventDefault();
            onClick(tag);
          }}
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

export default PopularTags;