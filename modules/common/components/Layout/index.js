import React from "react";
import { makeStyles, } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  content: {
    marginTop: 74,
  }
});

const Layout = ({ children }) => {
  const classes = useStyles()

  retun (
    <React.Fragment>
      <div className={classes.content}>
          {children}
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Layout;