import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupsList';

// Import necessary modules and components

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Define states 'isLoading' and 'loadedMeetups' using the 'useState' hook

  useEffect(() => {
    setIsLoading(true);
    // Set 'isLoading' to 'true'

    fetch(
      'https://test-react-59f5a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const meetups = [];

        for (const key in data) {
          // Iterate over each key in the 'data' object

          const meetup = {
            id: key,
            ...data[key]
          };
          // Create a 'meetup' object with an 'id' field equal to the current key
          // and all other properties found in 'data[key]'

          meetups.push(meetup);
          // Add the 'meetup' object to the 'meetups' array using the 'push' method
          // (note: there was a mistake in adding to the array, it should be 'meetups.push(meetup);')
        }
        // Extract data from the response and form 'meetup' objects

        setIsLoading(false);
        // Set 'isLoading' to 'false'

        setLoadedMeetups(meetups);
        // Set the 'loadedMeetups' state to the 'meetups' array
      });
  }, []);

  // Perform the asynchronous effect after component mounting and when an empty array [] changes

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // If data is still loading, display the text "Loading..."

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

// Display a list of meetups once the data is loaded

export default AllMeetupsPage;
