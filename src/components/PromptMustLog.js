import React from 'react';


import  '../style/App.css';

const YouMustLog = ({ closePrompt }) => {
    return ( 
        <div className="prompt">
            <p>If you want add any movies to your card movies, you must log in.</p>
            <p>Do you want create account? <a href="#">Click here</a></p>
            <button id="close" onClick={closePrompt}>Close</button>
        </div >
     );
}
 
export default YouMustLog;