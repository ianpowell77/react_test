import React, { Component } from 'react';

class Standard extends Component {
  	render() {
    	return (
      		<button onClick={this.props.start}>Standard</button>
    	);
  }
}

export default Standard;