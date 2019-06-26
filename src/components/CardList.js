import React from 'react';
import axios from 'axios';
import './CardList.css'
import Card from './Card'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      loading: true,
      page: 0
    }
  }

  loadCards() {
    const pageNum = (this.state.page + 1)
    const apiParams = '?type=creature&orderBy=name&pageSize=20&page=' + pageNum
    axios.get(process.env.REACT_APP_API_URL + apiParams)
      .then((response) => {
        this.setState({results: response.data.cards, page: pageNum})
      })
      .catch((error) => {
        this.setState({error: 'Error has occurred. ' + error})
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

    let err;
    if (this.state.error) {
      err = <div className='error'>{this.state.error}</div>
    }

    return (
      <div className='card-list'>
        {err}
        {data}
      </div>
    )
  }
}

export default CardList;
