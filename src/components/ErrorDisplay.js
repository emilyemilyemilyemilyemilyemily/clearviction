import React from 'react';

function ErrorDisplay({ errorMessage }) {
    return (
        <div className="alert alert-danger" role="alert">
            An error occurred: {errorMessage}
        </div>
    );
}

export default ErrorDisplay;