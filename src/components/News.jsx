import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_REQUEST_STATUS } from "../constants";
import { fetchNews } from "../store/news/actions";

export const News = () => {
  const { list, status } = useSelector(state => state.news);
  const dispatch = useDispatch();

  const handleClickReload = () => {
    dispatch(fetchNews());
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (status === NEWS_REQUEST_STATUS.LOADING) {
    return <span>Loading...</span>
  }

  return (
    <React.Fragment>
      <h3>News</h3>
      <List>
        {status !== NEWS_REQUEST_STATUS.ERROR ? list.map(item =>
          <ListItem key={ item.id }>
            <a href={ item.url } target="blanc" className="news-link">
              <ListItemAvatar>
                <Avatar src={ item.imageUrl } alt={ item.title.slice(0, 20) } />
              </ListItemAvatar>
              <ListItemText primary={ item.title } />
            </a>
          </ListItem>
        ) : (
          <>
            <span>Error</span>
            <button onClick={ handleClickReload }>Reload</button>
          </>
        ) }
      </List>
    </React.Fragment>
  );
};
