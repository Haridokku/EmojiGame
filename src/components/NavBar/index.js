import './index.css'

const NavBar = props => {
  const {score, topScore, isGameRunning} = props
  return (
    <nav className="nav-container">
      <div className="nav-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="head">Emoji Game</h1>
      </div>
      <div className="nav-footer">
        {isGameRunning ? <p className="describe">Score: {score}</p> : ''}
        {isGameRunning ? <p className="describe">Top Score: {topScore}</p> : ''}
      </div>
    </nav>
  )
}

export default NavBar

  /*const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
} */
