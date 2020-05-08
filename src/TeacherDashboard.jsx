import React, { Component } from 'react'
import "./css/TeacherDashboard.css"
import BreadCrumb from './components/BreadCrumb'
import CreateProject from './components/CreateProject'
import RecentProjects from './components/RecentProjects'
import OngoingProjects from './components/WorkBench'
import DoubtClarification from './components/DoubtClarification'

class TeacherDashboard extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="nav-spacer" id="left-nav">
                    <BreadCrumb />
                    <CreateProject />
                    <RecentProjects />
                </div>
                <div className="nav-spacer" id="mid-nav">
                    <OngoingProjects />
                    <DoubtClarification />
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
