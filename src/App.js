import React from 'react';
import Navbar from './components/Navbar'
import TeacherDashboard from './TeacherDashboard';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <TeacherDashboard />
    </div>
  );
}

export default App;
