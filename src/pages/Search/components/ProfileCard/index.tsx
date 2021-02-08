import React from 'react';
import Button from '../../../../core/components/Button';
import FieldDetail from '../FieldDetail';
import Info from '../Info';
import './styles.scss'

const ProfileCard = () => {
    return (
        <>
            <div className="card profile-content-card">
                <div className="card-body row">                    
                    <div className="col-2">
                        <img src="https://avatars.githubusercontent.com/u/32269793?v=4" className="profile-image" />
                        
                        <Button text="Ver perfil" urlButton="" />
                    </div>
                    <div className="col-9 card-profile-infos">                      
                            <Info text="Repositórios públicos" number="62" />
                            <Info text="Seguidores" number="62" />
                            <Info text="Seguindo" number="62" />                            
                            <div className="card-profile-details col-12">
                                <h1 className="details-title">Informações</h1>
                                <FieldDetail campo="Empresa" informacao="@ZupIT" />
                                <FieldDetail campo="Website/Blog" informacao="https://thewashington.dev" />
                                <FieldDetail campo="Localidade:" informacao="Uberlândia" />
                                <FieldDetail campo="Membro desde"informacao="19/10/2013" />

                            </div>
                    </div>
                </div>
            </div>            
        </>
    )
};

export default ProfileCard;