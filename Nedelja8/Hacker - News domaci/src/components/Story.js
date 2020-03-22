import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/hackerNews'
import '../index.css';
import { mapTimeString } from '../utils/mapTimeString';

// function handleClick() {
//     document.body.style.background = 'green';
//     alert("Stay at home! 😷")
// }

export const Story = ({storyId}) => {
    const [story,setStory] = useState({})
    
    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) 

    
    },[])


    return (
       
         
        <>
        <div class="container p-2 bg-dark text-white">

        <a href={story.url} target="_blank" class="btn btn-info">
            <h3>{story.title}</h3>
        </a>
        <p id="first" class="text-center">Autor: {story.by}</p>
        <p class="text-center">Objavljeno pre: {mapTimeString(story.time)}</p>
        {/* <button onClick={handleClick} style={{marginRight: '270px'}} >You have Corona?</button>
        <button onClick={()=>{ document.body.style.background = 'pink'; alert("🤝")}}>Corona free!</button> */}

        </div>
        <br></br>
        </>
        
    )
}
