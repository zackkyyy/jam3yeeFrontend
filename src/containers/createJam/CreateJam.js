import React from "react";
import "./CreateJam.css";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


class CreateJamForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Owner: sessionStorage.username,
      amount: "",
      participants: [{ name: "" }],
      //startDate : ""
      startDate: new Date()
    };

  }

 
  handleChangeOfDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleAmountChange = evt => {
    this.setState({ amount: evt.target.value });
  };

  handleparicipantNameChange = idx => evt => {
    const newparticipants = this.state.participants.map((paricipant, sidx) => {
      if (idx !== sidx) return paricipant;
      return { ...paricipant, name: evt.target.value };
    });

    this.setState({ participants: newparticipants });
  };

  handleSubmit = evt => {
    const {startDate,  amount, participants } = this.state;

    axios.post('http://localhost:3030/createJam', {
        ownerName : sessionStorage.username,
        startDate : startDate,
        participants : participants,
        amount: amount,
        ownerID: sessionStorage.userID
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      });
  
      evt.preventDefault();

  };

  handleAddparicipant = () => {
    this.setState({
      participants: this.state.participants.concat([{ name: "" }])
    });
  };

  handleRemoveparicipant = idx => () => {
    this.setState({
      participants: this.state.participants.filter((s, sidx) => idx !== sidx)
    });
  };
    
  handleDateChange = date =>()=> {
    this.setSelectedDate(date);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="amount"
          value={this.state.name}
          onChange={this.handleAmountChange}
        />


        <div>
            
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChangeOfDate}
      />
        </div>
        
        <h4>participants</h4>

        {this.state.participants.map((paricipant, idx) => (
          <div className="paricipant">
            <input
              type="text"
              placeholder={`paricipant #${idx + 1} name`}
              value={paricipant.name}
              onChange={this.handleparicipantNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveparicipant(idx)}
              className="small"
            >
              -
            </button>
          </div>
    
        ))}
        <button
          type="button"
          onClick={this.handleAddparicipant}
          className="small"
        >
          Add paricipant
        </button>
        <button>Simulate</button>
      </form>
    );
  }
}


export default CreateJamForm