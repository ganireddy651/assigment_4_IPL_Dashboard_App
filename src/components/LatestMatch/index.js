import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const competingTeam = latestMatchDetails.competing_team
  const competingTeamLogo = latestMatchDetails.competing_team_logo
  const {date, result, umpires, venue} = latestMatchDetails
  const firstInnings = latestMatchDetails.first_innings
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  //   const matchStatus = latestMatchDetails.match_status
  const secondInnings = latestMatchDetails.second_innings

  return (
    <div className="latest-match-container">
      <div className="sub-container">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          className="ipl-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="result-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
