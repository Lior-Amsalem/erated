import './userProfile.scss';
import InlineSVG from 'svg-inline-react';

const facebook = require("../../../assets/facebook.svg");
const twitter = require("../../../assets/twitter.svg");
const linkedin = require("../../../assets/linkedin.svg");
const dhgicon = require("../../../assets/dhgicon.png");

class UserProfile extends React.Component {

	render() {
		const {
			display_name,
			social_information,
			total_rating,
			profile_image_link
		} = this.props;

		let fixed_number = parseFloat(total_rating.toFixed(2));
		let facebook_connection = social_information.getIn(["facebook", "connections"]) || "-";
		let linkedin_connection = social_information.getIn(["linkedin", "connections"]) || "-";
		let twitter_connection = social_information.getIn(["twitter", "connections"]) || "-";

		return (
			<div className="user-profile">
				<img src={profile_image_link} className="seller-photo" alt="photo" />
				<div className="rating">
					<span className="number">{fixed_number}%</span>
					<p>Positive</p>
				</div>

				<div className="user-level">
					<img src={dhgicon} alt="icon"/>
				</div>

				<hgroup>
					<h2 className="user-name">{display_name}</h2>
					<h3 className="feedback-rating">{fixed_number}% positive feedback</h3>
				</hgroup>

				<div className="social">
					<ul>
						<li>
							<InlineSVG src={facebook} className="icon" />
							<div className="counter">{facebook_connection}</div>
							<div className="title">Friends</div>
						</li>
						<li>
							<InlineSVG src={linkedin} className="icon" />
							<div className="counter">{linkedin_connection}</div>
							<div className="title">Connection</div>
						</li>
						<li>
							<InlineSVG src={twitter} className="icon" />
							<div className="counter">{twitter_connection}</div>
							<div className="title">Followers</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default UserProfile;