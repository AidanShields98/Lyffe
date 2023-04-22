import Exercises from './imgs/Exercise.png'
import Workout from './imgs/Workout.png'
const pages = [
    {
        title: 'Exercises',
        description: 'The Exercises tab allows users to search and view various exercises. On the top of the page, there is a search bar where users can enter a keyword to search for exercises. The results of the search are then displayed in a set of cards below the search bar. Each card contains information about an exercise, including its name, bodypart, target muscle and equipment needed.',
        image: Exercises,
        time: 1500,
    },
    {
        title: 'Workout',
        description: 'The Workout tab enables users to create and customize their workout plans. Users can select the number of workouts they want to create and customize each workout by setting the name, sets, reps, and weights. Once created, the workout plans can be edited at any time by clicking the edit icon beside the workout title,  to update any field.',
        image: Workout,
        time: 1500,
    },

];

export default pages;