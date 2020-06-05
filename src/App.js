import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import { fetchApi } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fetchedData = await fetchApi();
    
    this.setState({
      data: fetchedData
    })
    
  }

  handleChangeCountry = async (country) => {
    const fetchedData = await fetchApi(country);
    console.log(fetchedData)
    this.setState({
      country: country,
      data: fetchedData
    })
  }

  render() {

    const {data, country} = this.state
    
    return (
      <div className="container" style={{overflow:"hidden"}}>
        <CountryPicker handleChangeCountry={this.handleChangeCountry}/>
        <Cards data={data} />
        <Charts data={data} country={country}/>
      </div>
    )
  }
}

export default App