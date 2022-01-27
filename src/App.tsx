import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {hasToken} from "./utils";
import {privateRoutes, publicRoutes} from "./routes";
import LayoutComponent from "./components/Layouts";

function App() {
    const hasUserToken = hasToken();

    return (
        <>
            {!hasUserToken
                ? <Routes>
                    {publicRoutes.map(route => {
                        return <Route key={route.path} path={route.path} element={<route.component/>}/>
                    })}
                    <Route path={'*'} element={<Navigate to='/login'/>} />
                </Routes>
                : <LayoutComponent>
                    <Routes>
                        {privateRoutes.map(route => {
                            return <Route key={route.path} path={route.path} element={ <route.component/>}/>
                        })}
                        <Route path={'*'} element={<Navigate to='/products'/>} />
                    </Routes>
                </LayoutComponent>
            }
        </>
    );
}

export default App;
