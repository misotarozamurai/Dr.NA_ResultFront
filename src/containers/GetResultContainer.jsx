import { connect } from 'react-redux'
// ----- JSX -----
import ResultDisplayResult from 'components/ui/ResultDisplayResult'
import { getNameText } from 'redux/selectors/name'

const MapStateToProps = state => {
  const name = getNameText(state);
  const length = state.result.length;
  const current_state = state.result[length - 1];
  return { name: name, data: current_state.data.jsonObj };
}

export default connect(MapStateToProps)(ResultDisplayResult)