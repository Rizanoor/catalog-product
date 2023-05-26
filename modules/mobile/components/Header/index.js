import React from "react";
import Link from 'next/link';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import {MenuIcon} from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="fixed" >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon/>
            </IconButton>

            <Link href="/">
              <Typography variant="h6">
                  weCommerce
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div> 
  )
}

export default Header;