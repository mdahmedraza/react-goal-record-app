import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../../UI/Button/Button';

const CourseInput=props=>{
    const [enteredValue, setEnteredValue]=useState('');
    const goalInputChangeHandler=event=>{
        setEnteredValue(event.target.value);
    }
    const formSubmitHandler=event=>{
        event.preventDefault();
        props.onAddGoal(enteredValue);
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>course goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">add goal</Button>
        </form>
    )
}
export default CourseInput;