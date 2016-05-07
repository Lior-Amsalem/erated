import './menu.scss';

class Menu extends React.Component {

	/**
	 * Render img if found or just text
	 * @param  {[string]} name [string text - the name of the shop]
	 * @return {[object]}      [return img or text wrapped with span]
	 */
	renderNameOrIcon(name) {

		// catch the error if the file doesn't exists
		try {
			// require the grey and color icon
			let imggrey = require("../../../assets/" + name + "grey.png");
			let imgcolor = require("../../../assets/" + name + "color.png");
		
			return (
				<div className="icon-wrapper">
					<img src={imggrey} className="grey" alt="icon" />
					<img src={imgcolor} className="color" alt="icon" />
				</div>
			);

		} catch(error) {
			// we don't have image - so print it as text
			return (
				<span className="text-title">{name}</span>
			);
		}
	}

	render() {

		// extract data from 'props'
		const {
			reputation,
			onChangeShop,
			current_shop
		} = this.props;

		// assign to var so we could modify it later
		let selected_shop = current_shop;

		// if it's not set yet, set it to the first item in the list
		if (typeof selected_shop == "undefined") {
			selected_shop = reputation.getIn(["0", "name"])
		}

		// print the menu list via <ul> <li> elements
		return (
			<ul className="shops-list">
				{reputation.map((rep, index) => {

					// set the class selector "selected"
					let cls = (selected_shop == rep.get("name")) ? " selected " : "";
					
					return (
						<li key={index} className={cls} onClick={() => onChangeShop(rep.get("name"))}>
							{this.renderNameOrIcon(rep.get("name"))}
						</li>
					);
				})}
			</ul>
		)
	}
}

export default Menu;