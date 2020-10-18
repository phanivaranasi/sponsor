import * as React from "react";
import { Route } from "react-router";
import Layout from "../components/layout/layout";
import Logout from "../components/login/logout.component";
import OpenLogin from "../components/login/login.component";
import PatientList from "../components/patient-primary/parient-list";
import OpenDashboard from "../components/dashboard/dashboard.component";
import GuardedRoute from '../utils/ui.secure';
import { Store } from "redux";
import { connect } from 'react-redux';
import { ApplicationState } from './store';
import * as OpenAuthStore from './store/login';
export interface HelloWorldProps {
  userName: string;
  lang: string;
  store: any;
}

type LoginProps =
  OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators


class App extends React.PureComponent<LoginProps, {}>{
  constructor(props: LoginProps) {
    super(props);
  }
  render() {
    let isAuthUser = this.props.isAuthenticated;
    return (
      
      < div className="container-fluid" >
        <Layout>
          <GuardedRoute isAuthenticated={isAuthUser} exact path="/dashboard" component={OpenDashboard} />
          <GuardedRoute isAuthenticated={isAuthUser} path="/patient" component={PatientList} />
          <GuardedRoute isAuthenticated={isAuthUser} path="/logout" component={Logout} />
          <Route path="/login" exact component={OpenLogin} />
          <Route path="/" exact component={OpenLogin} />
        </Layout>
      </div >
    )
  }
}

export default connect(
  (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
  (App);
