import * as React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OpenAuthStore from '../store/login';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



type LoginProps =
    OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators

const logo = {
    width:'22em'
}
class OpenLogin extends React.Component<LoginProps> {


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to={this.props.redirectTo} />
        }
        return (
            <div className="row club-logo">
                <div className="col d-flex mt-5 justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <img src="/src/assets/Logo_Smart.png" style={logo} />
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-calendar"></i>
                                </span>
                                <span className="p-float-label">
                                    <InputText id="inputgroup" type="text" />
                                    <label htmlFor="inputgroup">Event ID</label>
                                </span>
                                <Button onClick={() => this.props.login()} 
                                icon="icofont-ui-lock" 
                                iconPos="right" label="GO"></Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(
    (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
    (OpenLogin);