import React, { Component } from 'react'
import "./css/TeacherDashboard.css"
import BreadCrumb from './components/BreadCrumb'
import CreateProject from './components/CreateProject'
import RecentProjects from './components/RecentProjects'
import OngoingProjects from './components/WorkBench'
import DoubtClarification from './components/DoubtClarification'
import AssignmentCompletion from './components/AssignmentCompletion'
import ProgressCharts from './components/ProgressCharts'

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
                <div className="nav-spacer" id="right-nav">
                    <AssignmentCompletion />
                    <ProgressCharts />
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
