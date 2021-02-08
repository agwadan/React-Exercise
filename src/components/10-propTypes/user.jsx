import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login, avatar_url }) => {

  const imgUrl = avatar_url && avatar_url; //---- if it has the image url, return it else... chill

  return (

    <article className='jumbotron' style={
      {
        margin: 'auto',
        marginBottom: '5px',
        width: '50%'
      }}>

      <img
        src={avatar_url || 'https://avatars.githubusercontent.com/u/1?v=4'}
        alt={login}
        className='rounded'
        height='150'
        width='130'
        style={{ marginBottom: '12px' }}
      />
      <h4>{login}</h4>
      <p>This github user is such an awesome person. This github user is such an awesome person. </p>
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