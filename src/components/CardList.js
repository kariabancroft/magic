import React from 'react';
import axios from 'axios';
import './CardList.css'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroller'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  loadCards = (page) => {
    axios.get(process.env.REACT_APP_API_URL, {
      params: {
        type: 'creature',
        orderBy: 'name',
        pageSize: 20,
        page: page
      }
    })
      .then((response) => {
        const updatedResults = this.state.results.concat(response.data.cards)
        this.setState({results: updatedResults})
      })
      .catch((error) => {
        this.setState({error: 'Error has occurred. ' + error})
      })
  }

  render() {
    const loader = <img className='loading' alt='loading indicator'
      src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' />

    const cards = this.state.results.map((card, index) => {
      return <Card key={index}
        img={card.imageUrl}
        artist={card.artist}
        name={card.name}
        originalType={card.type}
        setName={card.setName} />
    })

    let err;
    if (this.state.error) {
      err = <div className='error'>{this.state.error}</div>
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadCards}
        hasMore={true}
        loader={loader}>

        <div className='card-list'>
          {err}
          {cards}
        </div>
      </InfiniteScroll>
    )  
  }
}

export default CardList;
