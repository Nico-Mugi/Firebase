import React from "react"

// Get a reference to the database service
//var database = firebase.database();
var Rebase = require('re-base');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyD37czVcJGMg7Hzrxa9UMVcMEyhzr83Q-8",
  authDomain: "firstprojectfb-4d6e4.firebaseapp.com",
  databaseURL: "https://firstprojectfb-4d6e4.firebaseio.com",
  projectId: "firstprojectfb-4d6e4",
  storageBucket: "firstprojectfb-4d6e4.appspot.com",
  messagingSenderId: "137088614221"
};
var app = firebase.initializeApp(config);
var base = Rebase.createClass(app.database());
                
class Afficher extends React.Components{
	constructor(props){
		super(props);
		this.state = {
			text: '',
		};
	}

	componentWillMount() {
	    const { dispatch } = this.props
	    base.listenTo('en', {
	      context: this,
	      then(copies) {
	        dispatch(this.setState({
	        	text: copies,
	        }))
	      },
	      onFailure(error) {
	        console.log('error', error)
	      }
	    })
	}

	render(){
		return(
			<div>
				<div>{this.state.text}</div>
			</div>
		);
	};
}


export default () => (
	<Afficher/>
);
