import React from 'react';
import Button from '../../../../core/components/Button';
import './styles.scss'

const SearchCard = () => {
    return (
        <>
            <div className="card search-content-card">
                <div className="card-body">
                    <h1 className="title-search">Encontre um perfil Github</h1>
                    <form>
                        <input className="form-control input-search" placeholder="Usuário Github"></input>
                    </form>
                    <div className="button-search">
                        <Button text="Encontrar" urlButton="" />
                    </div>
                </div>
            </div>           
        </>
    )
};

export default SearchCard;