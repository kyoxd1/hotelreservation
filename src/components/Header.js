import { AppBar, InputBase, makeStyles, Toolbar, Typography, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
// import logo from "../images/logo"

const Header = () => {
    const [mobile, setMobile] = useState(false);
    const classes = useStyle()
    
    const displayMobile = ()=> {}
    const displayDesktop = ()=> (
        <Toolbar className={classes.toolbar}>
            <img src='' className={classes.logo}/>
            <div className={classes.center}>
                <InputBase fullWidth placeholder="Search here ..."
                inputProps={{className: classes.input}} />
                <SearchIcon className={classes.search}/>
            </div>
            <div className={classes.right}>
                <Typography> Sign in</Typography>
                <Avatar className={classes.avatar} />
            </div>
        </Toolbar>
    );

  return (
    <AppBar className= {classes.root}>
        {
            mobile ? displayMobile() : displayDesktop()
        }
    </AppBar>
  );
};

const useStyle = makeStyles((theme)=> ({
    root: {
        position: "sticky",
        top: 0,
        background: 'white',
        zIndex: 99,
        width: '100vw',
    },
    toolbar: {
        display: "flex",
        justifyContent:  "space-between",
        alignItems: "center"
    },
    logo: {
        height: "30px",
        margin: theme.spacing(1,0,0,2),
        objectFit: "contain"
    },
    center:{
        display: 'flex',
        alignItems: 'center',
        border: "2px solid lightgray",
        borderRadius: '999px',
        minWidth: '300px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5),
        background: 'white',
        borderRadius: '0.5rem'
    },
    search:{
        fill: 'gray',
    },
    right:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(2),
        color: '#000'
    },
    avatar: {
        marginLeft: theme.spacing(2)
    }
}))

export default Header;
