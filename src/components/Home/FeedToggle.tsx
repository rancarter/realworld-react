import React from "react";
import classNames from "classnames";

import { useAuth } from "../../context/authContext";

interface Props {
  tab: string | null;
  tag: string | null;
  onTabClick: (tabName: string) => void;
}

const FeedToggle: React.FC<Props> = ({ tab, tag, onTabClick }) => {
  const { isAuthorized } = useAuth();

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isAuthorized && (
          <li className="nav-item">
            <a
              href=""
              className={classNames("nav-link", { active: tab === "your" })}
              onClick={event => {
                event.preventDefault();
                onTabClick("your");
              }}
            >
              Your Feed
            </a>
          </li>
        )}

        <li className="nav-item">
          <a
            href=""
            className={classNames("nav-link", { active: tab === "general" })}
            onClick={event => {
              event.preventDefault();
              onTabClick("general");
            }}
          >
            Global Feed
          </a>
        </li>
        {tag && (
          <li className="nav-item">
            <a href="" className="nav-link active">
              #{tag}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggle;
