import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


import {connect} from 'react-redux';
import {fetchSmurfs, addSmurf, deleteSmurf} from '../actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',

  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  // handers

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    const {name, age, height} = this.state;
    e.preventDefault();

    // must fill in ALL fields !!!
    if(name && age && height) {
      this.props.addSmurf({name, age, height});
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }

  };

  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  render() {
    return (

      <div
        style={{
          backgroundImage: "url(http://www.digitaltrends.com/wp-content/uploads/2011/02/smurfs-village-ipad-game.jpg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '90%',
          margin: "5px auto",
          position: "absolute",
          zIndex : "-1",

        }}>
        >

        <form onSubmit = {this.handleSubmit}>
          <div className = "smurfFormInputs">
            <input
              value = {this.state.name}
              name = "name"
              type = "text"
              placeholder = "name"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.age}
              name = "age"
              type = "text"
              placeholder = "age"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.height}
              name = "height"
              type = "text"
              placeholder = "height"
              onChange={this.handleChange}
            />
          </div>
          <div className = "buttonContainer">
            <button>Add NEW Smurf !!! </button>

          </div>


        </form>







        <div className="smurfContainer">
          <h2>SMURFS with REDUX !!!</h2>
          {this.props.smurfs.map( (smurf, index) => (
            <div
              className = "smurfItem"
              key = {index}
            >
              <h4> {smurf.name}</h4>
              <h4> {smurf.age}</h4>
              <h4> {smurf.height}</h4>
              <button
                onClick = { e => this.handleDelete(e, smurf.id)}
              > Delete the smurf with that id </button>


            </div>






          ))}
        </div>

      </div>

    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error,

});


export default connect(mapStateToProps, {fetchSmurfs, addSmurf, deleteSmurf})(App);


/*
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
};
 */