/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojis: [], isGameRunning: true}

  displayEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojis = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="app-content">
        {shuffledEmojis.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            changeEmoji={this.changeEmoji}
          />
        ))}
      </ul>
    )
  }

  playGameAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({score: 0})
    this.setState({clickedEmojis: []})
    this.setState({isGameRunning: true})
  }

  changeEmoji = id => {
    const {clickedEmojis} = this.state
    const checking = clickedEmojis.every(each => each !== id)

    if (checking) {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isGameRunning: false})
    }
  }

  render() {
    const {score, topScore, isGameRunning} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        {isGameRunning ? (
          this.displayEmojis()
        ) : (
          <WinOrLoseCard score={score} playGameAgain={this.playGameAgain} />
        )}
      </div>
    )
  }
}
export default EmojiGame
