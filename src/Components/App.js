import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises/Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
    state = {
        exercises
    }

    getExercisesByMuscles = () => {
        return Object.entries(this.state.exercises.reduce((exercises, currentExercise) => {
            const { muscles } = currentExercise;
            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], currentExercise] : [currentExercise];

            return exercises;
        }, {}))
    }

    handleCategorySelected = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    handleExerciseSelected = (exerciseId) => {
        const currentExercise = exercises.map((exercise) => {
            if (exerciseId === exercise.id) this.setState({ selectedExercise: exercise });
        })
    }

    render(){
        const organizedExercises = this.getExercisesByMuscles();
        const { selectedCategory } = this.state;
        const { selectedExercise } = this.state;

        return(
            <Fragment>
                    <Header />
                    <Exercises 
                        organizedExercises={organizedExercises}
                        selectedCategory={selectedCategory}   
                        selectedExercise={selectedExercise}
                        handleExerciseSelected={this.handleExerciseSelected}
                    />
                    <Footer 
                        muscles={muscles}
                        selectedCategory={selectedCategory}
                        handleCategorySelected={this.handleCategorySelected}
                    />
            </Fragment>
        )
    }
}

export default App;