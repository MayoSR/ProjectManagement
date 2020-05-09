import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import ProjectData from './ProjectData';
import QnA from './QnA';
import TableComponent from './TableComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius:"4px",
    },
}));

export default function InnerNavbar() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Paper elevation={3} className="paper-margin">
            <div className={classes.root}>
                <AppBar position="static" color="default" className="inner-app-bar">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="#fff"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        style = {{backgroundColor : "#3f51b5",color:"#fff",borderTopLeftRadius:"4px",borderTopRightRadius:"4px"}}
                    >
                        <Tab label="Assignment" {...a11yProps(0)} />
                        <Tab label="Doubts" {...a11yProps(1)} />
                        {/* <Tab label="Progress Report" {...a11yProps(2)} /> */}
                        <Tab label="Team Progress" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ProjectData />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <QnA />
                    </TabPanel>
                    {/* <TabPanel value={value} index={2} dir={theme.direction}>
                        <ProgressCharts />
                    </TabPanel> */}
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <TableComponent />
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Paper>
    );
}