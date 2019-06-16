import React from 'react';

type Props = {
  onClick: (tagName: string) => void,
}

const PopularTags: React.FC<Props> = ({ onClick }) => (
  <div className="tag-list">
    <a
      href=""
      className="tag-pill tag-default"
      onClick={(event) => {
        event.preventDefault();
        onClick('programming');
      }}
    >programming</a>
  </div>
);

export default PopularTags;