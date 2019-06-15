import React from 'react';

import Banner from './Banner';
import FeedToggle from './FeedToggle';
import Feed from './Feed';
import Sidebar from './Sidebar';

const Home = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <FeedToggle />
          <Feed />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
);

export default Home;