import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Patient.UI</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                
                                    <NavLink tag={Link} className="text-dark" to="/">
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
                                    <NavLink tag={Link} className="text-dark" to="/fetch-data">
                                    <i className="pi pi-power-off"></i>Logout
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
