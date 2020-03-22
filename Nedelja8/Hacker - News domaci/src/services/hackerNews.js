import axios from 'axios'

export const baseUrl = `https://hacker-news.firebaseio.com/v0`
export const newStoriesUrl = `${baseUrl}/newstories.json`
export const storyUrl = `${baseUrl}/item`
export const jobstoriesUrl = `${baseUrl}/jobstories.json`

export const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then(({data}) => {
        console.log('GET');
        return data
    })
}

export const getStory = async (id) => {
    return await axios.get(`${storyUrl}/${id}.json`)
                      .then(({data}) => {
                        if(data){
                            return ({by:data.by, time:data.time, url:data.url, title:data.title })
                        }
                        else{
                            return null
                        }
                      })
}

export const getJobStories = async () => {
    return await axios.get(jobstoriesUrl).then(({data}) => {
        console.log('GET');
        return data
    })
}