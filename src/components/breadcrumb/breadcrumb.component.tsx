import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OpenAuthStore from '../store/login';

type LoginProps =
    OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators

const RenderBreadcrumb = (props: any) => {
    if (props.LoggedUser === 'admin') {
        return <div className="bg-light mb-2">BreadCrumb</div>
    }
    else
        return null;
}

class Breadcrumb extends React.Component<LoginProps> {

    constructor(props: LoginProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <RenderBreadcrumb LoggedUser={this.props.userName} />
            </div>
        )
    }
}

export default connect(
    (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
    (Breadcrumb);