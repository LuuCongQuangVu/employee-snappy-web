import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '~/store/actions';

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({ login }, dispatch) });

function withUser(WrappedComponent) {
  class WithUser extends React.Component {
    render() {
      const { actions } = this.props;

      return <WrappedComponent {...actions} />;
    }
  }

  WithUser.displayName = `WithUser(${getDisplayName(WrappedComponent)})`;
  return connect(mapStateToProps, mapDispatchToProps)(WithUser);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withUser;
