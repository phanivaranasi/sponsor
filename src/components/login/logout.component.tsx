import * as React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OpenAuthStore from '../store/login';

type LoginProps =
    OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators

class OpenLogout extends React.Component<LoginProps>
{
    constructor(props:LoginProps){
        super(props);
        this.props.logout();
    }

    render() {
        return (
            <div>
               <Redirect to="/login"></Redirect>
            </div>
        )
    }
}

export default connect(
    (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
    (OpenLogout);