import { connect } from 'react-redux'
import Result from 'components/pages/Result'

const mapStateToProps = state => {
  const length = state.result.length;
  const currentState = state.result[length - 1];
  return { data: currentState.data.jsonObj };
}

export default connect(mapStateToProps)(Result)