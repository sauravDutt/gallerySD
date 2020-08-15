import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Signin from './comps/signin';
import Footer from './comps/footer';
import Info from './comps/InfoModal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [showInfo, setShowInfo] = useState(null)

  return (
    <div className="App">
      <Title />
      <Signin setShowInfo = {setShowInfo}/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/> }
      <Footer />
      {showInfo && <Info setShowInfo = {setShowInfo}/>}
    </div>
  );
}

export default App;
