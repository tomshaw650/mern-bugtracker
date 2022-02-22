import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListBug from './ListBug';

class Bug extends Component {
  state = {
    bugs: [],
  };

  componentDidMount() {
    this.getBugs();
  }

  getBugs = () => {
    axios
      .get('/api/bugs')
      .then((res) => {
        if (res.data) {
          this.setState({
            bugs: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteBug = (id) => {
    axios
      .delete(`/api/bugs/${id}`)
      .then((res) => {
        if (res.data) {
          this.getBugs();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { bugs } = this.state;

    return (
      <div>
        <h1>Bug Tracker</h1>
        <Input getBugs={this.getBugs} />    
        <ListBug bugs={bugs} deleteBug={this.deleteBug} />
      </div>
    );
  }
}

export default Bug;