import React, { Component } from 'react';

class Expert extends Component {
  	render() {
	    return (
	    	<button className="expert-btn" onClick={this.props.start}>Expert</button>
	    );
  	}
}

export default Expert;