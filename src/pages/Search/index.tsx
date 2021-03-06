import React, { useEffect, useState } from 'react';
import { User } from '../../core/types/User';
import { request } from '../../core/utils/request';
import Loader from './components/Loader';
import ProfileCard from './components/ProfileCard';
import './styles.scss'

const Search = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) =>{
        event.preventDefault();        
        setIsLoading(true);
        request({url: search})
        .then(response => setUser(response.data))
        .finally(()=>{setIsLoading(false)});
    }
    const handleChange = (event: { target: { value: any; }; }) => {
        setSearch(event.target.value);
    }

    const handleClick = ( ) => {
        setIsVisible(true);
    }
    return (
        <>
            <div className="card search-content-card">
                <div className="card-body">
                    <h1 className="title-search">Encontre um perfil Github</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control input-search" value={search} onChange={handleChange} required placeholder="Usuário Github"></input>
                        <div className="button-search">
                            <button type="submit" className="btn button-bg" onClick={handleClick}>Procurar</button>
                        </div>
                    </form>                    
                </div>
            </div> 
            
            {isVisible && search ? (<div className="card profile-content-card"> 
                {isLoading ? (<Loader />) : (<>
                    {user ? (<ProfileCard user={user} />) : (<h1>Usuário não encontrado</h1>)}
                </>)}
            </div>) : ""}

                  
            
               
        </>
    )
};

export default Search;