import React from 'react';
import './loading.scss';

import loaderGif from '../../assets/images/load.gif';

const Loading = () => {
    return (
        <div className="loading__container">
            <img src={loaderGif} alt="Loading" className="loader" />
        </div>
    );
};

export default Loading;