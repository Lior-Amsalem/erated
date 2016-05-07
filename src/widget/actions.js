import * as constants from './constants';

// if action/ajax doesn't work - use this stub (replace "data" in "initialData")
const stub = {"data":{"uid":7412,"first_name":"Tracy","last_name":"Yamamoto","display_name":"Tracy Yamamoto","location":"San Francisco, California","work":"","profile_image_link":"http://graph.facebook.com/736911634/picture","social_information":{"facebook":{"connections":250,"positions":[],"education":[],"languages":[]},"facebook_pages":{},"twitter":{}},"widget_settings":{"use_facebook_pages":false,"show_work":true,"show_location":true,"location":null,"work":null,"display_name":null,"profile_image":null,"show_social_icons":null},"total_rating":99.8307952622673,"number_of_ratings":591,"number_of_reviews":591,"relevant_reputation":[{"name":"etsy","logo":null,"reviews":[{"review_content":"I feel bad leaving a mediocre review, but I feel others should know the quality is so-so. The card case is ok, but definitely not worth $40. The case itself seems pretty cheap quality, and the clasp seems flimsy. It wouldn't surprise me if it stops clasping tightly after 6-12 months of use, but time will tell. The order and delivery process were flawless.","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"neutral"},{"review_content":"Received item today beautiful workmanship! Very pleased. Speedy delivery . Grandson will be very pleased . Thank you , Maureen Cenci","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Beautiful Tie Bar!  Great quality!","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Very nice quality.  Thank you.","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"I bought these for my baseball-loving nephew to wear as a junior groomsman in our wedding. They were absolutely perfect! ","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"I love the cuff links \nThey are better than expected and the ultimate gift for \"the real Clint Eastwood fan\"   Love this artist !!!","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Fantastic pin!  The seller was so nice to work with - very responsive and the product is top notch!  I will be a repeat customer for sure :-)","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"My husband LOVES this tie clip!","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Great quality product. Arrived quickly and had beautiful packaging.","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"So many friends have asked where I got this. I love it!! It's of much greater quality than I even expected. And it was delivered so quickly!","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Beautiful item, lovely packaging, and prompt shipping. Can't wait to see my favorite guy wearing this in the show ring with our retriever!","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"},{"review_content":"Really cute!! but i do wish it would have stayed on the ties longer and not slip - says my fiance.   He wore it for his white coat ceremony and had many compliments.  Thank you so much!! ","marketplace_name":"etsy","reviewed_as_seller":1,"review_type":"positive"}],"total_reviews":587,"score":100.0},{"name":"supermarket","logo":null,"reviews":[{"review_content":"Thanks for your interest.","marketplace_name":"supermarket","reviewed_as_seller":null,"review_type":"positive"},{"review_content":"A pleasure to do business with. Thanks!","marketplace_name":"supermarket","reviewed_as_seller":null,"review_type":"negative"},{"review_content":"Excellent Buyer!!! Great Communication!! Fast, Easy Transaction!! Thanks again!!","marketplace_name":"supermarket","reviewed_as_seller":null,"review_type":"positive"},{"review_content":"Super Fast Payment! Smooth Transaction! Great eBayer! A Seller's Dream!!!","marketplace_name":"supermarket","reviewed_as_seller":null,"review_type":"positive"}],"total_reviews":4,"score":75.0,"characteristics":[]}],"services":[{"service":{"provider":"relendo","expired":false}},{"service":{"provider":"facebook","expired":true}},{"service":{"provider":"supermarket","expired":false}},{"service":{"provider":"etsy","expired":false}}],"platform_widget_settings":{"localisation_override":{"see_my_reputation":"Buyer HEADER","increase_my_reputation":"SELLER HEADER"}}},"success":true,"update_reviews":true};

/**
 * Load the initial data - "data" can be replced with "stub.data"
 * @param  {[object]} data [data that comes from api]
 * @return {[object]}      [return the data that comes and pass it with type into the reducer]
 */
export function initialData(data) {
	return {
		type: constants.INITIAL_DATA,
		data: data.data,
		error: data.error
	}
}

export function loadData() {
	return function(dispatch) {
		/**
		 * params:
		 * cc87162430f15560ac9e06792fde384f0f1e2042
		 * bf2ec2098ca8bc146be3eb3fcaab5b53b69075cf
		 * 6b33bfcb6db8091ba96d129327c6b7780129ee1e
		 */
		let url = "http://api.erated.co/v1/users/bf2ec2098ca8bc146be3eb3fcaab5b53b69075cf?partner=12341234&mode=marketplaces";		

		return fetch(url, {
			method: "get",
			credentials: "same-origin"
		})
		.then(response => response.json())
		.then(json => {
			dispatch(initialData(json))
		})
	}
}

/**
 * update which shop name is the current
 * @param  {[string]} name [name of one of the shops that is current]
 * @return {[object]}      [pass the name to the reducer with type]
 */
export function changeShop(name) {
	return {
		type: constants.CHANGE_SHOP,
		name: name
	}
}