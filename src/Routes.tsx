import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import TopNavBar from './core/components/TopNavBar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
    <BrowserRouter>
        <div className="container-xxl">
            <TopNavBar />
            <div className="container-xxl">
                <div className="content">                
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                    </Switch>                
                </div>                   
            </div>
        </div>
    </BrowserRouter>
)
export default Routes;