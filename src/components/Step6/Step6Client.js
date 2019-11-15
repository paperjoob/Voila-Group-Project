import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material UI
import Fab from '@material-ui/core/Fab';
import {Add as AddIcon, CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Select, FormControl, InputLabel, MenuItem, Button, FormGroup, FormControlLabel, Switch, } from '@material-ui/core';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    root: {
        color: theme.palette.text.primary,
    },
      icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
  });

class Step6Client extends Component {
    state = {
        inspectionId: '',
    }

    handleChange = (propertyName, event)=>{
        this.setState({
            [propertyName]: event.target.value
          })
    }

    displaySingleInspector = ()=>{
        //display the vendor's contact information
        const inspectorToDisplay = this.props.vendorList.find((inspector)=> inspector.id === Number(this.state.inspectionId));
        return <div>
                    <p>Name: {inspectorToDisplay.firstName} {inspectorToDisplay.lastName}</p>
                    <p>Company Name: {inspectorToDisplay.companyName}</p>
                    <p>Phone: {inspectorToDisplay.phoneNumber}</p>
                    <p>Email: {inspectorToDisplay.email}</p>
                    <p>Website: {inspectorToDisplay.website}</p>
                </div>
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_INSPECTORS'});
    }
    render() {
        const { classes } = this.props;
        //if redux store vendorList has not yet loaded the date
        //the page will display ...loading... rather than empty data
        if(this.props.vendorList[0].loading){
            return <div>...loading...</div>
        }
        //loop through inspection vendors from redux store (vendorList)
        //to display each individual vendor name in select
        const inspectors = this.props.vendorList.map((inspector)=>{
        return <MenuItem 
                    key={inspector.id}
                    value={inspector.id}>{inspector.companyName}</MenuItem>
        })
        return (
            <div>
                <h1>Use one of our inspection partners or schedule your own</h1>
                <div className="inspectionPartners">
                    <FormControl>
                        <InputLabel id="selectInspectors">Inspection Partners</InputLabel>
                        <Select
                            labelId="selectInspectors"
                            onChange={(event) => {this.handleChange('inspectionId', event)}}
                            value={this.state.inspectionId}
                            >
                            <MenuItem value={''}>--View an Inspection Partner--</MenuItem>
                                {inspectors}
                        </Select>
                    </FormControl>
                
                    {/* if an inspector has been selected from the list, show the contact info otherwise sho nothing */}
                    {this.state.inspectionId ? <div>{this.displaySingleInspector()}</div> : <div></div>}
                </div>

                <div className="inspectionDetails">
                    <div>Add Your Inspection Details 
                    <Fab onClick={this.handleAdd} color="secondary" aria-label="Add" className={classes.fab} size="small">
                         <AddIcon />
                    </Fab> 
                        
                    </div>
                    <div>
                        <CheckCircleOutline className={classes.icon} color="secondary" /> Inspection Scheduled:
                        <div><p>inspector:</p><p>Date:</p></div>
                    </div>
                    <div><PanoramaFishEye className={classes.icon} color="secondary"/>Inspection Negotiated:
                        <p>To be marked complete by Voila</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    vendorList: state.vendorList,
});

export default withStyles(styles) (connect(mapStateToProps)(Step6Client));