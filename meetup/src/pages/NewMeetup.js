import NewMeetupForm from "../components/meetups/NeeMeetupForm";
import { useHistory } from 'react-router-dom';

function NewMeetupPage(props) {

  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-getting-started-bc3d0-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  )
}

export default NewMeetupPage;