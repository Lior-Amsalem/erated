import * as constants from './constants';
import {initialData, changeShop} from './actions';
import Widget from './widget';

const mapStateToProps = (state) => {
	return {
		widget: state.get('widget'),
		error: state.get('error'),
		current_shop: state.get('current_shop')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onInitialData: () => {
			dispatch(initialData());
		},
		onChangeShop: (name) => {
			dispatch(changeShop(name));
		}
	}
}

const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Widget);

export default Container;