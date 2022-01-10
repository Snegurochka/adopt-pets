import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './NewCommentForm.module.css';

interface IProps {
    petId: string;
}

const NewCommentForm: React.FC<IProps> = ({petId}) => {
    const history = useHistory();

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        history.replace(`/details/${petId}`);
    };
    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control}>
                <label htmlFor='author'>Name</label>
                <input type='text' id='author' />
            </div>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment'></textarea>
            </div>
            <div className={classes.actions}>
                <Button>Add Comment</Button>
            </div>
        </form>
    )
}

export default NewCommentForm
