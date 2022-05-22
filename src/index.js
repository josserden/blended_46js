import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { getTopNews } from './js/news-service';
import { getRefs } from './js/getRefs';
const { searchForm, cardList } = getRefs();
import { renderMarkup } from './js/renderMarkup';

getTopNews()
  .then(({ articles }) => renderMarkup(articles, cardList))
  .catch(err => console.error(err));
