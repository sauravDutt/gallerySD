import React from 'react';
import { motion } from 'framer-motion';

const Info = ({setShowInfo}) =>{

    const removeModal = (e) => {
        if (e.target.classList.contains('infoBackdrop')) {
            setShowInfo(null);
        }
    }

    return (
        <motion.div className="infoBackdrop" onClick={removeModal}
            initial = {{opacity: 0}}
            animate = {{ opacity: 1}}
        >
            <motion.div className="infoDiv"
                initial = {{y:"-100vh"}}
                animate = {{ y: 0}}
            >
                <h2><i class="fas fa-info-circle" style={{color:'#5c0b92'}}></i> Info</h2>
                <p>
                    The Gallery is a practice for Reactjs and Google Firebase. For uploading a picture to the gallery just click the <b>Add+</b> button on the Right. You can anonymously post any PNG or JPEG image.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Info;