import * as React from "react";

import NavMenu from "../menu/navmenu";
import Breadcrumb from '../breadcrumb/breadcrumb.component';

export default (props: { children?: React.ReactNode }) => (
  <div>
    <NavMenu />
    <Breadcrumb />
    {props.children}
  </div>
);
