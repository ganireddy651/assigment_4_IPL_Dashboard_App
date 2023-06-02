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
      <div className="container">
        <div className="sub-container">
          <div>
            <p className="team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result-of-match">{result}</p>
          </div>
          <div className="image-container-ipl">
            <img
              className="ipl-team-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
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
    </div>
  )
}

export default LatestMatch
