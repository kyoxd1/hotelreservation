import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

// import logo from "../images/logo"

const Header = () => {
  const [tablet, setTablet] = useState(false);
  const [drowerOpen, setDrowerOpen] = useState(false);
  const classes = useStyle();

  useEffect(()=>{
      const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)

      responsiveness();

      window.addEventListener("resize", ()=>responsiveness())
  },[])

  const displayTablet = () => {
    const handleDrawerOpen = () => {
      setDrowerOpen(true);
    };
    const handleDrawerClose = () => {
      setDrowerOpen(false);
    };
    const headersData = ["My account", "Previous booking", "log out"];
    const getDrawerChoices = () => {
      return headersData.map((data) => {
        return (
          <List>
            <ListItem>{data}</ListItem>
          </List>
        );
      });
    };

    return (
      <Toolbar className={classes.toolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "#ccc",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drowerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <Link to="/">
            <img src="" className={classes.logo} alt="logo" />
        </Link>
        <div className={classes.right}>
          <Typography> Sign in</Typography>
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    );
  };

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
    <Link to="/">
            <img src="" className={classes.logo} alt="logo" />
    </Link>
      <div className={classes.center}>
        <InputBase
          fullWidth
          placeholder="Search here ..."
          inputProps={{ className: classes.input }}
        />
        <SearchIcon className={classes.search} />
      </div>
      <div className={classes.right}>
        <Typography> Sign in</Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );

  return (
    <AppBar className={classes.root}>
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "30px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "2px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "1.2rem",
    padding: theme.spacing(1, 5, 1, 5),
    background: "white",
    borderRadius: "0.5rem",
  },
  search: {
    fill: "gray",
  },
  right: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    color: "#000",
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
