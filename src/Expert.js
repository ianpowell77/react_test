import React, { Component } from 'react';

class Expert extends Component {
  	render() {
	    return (
	    	<button onClick={this.props.start}>Expert</button>
	    );
  	}
}

export default Expert;