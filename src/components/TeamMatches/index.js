import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {data: [], matchDetails: [], recentMatch: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches

    const updatedData = {
      teamBannerUrl,
      recentMatches,
    }

    this.setState({
      data: updatedData,
      matchDetails: latestMatchDetails,
      recentMatch: recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {data, matchDetails, recentMatch, isLoading} = this.state
    const {teamBannerUrl} = data

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="team-banner-container">
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <h1 className="latest-matches">Latest Matches</h1>
            <LatestMatch
              latestMatchDetails={matchDetails}
              key={matchDetails.id}
            />
            <ul className="match-result-container">
              {recentMatch.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
