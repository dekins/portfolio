import style from './feed.scss'
import React, { Component } from 'react'
import FeedItem from './components/FeedItem/FeedItem.jsx'
import LoadingItem from './components/LoadingItem/LoadingItem.jsx'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad(feedItem) {
    let newState = this.state.loadedItems
    newState.push({ name: feedItem.props.name, imgPath: feedItem.props.imgPath })
    this.setState({ loadedItems: newState })
    this.loadingItem.animate()
  }

  render() {
    return (
      <div className="feed">
        {this.state.loadedItems.map((item, i) =>
          <FeedItem imgPath={item.imgPath} name={item.name} key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem ref={(loadingItem) => this.loadingItem = loadingItem} />
        }
        <div className="feed__loading hidden">
          {this.props.items.map((item, i) =>
            <FeedItem imgPath={item.imgPath} name={item.name} onLoad={this.onLoad} key={i} />
          )}
        </div>
      </div>
    )
  }
}