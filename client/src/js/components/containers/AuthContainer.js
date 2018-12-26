import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { Redirect } from 'react-router-dom';
import { showLoginModal, closeLoginModal } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      username: state.app.username,
    }),
    {
      showLoginModal,
      closeLoginModal,
    },
  ),
  pure,
);

export default enhancer(
  ({ username, showLoginModal, closeLoginModal, children }) => (
    <React.Fragment>
      {username ? children : <Redirect to="/login" />}
    </React.Fragment>
  ),
);
