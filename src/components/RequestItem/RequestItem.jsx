import React from 'react';

/** 
 * SPIKE: TRY OUT MATERIAL UI
 * npm install
 * experiment with theme (make theme.js, ThemeProvider in index.js)
 * 
*/
import { Button, Typography } from '@material-ui/core';
//customize MaterialUI settings with MakeStyles
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
//grid
import Grid from '@material-ui/core/Grid'


const RequestItem = () => {

    //makeStyles changes here:
    const useStyles = makeStyles({
        deleteButtonStyle: {
            fontStyle: 'oblique'
        }
})

    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography color="primary" variant="h3">Request: Pool closures</Typography>
                </Grid>
                <Grid item xs={12}>
                    <p>Sent: 1/29/2021</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Agency: MPLS parks and rec department</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Email:</p>
                </Grid>
                <Grid item xs={2} /> 
                <Grid item xs={8}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
                        ut ex molestie blandit. Etiam et turpis sit amet risus mollis
                        interdum. Suspendisse et justo vitae metus bibendum fringilla sed
                        sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
                        elementum eget. Praesent efficitur eros vitae nunc interdum, eu
                        interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
                        Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
                        luctus. Duis a sapien metus.
                    </p>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={4}>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                    Response
                    </label>
                </Grid>
                <Grid item xs={8}>
                    <Button 
                    className={classes.deleteButtonStyle}
                    variant="contained"
                    color="secondary">
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default RequestItem
