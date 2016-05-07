import './reviews.scss';
import InlineSVG from 'svg-inline-react';

const facebook = require("../../../assets/facebook.svg");

class UserProfile extends React.Component {

	shortReviewContent(review) {
		return "\"" + review.substring(0, 60) + "...\"";
	}

	render() {
		const {
			reputation,
			current_shop
		} = this.props;

		// find the select index
		let selectedIndex = reputation.toJS().findIndex(obj => obj.name == current_shop)
		
		// if we can't find it, set it to 0 (the first shop)
		if(selectedIndex === -1) {
			selectedIndex = 0;
		}

		let reviews = reputation.getIn([selectedIndex, "reviews"])

		/**
		 * No reviews screen
		 */
		if(typeof reviews == "undefined") {
			return (
				<div className="reviews">
					<div className="no-reviews">
						No reviews.
					</div>
				</div>
			)
		}

		/**
		 * Show reviews screen
		 */
		return (
			<div className="reviews">
				<hgroup>
					<h2>Reviews</h2>
					<h3>({reputation.getIn([selectedIndex, "total_reviews"])}+)</h3>
				</hgroup>

				<ul className="reviews-list">
					{reviews.map((review, index) => {
						if (index >= 3) {
							return;
						}

						return (
							<li key={index}>
								<i className="circle"></i> {this.shortReviewContent(review.get("review_content"))}
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

export default UserProfile;