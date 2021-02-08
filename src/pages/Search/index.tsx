import React, { useEffect, useState } from 'react';
import { User } from '../../core/types/User';
import { request } from '../../core/utils/request';
import ProfileCard from './components/ProfileCard';
import './styles.scss'

const Search = () => {
    const [search, setSearch] = useState('insanniity');
    const [user, setUser] = useState<User>();

    const handleSubmit = (event: { preventDefault: () => void; }) =>{
        event.preventDefault();
        request({url: search}).then(response => setUser(response.data));
    }
    const handleChange = (event: { target: { value: any; }; }) => {
        setSearch(event.target.value);
    }
    return (
        <>
            <div className="card search-content-card">
                <div className="card-body">
                    <h1 className="title-search">Encontre um perfil Github</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control input-search" value={search} onChange={handleChange} required placeholder="Usuário Github"></input>
                        <div className="button-search">
                            <button type="submit" className="btn button-bg">Procurar</button>
                        </div>
                    </form>                    
                </div>
            </div> 
            {user ? (<ProfileCard user={user} />) : ""}    
        </>
    )
};

export default Search;