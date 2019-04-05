import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeListenings = this.onChangeListenings.bind(this);
    this.onChangeLikes = this.onChangeLikes.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Title: '',
      Duration: '',
      Listenings:'',
      Likes:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/track/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                Title: response.data.Title, 
                Duration: response.data.Duration,
                Listenings: response.data.Listenings,
                Likes: response.data.Likes
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeTitle(e) {
    this.setState({
      Title: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      Duration: e.target.value
    })  
  }
  onChangeListenings(e) {
    this.setState({
      Listenings: e.target.value
    })
  }

  onChangeLikes(e) {
    this.setState({
      Likes: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Title: this.state.Title,
      Duration: this.state.Duration,
      Listenings: this.state.Listenings,
      Likes: this.state.Likes

    };
    axios.post('http://localhost:4000/track/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Track</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Duration: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Duration}
                      onChange={this.onChangeDuration}
                      />
                </div>
                <div className="form-group">
                    <label>Listenings: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Listenings}
                      onChange={this.onChangeListenings}
                      />
                </div>
                <div className="form-group">
                    <label>Likes: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Likes}
                      onChange={this.onChangeLikes}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Track" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}