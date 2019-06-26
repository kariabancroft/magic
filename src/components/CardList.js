import React from 'react';
import axios from 'axios';
import './CardList.css'
import Card from './Card'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
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
  }

  componentDidMount() {
    this.loadCards()
  }

  render() {
    const cards = this.state.results.map((card, index) => {
      return <Card key={index}
        img={card.imageUrl}
        artist={card.artist}
        name={card.name}
        originalType={card.type}
        setName={card.setName} />
    })

    return (
      <div className='card-list'>
        {cards}
      </div>
    )
  }
}

export default CardList;
