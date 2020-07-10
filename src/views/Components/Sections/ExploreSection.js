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

export default function ExploreSection() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
          <div className={classes.title}>
            <h2>Explore</h2>

        </div>
        <div id="images">
          <br />
          <GridContainer>
            <GridItem xs={12} sm={6} lg={3}
            >
              <img
                               alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                  src={require("assets/img/Photos/paris.jpg")}
                  height='350px'
                  width='300px'
              />
             <h4 className="text-center">Travel Blog</h4>

            </GridItem>
            <GridItem xs={12} sm={6} lg={3} className={classes.marginLeft}>
              <img
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
                src={require("assets/img/Photos/8.jpg")}
                height='350px'
                width='300px'
              />
             <h4 textAlign = 'center'>Hiking</h4>

            </GridItem>
            <GridItem xs={12} sm={6} lg={3} className={classes.marginLeft}>
              <img
               alt="..."
               className={classes.imgRounded + " " + classes.imgFluid}
               src={require("assets/img/Photos/smoky_1.jpg")}
              />
            <h4 className="text-center">Travel Tips</h4>
            </GridItem>
            <GridItem xs={12} sm={6} lg={3} className={classes.marginLeft}>
              <img
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                  src={require("assets/img/Photos/paris.jpg")}
                  height='350px'
                  width='300px'
              />
              <h4 className="text-center">How to travel cheaper, smarter, better?</h4>

            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        {/* <div className={classes.space50} /> */}
      </div>
  );
}
