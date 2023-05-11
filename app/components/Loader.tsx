import React from 'react';
import Spinner from 'react-loader-spinner';

export const Loader = ({ name }) => {
    return <div className="loader-container row h-100 v-align">
        <div className="col-12 d-flex justify-content-center">
            <Spinner
                type="Oval"
                color="#ff6b6b"
                height={100}
                width={100}
            />
        </div>
        <div className="col-12 d-flex justify-content-center">
            <p>{name}</p>
        </div>
    </div>
}