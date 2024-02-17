import './index.css'

const WinOrLoseCard = props => {
  const {score, playGameAgain} = props
  const headText = score === 12 ? 'You Won' : 'You Lose'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onPlayGameAgain = () => {
    playGameAgain()
  }
  return (
    <div className="result-container">
      <div className="text-result">
        <h1 className="heading">{headText}</h1>
        <p className="para">{score === 12 ? 'Best Score' : 'Score'}</p>
        <p className="result-value">{score}/12</p>
        <button type="button" className="button" onClick={onPlayGameAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-lose" />
    </div>
  )
}
export default WinOrLoseCard

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
