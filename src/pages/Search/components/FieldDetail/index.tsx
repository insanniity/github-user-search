import React from 'react';
import './styles.scss'

type Props = {
    campo:string;
    informacao: string;
}

const FieldDetail = ({campo, informacao}: Props) => {
    return (                 
        <div className="input-card-detail">      
            <b>{campo}:</b> {informacao}
        </div>
    )
};

export default FieldDetail;