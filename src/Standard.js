import React, { Component } from 'react';

class Standard extends Component {
  	render() {
    	return (
      		<button className="standard-btn" onClick={this.props.start}>Standard</button>
    	);
  }
}

export default Standard;