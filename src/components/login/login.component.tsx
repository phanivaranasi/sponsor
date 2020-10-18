import * as React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OpenAuthStore from '../store/login';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

type LoginProps =
    OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators

class OpenLogin extends React.Component<LoginProps> {

    render() {
        if(this.props.isAuthenticated){
           return <Redirect to={this.props.redirectTo} />
        }
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">

                        <div className="card-header">
                            Open Patient Management - Gateway
                    </div>
                        <div className="card-body">
                            <div className="col-lg-12 pu-login">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <span className="p-float-label">
                                        <InputText id="inputgroup" type="text" />
                                        <label htmlFor="inputgroup">InputGroup</label>
                                    </span>
                                   
                                </div>
                                <Button onClick={() => this.props.login()} icon="pi pi-user" iconPos="right" label="GO"></Button>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">&copy; 2020. All Rights Reserved  {this.props.userName}</div>
                </div>
            </div >
        )
    }
}

export default connect(
    (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
    (OpenLogin);