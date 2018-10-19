import { connect } from 'react-redux';
import { triggerLoadingSaga } from '../../actions';


const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (data) => dispatch(triggerLoadingSaga())
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
