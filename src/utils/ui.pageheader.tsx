import * as React from 'react';

export interface IPageHeader {
    pageTitle: string;
    pageSubTitle: string;
    pageIcon: string;
}


class Pageheader extends React.PureComponent<IPageHeader, {}>{

    constructor(props: IPageHeader) {
        super(props);
    }

    render() {
        return (
            <div className="pu-page-header">
                <div className="float-left">
                    <div>
                        <h4>{this.props.pageTitle}</h4>
                        <small>{this.props.pageSubTitle}</small>
                    </div>
                </div>
                <div className="float-right">

                </div>
                <div className="clearfix"></div>
            </div>

        )
    }

}

export default Pageheader;