
import React, { PropTypes } from 'react';

function UserDetails({ score, info }) {
  return (
    <div>
      {!!score && <li><h3>Score: {score}</h3></li>}
      <li> <img src={info.avatar_url} alt="Avatar" /></li>
      {info.name && <li>Name: {info.name}</li>}
      <li>Username: {info.login}</li>
      {info.location && <li>Location: {info.location}</li>}
      {info.company && <li>Company: {info.company}</li>}
      <li>Followers: {info.followers}</li>
      <li>Following: {info.following}</li>
      <li>Public Repos: {info.public_repos}</li>
      {info.blog && <li>Blog: <a href={info.blog}> {info.blog}</a></li>}
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number.isRequired,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserDetails;
