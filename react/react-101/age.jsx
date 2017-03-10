
function calculate(){

}

// class Calculator extends React.Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {}
// 	}
// }

function Year(props){
	return(
		<p>{props.age}</p>
	)
}

var Calculator = React.createClass({

	getInitialState: function() {
		return{
			value: 2016
		}
	},

	handleChange: function(event){
		// BAD!! We want a re-render
		// this.state.value = event.target.value;
		this.setState({
			value: (2016 - event.target.value)
		})
	},

	render: function(){
		var age = calculate();
		return(
			
			<form>
				<input type="text" placeholder="Birthyear" onChange={this.handleChange} />
				<Year age={this.state.value} />
			</form>

		)
	}
});

ReactDOM.render(
	<Calculator />,
	document.getElementById('age-calc')
)
