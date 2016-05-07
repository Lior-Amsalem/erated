import './storeSummary.scss';
const star = require("../../../assets/star.png");

class StoreSummary extends React.Component {

	/**
	 * Convert score to rating
	 * @param  {[int]} name [number between 0-100]
	 * @return {[int]}      [return calculated score 0-5]
	 */
	convToRating(score) {
		let rating = Math.round((score/20) * 10)/10;

		if (isNaN(rating)) {
			return 0;
		}

		return rating;
	}

	render() {

		// extract data from 'props'
		const {
			reputation,
			current_shop
		} = this.props;

		/**
		 * print only the current_shop or the first one, without itrate on all of them
		 */
		
		// find the select index
		let selectedIndex = reputation.toJS().findIndex(obj => obj.name == current_shop)
		
		// if we can't find it, set it to 0 (the first shop)
		if(selectedIndex === -1) {
			selectedIndex = 0;
		}

		let score = reputation.getIn([selectedIndex, "score"]);
		
		let rating = this.convToRating(score);

		return (
			<div className="store-summary">
				<div className="rating">
					<span className="num">{rating}</span>
					<span className="stars-wrapper">
						<span className="stars-fill" style={{width: score+"%"}}></span>

						<img src={star} className="star" alt="star" />
						<img src={star} className="star" alt="star" />
						<img src={star} className="star" alt="star" />
						<img src={star} className="star" alt="star" />
						<img src={star} className="star" alt="star" />
					</span>
				</div>

				<div className="transcations">
					Number of transcations made: 3421
				</div>

				<div className="bars">
					<div className="row">
						<span className="label">Item as described</span>
						<span className="bar">
							<span className="fill-3">3/5</span>
						</span>
					</div>
					<div className="row">
						<span className="label">Communication</span>
						<span className="bar">
							<span className="fill-5">5/5</span>
						</span>
					</div>
					<div className="row">
						<span className="label">Delivery</span>
						<span className="bar">
							<span className="fill-2">2/5</span>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default StoreSummary;