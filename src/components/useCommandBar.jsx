import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { init } from 'commandbar';
init('e2bbc1c3');

const useCommandBar = () => {
    
        const loggedInUserId = '987654';
        window.CommandBar.boot(loggedInUserId)
         
window.CommandBar.trackEvent("help", {})
          // ...
          const navigate = useNavigate();
          useEffect(() => {
            function router(url) {
                navigate(url)
            }
            window.CommandBar.addRouter(router)
        
          }, [navigate]);
        
        // useEffect(() => {
        //     window.CommandBar.trackEvent("help", {})
        // }, [])

          
};

export default useCommandBar;
