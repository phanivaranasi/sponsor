import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as OpenAuthStore from '../store/login';

type LoginProps =
    OpenAuthStore.ILoginState & typeof OpenAuthStore.actionCreators

const RenderMenu = (props: any) => {
    console.warn(props.LoggedUser,props.IsAuthUser)
    if (props.LoggedUser === 'admin')
        return <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
            <Container>
                <NavbarBrand tag={Link} to="/dashboard">Patient.UI</NavbarBrand>
                <NavbarToggler   className="mr-2"/>
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse"  navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                        
                            <NavLink tag={Link} className="text-dark" to="/dashboard">
                            <i className="pi pi-home"></i> Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/patient">
                            <i className="pi pi-user"></i>Patient Registration</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/fetch-data">
                            <i className="pi pi-calendar"></i>Schedule Patient</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink tag={Link} className="text-dark" to="/fetch-data">
                            <i className="pi pi-question-circle"></i>
                            Support
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink tag={Link} className="text-dark" to="/logout">
                            <i className="pi pi-power-off"></i>Logout
                           
                            </NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Container>
        </Navbar>
    </header>
    else
        return null;
}
 
class NavMenu extends React.PureComponent<LoginProps, { isOpen: boolean }> {
    constructor(props: LoginProps) {
        super(props);
    }
    public state = {
        isOpen: false
    };

    public render() {
        let username = this.props.userName;
        let isAUthUser = this.props.isAuthenticated;
        return (
            <div>
                <RenderMenu IsAuthUser={isAUthUser} LoggedUser={username} />
            </div>
        )
    }
}
export default connect(
    (state: ApplicationState) => state.login, OpenAuthStore.actionCreators)
    (NavMenu);
