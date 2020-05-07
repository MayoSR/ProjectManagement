import React, { Component } from 'react'
import "./css/TeacherDashboard.css"
import BreadCrumb from './components/BreadCrumb'
import CreateProject from './components/CreateProject'
import RecentProjects from './components/RecentProjects'

class TeacherDashboard extends Component {
    render() {
        return (
            <div className="box-container">
                <div id="left-nav">
                    <BreadCrumb />
                    <CreateProject />
                    <RecentProjects />
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
