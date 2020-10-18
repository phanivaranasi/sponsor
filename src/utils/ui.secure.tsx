import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ISecureComponent } from '../models'



class GuardedRoute extends Route<ISecureComponent>{
    constructor(props:ISecureComponent){
        super(props);
    }

    render() {
        let redirectPath: string = '';
        if (!this.props.isAuthenticated) {
            redirectPath = "/login";
        }

        if (redirectPath) {
            const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
            return <Route {...this.props} component={renderComponent} render={undefined} />;
        } else {
            return <Route {...this.props} />;
        }
    }
}

export default GuardedRoute;