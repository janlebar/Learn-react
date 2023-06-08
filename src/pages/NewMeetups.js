import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    fetch('https://test-react-59f5a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;