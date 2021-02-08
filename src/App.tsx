import React from 'react';
import TopNavBar from './core/components/TopNavBar';
import './core/assets/styles/custom.scss'
import './app.scss';
import Home from './pages/Home';
import Routes from './Routes';

const App = () => {
    return(
        <>           
            <div className="container-xxl">
                <TopNavBar />
                <div className="container-xxl">
                    <div className="content">
                        <Routes /> 
                    </div>                   
                </div>                
            </div>            
        </>
        
    )
}

export default App;