import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),

  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(5),

  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "18rem",
    marginTop: '10%',
    flexDirection: 'column',
    width: " 18rem;"
  },
  body: {
    paddingTop: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jamArray: [],
      error: null
    }
  }

  componentDidMount() {

      axios.post('http://localhost:3030/getMyJam',{
        userID: sessionStorage.userID
      })
      .then((res1) => {
          this.setState({
            jamArray: res1.data
          })      
      })
  }

  render() {




// function LandingPage() {
//   const [data, setData] = useState(null);

//   useEffect(async () => {
//     const res1 = await axios.post (
//       'http://localhost:3030/getMyJam', {userID: sessionStorage.userID}
//     );
//     setData(res1.data)
//   }, [data])

  
  const jam3yees = this.state.jamArray
    .map(jam3yee => (
      <div className={classes.root}>
        <Grid item key={jam3yee} sm={8} md={10} >

          <Card >
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {jam3yee.name}
              </Typography>

              <Typography>
                Creator :{jam3yee.ownerName}
              </Typography>

              <Typography>
                Start date :{jam3yee.startDate}
              </Typography>

              <Typography>:
                End Date :{jam3yee.endDate}
              </Typography>

              <Typography>
                Participants :{jam3yee.participants.length}
              </Typography>

              <Typography>
                Monthly Payment :{jam3yee.monthlyPayment}
              </Typography>

            </CardContent>
            <CardActions>
              <Button href={"/jam3yee/" + jam3yee._id} color="primary" variant="outlined">
                View
           </Button>
            </CardActions>
          </Card>
        </Grid>


      </div>

    )
    )
  return (
    <React.Fragment>
  

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {jam3yees}
        </Grid>
      </Grid>
    </React.Fragment>

  )
}
 }

export default LandingPage;