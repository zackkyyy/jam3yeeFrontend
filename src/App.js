import React, { Component } from 'react';
import './App.css';
import LoginPage from './containers/LoginPage/LoginPage';
import SignupPage from './containers/SignupPage/SignupPage';
import CreateJam from './containers/createJam/CreateJam';
import NavBar from './components/NavBar'
import Dashboard from './containers/MyJams/MyJams'
import Jame3yeePage from './containers/Jam3yeePage/Jam3yeePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    
    <Router>
      <NavBar />  
       <Switch>
      
       <Route path="/login">
       <LoginPage />
      </Route> 

      <Route path="/signup">
       <SignupPage />
      </Route> 
        
        { !sessionStorage.loggedIn && 
          <Route exact path="/" component={LoginPage} />
        }
        { sessionStorage.loggedIn && 
          <Route exact path="/" component={Dashboard} />
        }
          <Route path={"/jam3yee/:id"} 
              render={(props) =><Jame3yeePage {...props}/>}
           />

       <Route path="/createJam">
       <CreateJam />
      </Route>
       
       </Switch>
  
      </Router>
  );
}
}




export default App;



// import React, { Component } from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './App.css';

// import NavbarComponent from './components/NavbarComponent/NavbarComponent';
// import LandingPage from './containers/LandingPage/LandingPage';
// import UserPage from './containers/UserPage/UserPage';
// import LoginPage from './containers/LoginPage/LoginPage';
// import SignuPage from './containers/SignupPage/SignupPage';
// import ResturantPage from './containers/ResturantPage/ResturantPage';
// import ResturantsPage from './containers/ResturantsPage/ResturantsPage';

// import UserUpdatePage from './containers/UserUpdatePage/UserUpdatePage';

// import AddResturantsPage from './containers/AddResturantsPage';
// import SearchPage from './containers/SearchPage/SearchPage';
// import About from "./containers/Creators"


// class App extends Component {
//   render() {
//       return (
//           <Router>
//             <NavbarComponent />
//                 <Switch>
//                   <Route path="/user"
//                   render={() =><UserPage roleid={sessionStorage.role} userid={sessionStorage.userID}></UserPage> }
//                   >
//                   </Route>
//                   <Route path="/login">
//                       <LoginPage />
//                   </Route>
//                   <Route path="/signup">
//                       <SignuPage />
//                   </Route>
//                   <Route path={"/resturant/:id"} 
//                         render={(props) =><ResturantPage {...props}/>}
//                     />
//                   <Route path="/resturants">
//                       <ResturantsPage />
//                   </Route>
//                   <Route path="/about">
//                       <About />
//                   </Route>
//                   <Route path="/userupdate">
//                       <UserUpdatePage />
//                   </Route>
//                   <Route path="/addRestaurant">
//                       <AddResturantsPage />
//                   </Route>
//                   <Route path={"/search/:keyword"} 
//                         render={(props) =><SearchPage {...props}/>}
//                     />
//                   <Route path="/">
//                       <LandingPage/>
//                   </Route>
//                 </Switch>
//           </Router>
//       );
//   }
// }

// export default App;


