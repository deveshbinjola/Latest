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

export default function LatestBlogSection() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
          <div className={classes.title}>
            <h2>Latest Blog Posts</h2>

        </div>
        <div id="images">
          <br />
          <GridContainer>
            <GridItem xs={12} sm={6} lg={4}
            >
                <a href="/iceland">
            <img
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                  src={require("assets/img/Photos/smoky_1.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">5 Days in Iceland</h4>
            </a>
             

            </GridItem>
            <GridItem xs={12} sm={6} lg={4} className={classes.marginLeft}>
            <a href="/switzerland">             
            <img
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                  src={require("assets/img/Photos/8.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">3 Days in Switzerland</h4>
            </a>

            </GridItem>
            <GridItem xs={12} sm={6} lg={4} className={classes.marginLeft}>
            <a href="/paris">
            <img
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                  src={require("assets/img/Photos/paris.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">Weekend in Paris</h4>
              </a>
            </GridItem>
           
          </GridContainer>
          <GridContainer />
        </div>
        {/* <div className={classes.space50} /> */}
      </div>
  );
}
