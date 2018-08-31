import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListIte } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        height: 500,
        overflowY: 'auto'
    },
    headlines: {
        textTransform: 'capitalize'
    },
    subheading: {
        marginTop: 20
    }
}

export default ({ organizedExercises, selectedCategory }) => {
    console.log(organizedExercises)
    return (
        <Grid container>
            {/* the left pane */}
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {organizedExercises.map(([exerciseGroup, exerciseArrays]) => {
                        return (
                            <Fragment>
                                <Typography 
                                    variant="headline"
                                    style={styles.headlines}
                                >
                                    {exerciseGroup}
                                </Typography>

                                <List component="ul">
                                    {exerciseArrays.map(exerciseObject => {
                                        return (
                                            <ListItem>
                                                <ListItemText primary={exerciseObject.title} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Fragment>
                        )
                    })}
                </Paper>
            </Grid>

            {/* the right pane */}
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {/* here if the selected category is undefined, we'll return the intro message... */}
                    {/* ...otherwise we'll return the data related to that category */}
                    {!selectedCategory ? 
                        <Fragment>
                            <Typography variant="display2">
                                Welcome!
                            </Typography>

                            <Typography variant="subheading" style={styles.subheading}>
                                Please select an exercise on the left.
                            </Typography>
                        </Fragment>
                        :
                        <Fragment>
                            {/* here we'll map over the array of exercises and load all the exercises that it holds in index 1 */}
                            {organizedExercises.map(([exerciseGroup, exerciseArrays]) => {
                                if (exerciseGroup === selectedCategory){
                                    return (
                                        <Fragment>
                                            <Typography variant='display2' style={styles.headlines}>
                                                {exerciseGroup}
                                            </Typography>
                                            {/* now we'll map over the array of exercises and list all of them */}
                                            {exerciseArrays.map(exerciseType => {
                                                return (
                                                    <Fragment>
                                                        <Typography variant='title' style={styles.subheading}>
                                                            {exerciseType.title}:
                                                        </Typography>
                                                        <Typography variant='body1'>
                                                            {exerciseType.description}
                                                        </Typography>
                                                    </Fragment>
                                                )
                                            })}

                                        </Fragment>
                                    )
                                }
                            })}
                        </Fragment>
                    }
                </Paper>
            </Grid>
        </Grid>
    )}