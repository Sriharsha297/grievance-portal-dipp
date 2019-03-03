import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {Button,withStyles,Typography,CardContent,CardActions,Grid,Card} from "@material-ui/core";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";

const styles = theme => ({
    pos: {
        marginTop: 12,
      },
      card: {
        minWidth: 280,
        margin: theme.spacing.unit * 1,
        padding: theme.spacing.unit ,
        color: theme.palette.text.primary,
      },
})


class Rti extends React.Component{
    constructor(props){
        super(props);
        this.state={
            references:[],
        }
    }

    componentDidMount() {
      
        axios.get(`https://grievance-portal-server-1.herokuapp.com/api/dippOfficial/rtiGrievances`)
          .then((response) => {
            console.log(response.data.references)
                this.setState({references:response.data.references})
          })
          .catch((error)=>{
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data.message);
              console.log(error.response.status);
              //this.setState({error:error.response.data.message,open:true});
          }
          console.log(`Error : ${error}`);
          });
     }
    render(){
        const {classes} = this.props;
        return(
            <div>
            <Button
                className={classes.backButton}
                onClick={() => {window.history.back()}}
                variant="text" 
                >
                <ArrowBackSharp/>
            </Button>
            <Grid container spacing={32} justify='center'>
            {
              this.state.references.map((reference, index) => (
                <Grid item xs={12} sm={6} md={5} lg={5} >
                <Card className={classes.card} elevation={6}>
                  <CardContent>
                    <Typography variant="overline" >
                      Grievance Id: {reference.token}
                    </Typography>
                    <Typography variant="overline" >
                      Username: {reference.fullName}
                    </Typography>
                    <Typography variant="overline" >
                      Officier Name: {reference.officerName}
                    </Typography>
                    <Typography color='secondary' variant="overline" >
                      Department: {reference.department}
                    </Typography>
                    <Typography variant="overline" >
                      Role: {reference.role}
                    </Typography>
                    <Typography variant="overline" >
                      Officier Email: {reference.officerEmail}
                    </Typography>
                    <Typography variant="overline" >
                      Officier Phone: {reference.officerPhone}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Description:
                    </Typography>
                    <Typography component="p">
                      {reference.description.substring(0,40)}
                  <br />
                    </Typography>
                  </CardContent>
                  <CardActions>

                  </CardActions>
                </Card>
                </Grid>
              ))
            }
            </Grid>
            </div>
        )
    }
}

Rti.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rti);