import UserProfile from './userProfile/userProfile';
import Menu from "./menu/menu";
import StoreSummary from "./storeSummary/storeSummary";
import Reviews from "./reviews/reviews";

let loading = require("../../assets/ajax-loader.gif");

class Widget extends React.Component {

	render() {

		const {
			widget,
			onChangeShop,
			current_shop,
			error
		} = this.props;

		/**
		 * display "loading" screen
		 */
		if(!widget && !error) {
			return (
				<div>
					<div className="strip"></div>
					<div  className="loading">
						<img src={loading} className="animation" alt="icon" /> Loading data...
					</div>
				</div>
			)
		}

		/**
		 * display "error" screen
		 */
		if(error) {
			return (
				<div>
					<div className="strip"></div>
					<div  className="no-data">
						Not data found.
					</div>
				</div>
			)
		}

		/**
		 * Load the widget components
		 */
		return (
			<div>
				<div className="strip"></div>
				
				<UserProfile total_rating={widget.get("total_rating")}
					social_information={widget.get("social_information")}
					display_name={widget.get("display_name")}
					profile_image_link={widget.get("profile_image_link")}/>
				

				<div className="menu-rating-wrapper">
					<Menu reputation={widget.get("relevant_reputation")}
						onChangeShop={onChangeShop}
						current_shop={current_shop} />

					<StoreSummary reputation={widget.get("relevant_reputation")}
						current_shop={current_shop}/>
				</div>

				<Reviews reputation={widget.get("relevant_reputation")}
					current_shop={current_shop} />
			</div>
		)
	}
}

export default Widget;