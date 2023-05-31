import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsAll = () => {
    const details = useParams()
    console.log(details);
    return (
        <div>
            hiiiiiiiii
        </div>
    );
};

export default DetailsAll;