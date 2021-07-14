import React from 'react';
import './Loading.css'
const Loading = ({ isLoading, children }) => {

    return isLoading ? (<div class="lds-circle"><div></div></div>) : children

};

export default Loading;