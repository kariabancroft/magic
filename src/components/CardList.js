import React from 'react';
import axios from 'axios';
import './CardList.css'
import Card from './Card'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      loading: true
    }
  }

  loadCards() {
    const apiParams = '?type=creature&orderBy=name&pageSize=20'
    axios.get(process.env.REACT_APP_API_URL + apiParams)
      .then((response) => {
        this.setState({results: response.data.cards})
      })
      .catch((error) => {
        this.setState({error: "Error has occurred"})
      })
      .then(() => {
        this.setState({loading: false})
      })
  }

  componentDidMount() {
    this.loadCards()
  }

  render() {
    let data;

    if (this.state.loading) {
      data = <img className='loading' alt='loading indicator'
        src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />
    } else {
      data = this.state.results.map((card, index) => {
        return <Card key={index}
          img={card.imageUrl}
          artist={card.artist}
          name={card.name}
          originalType={card.type}
          setName={card.setName} />
      })
    }

    return (
      <div className='card-list'>
        {data}
      </div>
    )
  }
}

export default CardList;
