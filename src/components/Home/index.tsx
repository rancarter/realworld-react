import React from 'react';

import Banner from './Banner';
import FeedToggle from './FeedToggle';
import ArticleList from './ArticleList';
import PopularTags from './PopularTags';

const Home: React.FC = () => {
  const [tab, setTab] = React.useState<string | null>('general');
  const [tag, setTag] = React.useState<string | null>(null);

  const handleTabClick = (tabName: string) => {
    setTab(tabName);
    setTag(null);
  };

  const handleTagClick = (tagName: string) => {
    setTag(tagName);
    setTab(null);
  };

  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggle
              tab={tab}
              tag={tag}
              onTabClick={handleTabClick}
            />
            <ArticleList tab={tab} />
          </div>
          <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>
            <PopularTags onClick={handleTagClick} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;