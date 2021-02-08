import React from 'react';
import './styles.scss'

type Props = {
    text:string;
    number?: string;
}

const Info = ({text, number}: Props) => {
    return (
        <span className="profile-card-stats">      
            {text}: {number}
        </span>
    )
};

export default Info;