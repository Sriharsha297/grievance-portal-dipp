import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {withStyles, TextField,Button,CssBaseline,Typography,Paper} from "@material-ui/core";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.state = {
            isAuthorised: false,
        }
    }
    handleLoginSubmit(e) {
        e.preventDefault();
        const username = e.target.elements.username.value.trim();
        const password = e.target.elements.password.value.trim();
        if(username == 'dipp' && password == '123'){
           
            setTimeout(()=>{
                this.setState({ isAuthorised: true })
            },1000)}
            // this.setState({ isAuthorised: true })

            // axios.post('/officer/login',loginObj)
            //     .then((response) => {
            //         if(response.data.status === 500){
            //             throw new Error(response.message);
            //         }
            //         console.log(response.data.official);
            //         localStorage.setItem('jwt',response.data.jwt)
            //         localStorage.setItem('fullName',response.data.official.fullName);
            //         localStorage.setItem('email',response.data.official.email);
            //         localStorage.setItem('districtName',response.data.official.districtName);
            //         localStorage.setItem('zoneName',response.data.official.zoneName);
            //         localStorage.setItem('phoneNumber',response.data.official.phoneNumber)
            //         this.props.dispatch(login(response.data.official));
            //     }).catch((e) => {
            //         console.log(`Error : ${e}`);
            //     });
        
    }
    render(){
        const { classes } = this.props;
        if (this.state.isAuthorised) {
            return <Redirect to="/ministry/home" />
        }
        return(
            <div className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper} elevation={8}>
                <form className={classes.form} onSubmit={this.handleLoginSubmit}>
                    <Typography color='primary' component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <TextField
                        label="Username"
                        className={classes.textField}
                        id="username"
                        placeholder="Enter Your PhoneNumber here"
                        type="text"
                        inputProps={{ minLength: 1 }}
                        margin="normal"
                        variant="outlined"
                        required={true}
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        className={classes.textField}
                        type="password"
                        id="password"
                        inputProps={{ minLength: 2 }}
                        fullWidth
                        placeholder="Enter Your Password here"
                        margin="normal"
                        variant="outlined"
                        required={true}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </div>
        )
    }
}


Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);