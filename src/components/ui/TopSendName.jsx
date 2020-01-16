import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INPUT_NAME } from 'config/text'
import { inputSendName } from 'redux/actions'

class TopSendName extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', disabled: true};
  }

  updataInput = input => {
    this.setState({ input, disabled: input ? false : true });
  };

  handleSendName = () => {    
    this.props.inputSendName(this.state.input);
    this.setState({input: ''});
    this.props.transition();
  };
  
  render() {
    return (
      <div className='nmae_form'>
        <label htmlFor='name'>
          {INPUT_NAME.label}
          <input 
            type='text'
            id='name'
            placeholder={INPUT_NAME.placeholder}
            onChange={e => this.updataInput(e.target.value)}
            value={this.state.name}
          />
        </label>
        <button className='send_name' onClick={(this.handleSendName)} disabled={this.state.disabled}>
          Send name
        </button>
      </div>
    );
  }
}

export default connect(null, {inputSendName})(TopSendName);