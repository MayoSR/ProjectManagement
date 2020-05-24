import React, { Component } from 'react'
import AssignmentNav from './components/AssignmentNav'
import CreateReview from './components/CreateReview'
import ProgressCharts from './components/ProgressCharts'
// import TopBottomProgress from './components/TopBottomProgress'
// import AssignToClasses from './components/AssignToClasses'
import ProjectData from './components/ProjectData'
import QnA from './components/QnA'
import ReviewDates from './components/ReviewDates'
import TableComponent from './components/TableComponent'
import "./css/TeacherDashboard.css"
import Reminders from './components/Reminders'

class TeacherDashboard extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="nav-spacer" id="left-nav">
                    <AssignmentNav />
                    <CreateReview />
                    <Reminders />
                </div>
                <div className="nav-spacer" id="mid-nav-1">
                    {/* <InnerNavbar />
                    <div className="nav-spacer" id="sub-mid-nav">
                    <TopBottomProgress />
                </div> */}
                    <ProjectData />
                    <div className="nav-spacer" id="sub-mid-nav">
                        <QnA />
                        <ProgressCharts />
                    </div>
                </div>
                <div className="nav-spacer" id="right-nav">
                    <ReviewDates />
                    <TableComponent />
                    {/* <AssignToClasses /> */}
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
