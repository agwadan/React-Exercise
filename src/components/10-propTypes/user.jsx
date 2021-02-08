import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login, avatar_url }) => {
  return (

    <article style={{ background: '#ffffd1', marginBottom: '5px' }}>
      <h4>{login}</h4>
      <img
        src={avatar_url}
        alt={login}
        className='img-rounded'
        height='150'
        width='130'
        style={{ marginBottom: '12px' }}
      />
    </article>

  );
};


/* proptypes helps point out when one of the objects is missing a value */
User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
}

/* A solution for the above problem could be to set default values as below. */
User.defaultProps = {
  login: "mojombo",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mojombo",
  html_url: "https://github.com/mojombo",
  followers_url: "https://api.github.com/users/mojombo/followers",
  following_url: "https://api.github.com/users/mojombo/following{/other_user}",
  gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
  starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
  organizations_url: "https://api.github.com/users/mojombo/orgs",
  repos_url: "https://api.github.com/users/mojombo/repos",
  events_url: "https://api.github.com/users/mojombo/events{/privacy}",
  received_events_url: "https://api.github.com/users/mojombo/received_events",
  type: "User",
  site_admin: false
}

export default User;