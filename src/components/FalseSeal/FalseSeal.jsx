// import React, { useState, useEffect } from 'react';

// function FlashingTime() {
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000); // Update every second

//         return () => clearInterval(interval); // Cleanup interval on unmount
//     }, []); // Empty dependency array ensures effect runs only once on mount

//     const days = currentTime.getDay();
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();

//     return (
//         <div>
//             <h2>Current Time:</h2>
//             <p>Day: {days}</p>
//             <p>Hour: {hours}</p>
//             <p>Minute: {minutes}</p>
//             <p>Second: {seconds}</p>
//         </div>
//     );
// }

// export default FlashingTime;