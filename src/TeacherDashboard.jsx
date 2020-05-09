import React, { Component } from 'react'
import "./css/TeacherDashboard.css"
import AssignmentNav from './components/AssignmentNav'
import CreateProject from './components/CreateProject'
import InnerNavbar from './components/InnerNavbar'
import AssignToClasses from './components/AssignToClasses'
import ProgressCharts from './components/ProgressCharts'

class TeacherDashboard extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="nav-spacer" id="left-nav">
                    <AssignmentNav />
                    <CreateProject />
                    <ProgressCharts />
                </div>
                <div className="nav-spacer" id="mid-nav-1">
                    <InnerNavbar />
                </div>
                <div className="nav-spacer" id="right-nav">
                    <AssignToClasses />
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
