import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    redirectPath: state.redirectPath
  };
};

export default connect(mapStateToProps, null);
