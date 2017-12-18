import React from 'react';
import { Header } from "./Header";
import { LoginBody } from "./Login-body";
import { Footer } from "./Footer";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <LoginBody/>
                <Footer/>
            </div>
        );
    }
}
