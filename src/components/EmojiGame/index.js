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
    const {clickedEmojis, score} = this.state
    const checking = clickedEmojis.every(each => each !== id)
    if (checking) {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({isGameRunning: false})
    }
    if (score === 11) {
      this.setState({isGameRunning: false})
    }
  }

  render() {
    const {score, topScore, isGameRunning} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameRunning={isGameRunning} />
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

/*
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
*/
