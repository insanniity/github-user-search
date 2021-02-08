import dayjs from 'dayjs';
import React from 'react';
import { User } from '../../../../core/types/User';
import FieldDetail from '../FieldDetail';
import Info from '../Info';
import './styles.scss';

type Props = {
    user: User;
}

const ProfileCard = ({user}:Props) => {    
    user.created_at = dayjs(user.created_at).format('DD/MM/YYYY');
    return (
        <> 
            <div className="card-body row">                    
                <div className="col-2">
                    <img src={user.avatar_url} className="profile-image" />
                    <a href={user.html_url} className="btn button-bg">Ver perfil</a> 
                </div>
                <div className="col-9 card-profile-infos">                      
                        <Info text="Repositórios públicos" number={user.public_repos} />
                        <Info text="Seguidores" number={user.followers} />
                        <Info text="Seguindo" number={user.following} />                            
                        <div className="card-profile-details col-12">
                            <h1 className="details-title">Informações</h1>
                            <FieldDetail campo="Empresa" informacao={user.company} />
                            <FieldDetail campo="Website/Blog" informacao={user.blog} />
                            <FieldDetail campo="Localidade" informacao={user.location} />
                            <FieldDetail campo="Membro desde"informacao={user.created_at} />
                        </div>
                </div>
            </div>
        </>
    )
};

export default ProfileCard;