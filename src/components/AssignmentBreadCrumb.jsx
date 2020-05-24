import React, { Component } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default class BreadCrumb extends Component {

    render() {
        return (
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs format-typography">
                <Link color="inherit" onClick={this.props.unsetSemProp}>
                    {this.props.currSem}
                </Link>
                <Link color="inherit" onClick={this.props.unsetSubjectProp}>
                    {this.props.currSub}
                </Link>
                <Link color="inherit" onClick={this.props.unsetClassProp}>
                    {this.props.currClass}
                </Link>
                <Link color="inherit" onClick={this.props.unsetAssignmentProp}>
                    {this.props.currAssign}
                </Link>
            </Breadcrumbs>
        )
    }
}
