import React from 'react';
import { motion } from 'framer-motion';


const Notification = () => {

    return (
        
        <motion.div className="backdrop-notification" 
        initial = {{opacity: 0}}
        animate = {{ opacity: 1}}>

        <motion.div 
            className="notificationDiv" 
            id='notificationsBtn'
            initial = {{y:"-100vh"}}
            animate = {{ y: 0}}
        >
            <h2><i 
                    class="fas fa-bell"
                    style={{color:'#715086'}}
                ></i> Notifications</h2>
        </motion.div>

        </motion.div>

    )
}

export default Notification;