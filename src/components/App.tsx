import * as React from "react";
import { Route } from "react-router";
import Layout from "../components/layout/layout";
import Counter from "../components/login/login.component";
import PatientList from "../components/patient-primary/parient-list";
import OpenDashboard from "../components/dashboard/dashboard.component";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div className="container-fluid">
    <Layout>
      <Route exact path="/" component={OpenDashboard} />
      <Route path="/patient" component={PatientList} />
      <Route path="/dashboard" component={Counter} />
    </Layout>
  </div>
);
