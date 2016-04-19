import React from 'react';
import {Link,browserHistory}  from 'react-router';

export default React.createClass({
	render(){
		return(
			<div>
				<h1>Main</h1>
				<Link to = "/">Home</Link>
				<Link to = "/second">Second Page</Link>
			</div>

			);
	}
});

