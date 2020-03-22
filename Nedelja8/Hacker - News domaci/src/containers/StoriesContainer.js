import React, { useState, useEffect } from 'react';
import { getStoryIds, getJobStories } from '../services/hackerNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [jobIds, setJobIds] = useState([]);

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')


  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja));

  }, [])



  // Nacin 1:

  // const filteredStories = storyIds.filter(story => {
  //   return story.title.toLowerCase().includes(search.toLowerCase());
  // })

  // ne radi

  // Nacin 2:

  // let filteredStories = storyIds.filter((story) => story.title.includes(search))

  // ne radi


  useEffect(() => {
    getJobStories().then(data => setJobIds(data));

  }, [])

  return (

    <>

      <input class="form-control form-control-sm" placeholder="Search Latest News.." onChange={e => setSearch(e.target.value)} />
      
      <section id ="section">
      <button class="btn btn-dark btn-lg btn-block" onClick={() => setSelected(selected + 1)}>Click here to see Job Story</button>
      <Story id = "stori" storyId = {jobIds[selected]} key={jobIds[selected]} />

      </section>

      {storyIds.slice(0, 20).map(storyId => <Story storyId={storyId} key={storyId} />)}


      {/* {filteredNews.slice(0,20).map(storyId => <Story storyId={storyId} key={storyId}/>)} */}

    </>


  )

}
