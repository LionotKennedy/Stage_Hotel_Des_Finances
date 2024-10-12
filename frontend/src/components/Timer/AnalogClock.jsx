// import React, { useEffect, useRef } from 'react';
// import './analogClock.scss'; // Importation du fichier CSS

// const AnalogClock = () => {
//     const hrRef = useRef(null);
//     const minRef = useRef(null);
//     const secRef = useRef(null);

//     const displayTime = () => {
//         const date = new Date();

//         const hh = date.getHours();
//         const mm = date.getMinutes();
//         const ss = date.getSeconds();

//         const hRotation = 30 * hh + mm / 2;
//         const mRotation = 6 * mm;
//         const sRotation = 6 * ss;

//         hrRef.current.style.transform = `rotate(${hRotation}deg)`;
//         minRef.current.style.transform = `rotate(${mRotation}deg)`;
//         secRef.current.style.transform = `rotate(${sRotation}deg)`;
//     };

//     useEffect(() => {
//         const intervalId = setInterval(displayTime, 1000);
//         displayTime(); // Initial call to set time immediately

//         return () => clearInterval(intervalId); // Clean up on component unmount
//     }, []);

//     return (
//         <div className="container_clock">

//             <div className="container_hours">
//                 <div className="clock">
//                     <div
//                         style={{ '--clr': '#ff3d58', '--h': '74px' }}
//                         ref={hrRef}
//                         className="hand"
//                     >
//                         <i></i>
//                     </div>
//                     <div
//                         style={{ '--clr': '#00a6ff', '--h': '84px' }}
//                         ref={minRef}
//                         className="hand"
//                     >
//                         <i></i>
//                     </div>
//                     <div
//                         style={{ '--clr': '#ffffff', '--h': '94px' }}
//                         ref={secRef}
//                         className="hand"
//                     >
//                         <i></i>
//                     </div>

//                     {[...Array(12)].map((_, index) => (
//                         <span key={index} style={{ '--i': index + 1 }}>
//                             <b>{index + 1}</b>
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AnalogClock;






























import React, { useEffect, useRef } from 'react';
import './analogClock.scss'; // Importation du fichier CSS

const AnalogClock = () => {
    const hrRef = useRef(null);
    const minRef = useRef(null);
    const secRef = useRef(null);

    const displayTime = () => {
        const date = new Date();

        const hh = date.getHours();
        const mm = date.getMinutes();
        const ss = date.getSeconds();

        const hRotation = 30 * hh + mm / 2;
        const mRotation = 6 * mm;
        const sRotation = 6 * ss;

        hrRef.current.style.transform = `rotate(${hRotation}deg)`;
        minRef.current.style.transform = `rotate(${mRotation}deg)`;
        secRef.current.style.transform = `rotate(${sRotation}deg)`;
    };

    useEffect(() => {
        const intervalId = setInterval(displayTime, 1000);
        displayTime(); // Initial call to set time immediately

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    return (
        <div className="container_clock">
            <div className="container_hours">
                <div className="clock">
                    <div
                        style={{ '--clr': '#ff3d58', '--h': '74px' }}
                        ref={hrRef}
                        className="hand"
                    >
                        <i></i>
                    </div>
                    <div
                        style={{ '--clr': '#00a6ff', '--h': '84px' }}
                        ref={minRef}
                        className="hand"
                    >
                        <i></i>
                    </div>
                    <div
                        style={{ '--clr': '#ffffff', '--h': '94px' }}
                        ref={secRef}
                        className="hand"
                    >
                        <i></i>
                    </div>

                    {[...Array(12)].map((_, index) => (
                        <span key={index} style={{ '--i': index + 1 }}>
                            <b>{index + 1}</b>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;
