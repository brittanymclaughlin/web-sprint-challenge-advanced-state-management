import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { submitForm} from '../actions';


const AddForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({name:'', age: '', height: ''});

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
         e.preventDefault();
         submitForm(form)
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <h2>Come Join Our Village</h2>
            <label htmlFor="name">
                <input 
                    type='text'
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChanges}
                    placeholder='Name'
                />
            </label><br/>
            <label htmlFor="age">
                <input
                    type='number'
                    name='age'
                    id='age'
                    value={form.age}
                    onChange={handleChanges}
                    placeholder='Age'
                />
            </label><br/>
            <label htmlFor="height">
                <input
                    type='text'
                    name='height'
                    id='height'
                    value={form.height}
                    onChange={handleChanges}
                    placeholder='How tall are you?'
                />
            </label><br/>
            <button onClick={()=>dispatch(submitForm(form))}>Add member</button>
        </form>
        <br/><br/>
        </>
    )

}


export default AddForm;