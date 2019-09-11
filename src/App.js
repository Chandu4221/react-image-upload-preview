import React, { Component } from 'react';
import ImageUpload from './components/ImageUpload';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // axios.get(URL).then(res => this.setState({ posts: res.data }));
  }
  render() {
    return (
      <div className="App">
        <ImageUpload></ImageUpload>
      </div>
    );
  }
}

export default App;
