import * as Config from '../../config/config';
import reducers from './reducers';
import WidgetContainer from './container';
import {loadData} from './actions';

// load global style for our widget
import './widget.scss';

let store = Config.configureStore(reducers, Immutable.Map({}));

class Index extends React.Component {

	constructor() {
		super();

		// load initial data
		store.dispatch(loadData());
	}

	render() {
		return (
			<ReactRedux.Provider store={store}>
				<div className="widget-wrapper">
					<WidgetContainer/>
				</div>
			</ReactRedux.Provider>
		)
	}
}

export default Index;