import React from 'react';

import apiclient, { TagsResponse } from '../../services/apiClient'; 
import useFetch from '../../hooks/useFetch';

type Props = {
  onClick: (tagName: string) => void,
}

const PopularTags: React.FC<Props> = ({ onClick }) => {
  const { data } = useFetch<TagsResponse>(apiclient.tags.list);

  if (!data) {
    return null;
  }
  
  return (
    <div className="tag-list">
      {data.tags.map(tag => (
        <a
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