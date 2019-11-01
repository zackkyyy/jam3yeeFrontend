import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class ResturantPage extends React.Component {

  //Setting default states in the constructor.
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    this.state = {
        JamObj: "",
        navMenu: "",
        participants : [],
        reviewText: "",
        rating: "",
      }
    console.log('id is' + id)
    Promise.all([
      axios.get("http://localhost:3030/getJam/id/" + id)
    ])
      .then((result) => {
        this.setState({
          JamObj: result[0].data,
          participants : result[0].data.participants
        })
      })
  }
 
  render() {       
    const par = this.state.participants.map(participant =>(
        <li>
            {participant.name}
        </li>
    ))

    return (
      <React.Fragment>
        {this.state.navMenu}
        <h1>{this.state.JamObj.name}</h1>

        <div className="resturantBody">
          <hr />
          <p>Owner: {this.state.JamObj.name}</p>
          <p>start Date: {this.state.JamObj.startDate}</p>
          <p>End Date: {this.state.JamObj.endDate}</p>
          <p>amount: {this.state.JamObj.monthlyPayment}</p>
       
          <hr />
          <div>
           
          <Typography>
               Participants
           </Typography>
           <ul>
            {par}
            </ul>
          </div>
           
          <hr />
        </div>
      </React.Fragment>
    )
  }
}
export default ResturantPage;