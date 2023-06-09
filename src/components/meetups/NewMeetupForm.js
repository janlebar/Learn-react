import { useRef } from "react";
import Card from "../ui/Card"
import classes from './NewMeetupForm.module.css';




function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef ();
    const adressInputRef = useRef ();
    const descriptionInputRef = useRef ();

    function submitHandker(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAdress = adressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAdress,
            description: enteredDescription,
        };

        // console.log(meetupData);
        props.onAddMeetup(meetupData);
}


    return (
    <Card>
        <form className={classes.form} onSubmit={submitHandker}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type='text' required id="title" ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type='url' required id="image" ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="adress">Adress</label>
                <input type='text' required id="title" ref={adressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    );
}

export default NewMeetupForm