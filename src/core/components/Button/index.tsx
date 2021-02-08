import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

type Props ={
    text:string;
    urlButton:string;
}

const Button = ({text, urlButton}: Props) => {
    return (
        <Link to={urlButton} className="btn button-bg">{text}</Link>
    )
}

export default Button;