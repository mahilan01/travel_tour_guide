import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import logo from "./logo.svg";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      style={{
        position: "static",
        backgroundColor: "#8e24aa",
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          GoTravel <img src={logo} alt="Logo" width={30} height={30} />
          Advisor
        </Typography>

        <Box
          style={{
            display: "flex",
          }}
        >
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search .."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
