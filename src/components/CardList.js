import React from 'react';
import axios from 'axios';
import './CardList.css'

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
        console.log(response.data.cards);
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
    const cards = this.state.results.map((card) => {
      return card.name
    })

    return (
      <div className='card-list'>
        {cards}
      </div>
    )
  }
}

export default CardList;
