import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Row, Col} from 'reactstrap'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import './Tabs.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "70%",
    height: '82vh',
    margin: 'auto',
    paddingTop:'50px',
    paddingBottom:'50px',
    '& img':{
      width:'auto',
      height:'50%'
    },
    '& h2':{
      marginBottom:'30px'
    },
    '& .MuiTypography-body1':{
      height: '60vh',
      overflowY: 'hidden'
    }
    
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root} id='presentation'>
      <h2>Brief Presentation</h2>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Row>
            <Col >
              <img src={Project1} alt=""/>
            </Col>
            <Col >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam vel fugit provident? Enim aliquam consectetur aperiam nobis voluptas saepe deserunt minima quod pariatur quaerat mollitia ratione, temporibus porro ea in perspiciatis vero recusandae quibusdam. Veniam sint architecto sit, nihil optio soluta. Fugiat in veniam cum quis ad quos! Cupiditate, perspiciatis. In ipsa exercitationem doloribus deserunt facere totam voluptatibus iure earum, consequatur tempore quisquam nesciunt a aspernatur, laudantium fugit esse sunt vel placeat est voluptates sed velit. Illo doloribus repellat id corrupti unde vitae quia molestias est facere maxime magni dolore dicta soluta tempora sapiente, voluptate vel hic quidem! Nemo.
            </Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Row>
            <Col >
              <img src={Project2} alt=""/>
            </Col>
            <Col >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam vel fugit provident? Enim aliquam consectetur aperiam nobis voluptas saepe deserunt minima quod pariatur quaerat mollitia ratione, temporibus porro ea in perspiciatis vero recusandae quibusdam. Veniam sint architecto sit, nihil optio soluta. Fugiat in veniam cum quis ad quos! Cupiditate, perspiciatis. In ipsa exercitationem doloribus deserunt facere totam voluptatibus iure earum, consequatur tempore quisquam nesciunt a aspernatur, laudantium fugit esse sunt vel placeat est voluptates sed velit. Illo doloribus repellat id corrupti unde vitae quia molestias est facere maxime magni dolore dicta soluta tempora sapiente, voluptate vel hic quidem! Nemo.
            </Col>
          </Row>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Row>
            <Col >
              <img src={Project1} alt=""/>
            </Col>
            <Col >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam vel fugit provident? Enim aliquam consectetur aperiam nobis voluptas saepe deserunt minima quod pariatur quaerat mollitia ratione, temporibus porro ea in perspiciatis vero recusandae quibusdam. Veniam sint architecto sit, nihil optio soluta. Fugiat in veniam cum quis ad quos! Cupiditate, perspiciatis. In ipsa exercitationem doloribus deserunt facere totam voluptatibus iure earum, consequatur tempore quisquam nesciunt a aspernatur, laudantium fugit esse sunt vel placeat est voluptates sed velit. Illo doloribus repellat id corrupti unde vitae quia molestias est facere maxime magni dolore dicta soluta tempora sapiente, voluptate vel hic quidem! Nemo.
            </Col>
          </Row>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
