import React from 'react';
import PropTypes from 'prop-types';
import { Redirect as RouterRedirect } from 'react-router-dom';
import {renderIf, exists} from '../../../utils/helpers';

class Redirect extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectUrl(url) {
    if (url.includes('http')) {
      window.location.replace(url);
      return null;
    }
    else {
      return <RouterRedirect to={url} />;
    }
  }

  render() {
    const { redirectPath } = this.props;
    return renderIf(() => exists(redirectPath), () => this.redirectUrl(redirectPath));
  }
}

Redirect.propTypes = {
  redirectPath: PropTypes.string
};

export default Redirect;
