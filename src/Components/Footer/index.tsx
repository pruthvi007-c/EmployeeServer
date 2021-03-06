import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { CNG_DES } from "Constant";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}.
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    CNG TESTING
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {CNG_DES}
                </Typography>
                <Typography variant="body1">welcome</Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
