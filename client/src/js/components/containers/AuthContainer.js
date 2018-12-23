import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { Redirect } from 'react-router-dom';
import { showLoginModal, closeLoginModal } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      userName: state.message.userName,
    }),
    {
      showLoginModal,
      closeLoginModal,
    },
  ),
  pure,
);

export default enhancer(({ userName, showLoginModal, closeLoginModal, children, match }) => {
  console.log(userName);
  console.log(match);
  return (
    <React.Fragment>
      { userName ? children : <Redirect to={"/login"} /> }
    </React.Fragment>
  )
});
