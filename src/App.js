import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import { fetchApi } from './api';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchApi();
    
    this.setState({
      data: fetchedData
    })
    
  }

  render() {

    const {data} = this.state
    
    return (
      <div className="container" style={{overflow:"hidden"}}>
        <Cards data={data} />
        <Charts />
        <CountryPicker />
      </div>
    )
  }
}

export default App