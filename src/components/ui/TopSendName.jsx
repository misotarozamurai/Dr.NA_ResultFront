import React, { Component } from 'react'
import { connect } from 'react-redux'
// ----- config -----
import { INPUT_NAME, BUTTON_SEND } from 'config/text'
// ----- JSX -----
import { inputSendName } from 'redux/actions'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class TopSendName extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', disabled: true};
  }

  updataInput = input => {
    this.setState({ input, disabled: input.trim() ? false : true });
  };

  handleSendName = (event) => {    
    this.props.inputSendName(this.state.input.trim());
    this.setState({input: ''});
    this.props.transition();
    event.preventDefault();
  };
  
  render() {
    return (
      <form onSubmit={this.handleSendName} className={Style.from_name}>
        <label htmlFor='name' className={Style.label_name}>
          {INPUT_NAME.label}
          <input 
            type='text'
            id='name'
            placeholder={INPUT_NAME.placeholder}
            onChange={e => this.updataInput(e.target.value)}
            value={this.state.name}
            className={Style.input_name}
          />
        </label>
        <input 
          type='submit'
          className={Style.send_name}
          disabled={this.state.disabled}
          value= {BUTTON_SEND}
        />
      </form>
    );
  }
}

export default connect(null, {inputSendName})(TopSendName);