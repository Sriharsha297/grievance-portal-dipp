import React from "react";
import PropTypes from "prop-types";
import PieChart from "./PieChart";
import BarChart from "./BarGraph"
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles,MenuItem,FormControl,InputLabel,Input, Paper, Grid, Card, CardHeader, CardContent, Typography,Divider, Select } from "@material-ui/core";

const styles = theme => ({
    cardAction: {
        width:'100%',
        display: 'block',
    },
    formControl: {
        margin: theme.spacing.unit*2,
        minWidth: 260,
      },
  })

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            piechart: [],
            cardData:{},
            count:'',
            filter:'',
        }
    }
    handleSelectChange = event => {
        console.log(event.target.value);
        this.setState({ filter: event.target.value });
          axios.get(`https://grievance-portal-server-1.herokuapp.com/api/dippOfficial/districtStats?district=${event.target.value}`)
          .then((response) => {
            console.log(response)     
            this.setState({piechart:response.data.statsArray})
          })
          .catch((error)=>{
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data.message);
              console.log(error.response.status);
            }
          });
    }
    componentDidMount(){
        axios.get("https://grievance-portal-server-1.herokuapp.com/api/dippOfficial/stats")
        .then((response)=>{
            console.log(response.data.stats);
            this.setState({cardData:response.data.stats})
        })
        .catch((error)=>{
            console.log("Error:",error)
        })
        axios.get(`https://grievance-portal-server-1.herokuapp.com/api/dippOfficial/districtStats?district=Hyderabad`)
        .then((response)=>{
            console.log("pie",response.data.statsArray);
            this.setState({piechart:response.data.statsArray,filter: 'Hyderabad'})
            console.log("state",this.state.piechart);
        })
        .catch((error)=>{
            console.log("Error:",error)
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <Grid container  spacing={32} >
                    <Grid item sm={4}>
                    
                        <Card style={{background: 'lightgreen'}} elevation={6}>
                            <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('Grievances Submitted');
                                this.setState({count:'submitted'})
                                this.props.history.push({
                                    pathname: `/ministry/table/submitted`,
                                    state: { count:'submitted' }
                                  })}}
                            >
                            <CardHeader
                                align='center'
                                title="In Submission State"
                            />
                            <Divider/>
                            <CardContent>
                                <Typography variant="h6" align='center'>
                                    {this.state.cardData.submittedCount}
                                </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card style={{background: 'deepskyblue'}} elevation={6} >
                        <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('scrutinizedCount');
                                this.setState({count:'scrutinized'})
                                this.props.history.push({
                                    pathname: `/ministry/table/scrutinizedCount`,
                                    state: { count:'scrutinized' }
                                  })}}
                        >
                            <CardHeader
                                align='center'
                                title="Scrutinized Grievances"
                            />
                            <Divider/>
                            <CardContent>
                                <Typography variant="h6" align='center'>
                                {this.state.cardData.scrutinizedCount}
                                </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card style={{background: 'greenyellow'}} elevation={6}>
                        <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('resolved');
                                this.setState({count:'resolved'})
                                this.props.history.push({
                                    pathname: `/ministry/table/resolvedCount`,
                                    state: { count:'resolved' }
                                  })}}
                            >
                            <CardHeader
                                align='center'
                                title="Resolved Grievances"
                            />
                            <Divider/>
                            <CardContent>
                                <Typography variant="h6" align='center'>
                                    {this.state.cardData.resolvedCount}
                                </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card style={{background: 'orange'}} elevation={6}>
                        <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('rejected');
                                this.setState({count:'rejectedCount'})
                                this.props.history.push({
                                    pathname: `/ministry/table/rejectedCount`,
                                    state: { count:'rejected' }
                                  })}}
                            >
                            <CardHeader
                                align='center'
                                title="Rejected Grievances"
                            />
                            <Divider/>
                            <CardContent>
                            <Typography variant="h6" align='center'>
                                {this.state.cardData.rejectedCount}
                            </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card style={{background: 'violet'}} elevation={6}>
                        <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('inProgress');
                                this.setState({count:'accepted'})
                                this.props.history.push({
                                    pathname: `/ministry/table/inProgressCount`,
                                    state: { count:'accepted' }
                                  })}}
                            >
                            <CardHeader
                                align='center'
                                title="In Progress"
                            />
                            <Divider/>
                            <CardContent>
                            <Typography variant="h6" align='center'>
                                {this.state.cardData.inProgressCount}
                            </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card style={{background: 'orangered'}} elevation={6}>
                        <ButtonBase
                                className={classes.cardAction}
                                centerRipple={true}
                                onClick={event => { console.log('cancelled');
                                this.setState({count:'cancelled'})
                                this.props.history.push({
                                    pathname: `/ministry/table/cancelledCount`,
                                    state: { count:'cancelled' }
                                  })}}
                            >
                            <CardHeader
                                    align='center'
                                title="Cancelled Grievances"
                            />
                            <Divider/>
                            <CardContent>
                            <Typography variant="h6" align='center'>
                                {this.state.cardData.cancelledCount}
                            </Typography>
                            </CardContent>
                            </ButtonBase>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container justify='space-around' spacing={32}>
                <Grid item sm={5}>
                    <PieChart piechartData={this.state.piechart}/>
                    <form>
                        <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="filter">
                            Filter
                        </InputLabel>
                        <Select
                            value={this.state.filter}
                            onChange={this.handleSelectChange}
                            input={<Input name="filter" id="filter" />}
                            displayEmpty
                            name="filter"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="Hyderabad">
                            <em>Hyderabad</em>
                            </MenuItem>
                            <MenuItem value='RangaReddy'>RangaReddy</MenuItem>
                            <MenuItem value='Kanpur'>Kanpur</MenuItem>
                            <MenuItem value='Lucknow'>Lucknow</MenuItem>
                        </Select>
                        </FormControl>
                    </form>
                </Grid>
                <Grid item sm={7}>
                    <BarChart cardData={this.state.cardData}/>
                </Grid>
                </Grid>
            </div>
        )
    }
}


Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);






// <PieChart 
// piechartData = {this.state.piechart}  
// />