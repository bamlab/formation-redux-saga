import React, { Component } from 'react';
// react-redux allows us to easily connect redux and react
import { connect } from 'react-redux';
// React Radio Group
import { RadioGroup, Radio } from 'react-radio-group';


export class QuestionsPage extends Component {
	constructor(props) {
		super(props);
    this.state = {selectedValue: 'apple'};
  }

  handleChange = (value) => {
    this.setState({selectedValue: value});
  }

  render() {
    return (
			<div>
				<h3 className="title">Question {this.props.params.id}</h3>
				<RadioGroup name="answer" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
					<ul>
						<li><label><Radio value="apple" />Apple</label></li>
						<li><label><Radio value="orange" />Orange</label></li>
						<li><label><Radio value="watermelon" />Orange</label></li>
					</ul>
				</RadioGroup>
			</div>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
