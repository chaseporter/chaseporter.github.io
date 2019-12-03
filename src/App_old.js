import React from 'react'
import './App.css'
import TitleBar from './components/TitleBar'
import GalleryCard from './components/GalleryCard'

function App() {
  return (
    <div className="background">
      <div className="topBar">
        <TitleBar />
      </div>
      <div className="galleryContainer">
        <GalleryCard name="Chase" />
      </div>
    </div>
  );
}

export default App;
