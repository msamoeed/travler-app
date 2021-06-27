import React from 'react';
import loadingGif from "../assets/img/reactlogo.png";

const Loading = () => {
    return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="loading..." />
    </div>
    )
}

export default Loading;
