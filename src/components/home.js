import React from 'react'
import Notes from './Notes'; // Notes component को import किया

const Home = () => {
    return (
        <div>
            {/* सिर्फ Notes component को कॉल किया */}
            <Notes />
        </div>
    )
}

export default Home