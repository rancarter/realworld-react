import React from "react";

import { getTags} from "../../services/articleClient";

interface Props {
  onClick: (tagName: string) => void;
}

function PopularTags({ onClick }: Props) {
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    getTags().then(setTags);
  }, []);

  return (
    <div className="tag-list">
      {tags.map(tag => (
        <a
          key={tag}
          href=""
          className="tag-pill tag-default"
          onClick={event => {
            event.preventDefault();
            onClick(tag);
          }}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}

export default PopularTags;
