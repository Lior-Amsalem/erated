import Index from './index';

/**
 * Render messages list
 */
ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={Index}></ReactRouter.Route>
    </ReactRouter.Router>,
    document.getElementById('erated_plugin')
);

