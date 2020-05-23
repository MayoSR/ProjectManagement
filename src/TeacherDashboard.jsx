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

class TeacherDashboard extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="nav-spacer" id="left-nav">
                    <AssignmentNav />
                    <CreateReview />
                    <TableComponent />
                </div>
                <div className="nav-spacer" id="mid-nav-1">
                    {/* <InnerNavbar />
                    <div className="nav-spacer" id="sub-mid-nav">
                    <TopBottomProgress />
                </div> */}
                    <ProjectData />
                    <QnA />
                </div>
                <div className="nav-spacer" id="right-nav">
                    <ProgressCharts />
                    {/* <AssignToClasses /> */}
                    <ReviewDates />
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;
