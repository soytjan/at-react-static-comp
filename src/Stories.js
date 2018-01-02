import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            // INSTEAD OF returning the div below, return a Story component
            // Be sure to pass down the correct props!
            return <Story img={story.img} title={story.title} desc={story.desc} authImg={story.authImg} authName={story.authName} estTime={story.estTime} />
          })
        }
      </div>
    </div>
  )
}

export default Stories;

 {
          props.days.map( (day) => {
            return <Card weekday={day.conditions} month={day.date.monthname} day={day.date.day} weather={day.conditions} high={day.high.fahrenheit} low={day.low.fahrenheit} />
          });
        }