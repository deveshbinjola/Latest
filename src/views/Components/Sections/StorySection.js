import React from "react";
import {Row, Col, Container} from "reactstrap";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { makeStyles } from "@material-ui/core/styles";

import image from "assets/img/faces/avatar.jpg";
const useStyles = makeStyles(styles);

export default function StorySection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>

        <div id="images">
          <br />
          <GridContainer>
            <GridItem xs={6} sm={6} lg={6}
            >
              <img
                               alt="..."
                  className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  src={require("assets/img/Photos/me.jpg")}
                  height='450px'
                  width='400px'
              />

            </GridItem>
            <GridItem xs={6} sm={6} lg={6} className={classes.marginLeft}>
              
             <h1 textAlign = 'center'>Story</h1>

            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        {/* <div className={classes.space50} /> */}
      </div>
    </div>
  );
}
