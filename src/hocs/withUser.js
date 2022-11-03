import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '~/store/actions';
import { selectUser } from '~/store/selector';

const mapStateToProps = (state) => ({ user: selectUser(state) });
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ login }, dispatch) });

function withUser(WrappedComponent) {
  class WithUser extends React.Component {
    render() {
      const { actions, user } = this.props;

      return <WrappedComponent {...actions} user={user} />;
    }
  }

  // WithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;
  return connect(mapStateToProps, mapDispatchToProps)(WithUser);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withUser;
