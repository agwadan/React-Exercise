import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login, avatar_url }) => {
  return (

    <article>
      <h4>{login}</h4>
      <img src={avatar_url} alt={login} />
    </article>

  );
};


/* proptypes helps point out when one of the objects is missing a value */
User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
}

export default User;