import React, {useState} from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App=()=>{
  const [courseGoals, setCourseGoals]=useState([
    {text: 'do all exercise!', id:'g1'},
    {text: "finish all tasks!", id: 'g2'}
  ])
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content=(
    <p style={{textAlign: 'center'}}>no goal found, may be add one?</p>
  )
  if(courseGoals.length>0){
    content=(
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    )
  }
  return(
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        {content}
      </section>
    </div>
  )
}
export default App;