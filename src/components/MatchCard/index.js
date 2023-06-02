import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const competingTeamLogo = eachItem.competing_team_logo
  const competingTeam = eachItem.competing_team
  const {result} = eachItem
  const matchStatus = eachItem.match_status

  const matchStatusStyling = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li>
      <div className="match-result-card">
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusStyling}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
