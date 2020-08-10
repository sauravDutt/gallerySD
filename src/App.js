import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Signin from './comps/signin';
import SigninFormArea from './comps/signinForm';
import Footer from './comps/footer';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <div className="App">
      <Title />
      <Signin />
      <UploadForm />
      <SigninFormArea />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/> }
      <Footer />
    </div>
  );
}

export default App;
