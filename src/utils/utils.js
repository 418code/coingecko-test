import fbLogo from '../images/fb.webp';
import redditLogo from '../images/reddit.webp';
import twitterLogo from '../images/twitter.webp';

const socialLogos = {
  facebook_url: fbLogo,
  reddit_url: redditLogo,
  twitter_handle: twitterLogo,
};

const infoHuman = {
  trust_score_rank: 'Trust rank',
  year_established: 'Year established',
  country: 'Country',
};

const infoHumanMain = {
  trust_score_rank: 'Trust rank',
  url: 'URL',
  country: 'Country',
};

const apiConfig = {
  baseUrl: 'https://api.coingecko.com/api/v3/',
  appJSONType: 'application/json',
};

const checkUrl = (url) => {
  const expr =
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
  const urlRegex = new RegExp(expr);
  return url.match(urlRegex);
};

export { apiConfig, socialLogos, infoHuman, infoHumanMain, checkUrl };
