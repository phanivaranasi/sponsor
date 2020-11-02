import * as React from "react";
import CampaignInfo from "../menu/campaignInfo";
import NavMenu from "../menu/navmenu";
import Breadcrumb from '../breadcrumb/breadcrumb.component';

export default (props: { children?: React.ReactNode }) => (
  <div className="container-fluid">
    <CampaignInfo />
    <NavMenu />
    {props.children}
  </div>
);
