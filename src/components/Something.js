import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import {withStyles,Button, Paper,TableCell,TablePagination,Typography,TableRow,Table,TableHead,TableBody} from "@material-ui/core";
import ArrowBackSharp from "@material-ui/icons/ArrowBackSharp";


const styles = theme => ({
    backButton:{
        marginBottom:theme.spacing.unit,
    },
});

class Something extends React.Component{
    constructor(props){
        super(props);
        this.state={
            grievances: [],
            page: 0,
            rowsPerPage: 5,
        }
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
    componentDidMount() {
        console.log('hahaha',this.props.location.state.count);
        axios.get(`https://grievance-portal-server-1.herokuapp.com/api/dippOfficial/grievances?status=${this.props.location.state.count}`)
        .then((response)=>{
            console.log(response.data.grievances);
            this.setState({grievances:response.data.grievances})
        })
        .catch((error)=>{
            console.log("Error:",error)
        })
    }
    render(){
        const { classes } = this.props;
        const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.grievances.length - this.state.page * this.state.rowsPerPage);
        console.log(this.props.location.state.count);
        return(
            <div>
            <Typography >
            </Typography>
                <Button
                className={classes.backButton}
                onClick={() => {window.history.back()}}
                variant="text" 
                >
                <ArrowBackSharp/>
                </Button>
                <Paper className={classes.root} elevation={10}>
                <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell >S.No</TableCell>
                    <TableCell >Department</TableCell>
                    <TableCell >District</TableCell>
                    <TableCell >District Officer Email</TableCell>
                    <TableCell >status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    
                       this.state.grievances.slice(this.state.page * this.state.rowsPerPage, this.state.page *
                        this.state.rowsPerPage + this.state.rowsPerPage).map((grievance,i) => 
                       (
                       
                          <TableRow key={i}>
                            <TableCell>{i+1}</TableCell>
                            <TableCell>
                              {(grievance.department).toUpperCase()}
                            </TableCell>
                            <TableCell >{grievance.district}</TableCell>
                            <TableCell >{grievance.email}</TableCell>
                            <TableCell>
                            <Typography color='secondary' variant="subtitle1" >
                            {grievance.status.toUpperCase()}
                          </Typography></TableCell>
                          </TableRow>   
                       ))
                     }
                     {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                </TableBody>
              </Table>
              <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={this.state.grievances.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
                  
        
                </Paper>
            </div>
        )
    }
}

Something.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Something);




