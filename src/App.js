import React from "react";
import './App.scss';

export default function App() {
    return (
        <div className="coming-soon">
            <div className="background">
                <div className="title">
                        <h1>Change is Coming</h1>
                        <h3>The countdown is on!</h3>
                        <h3>My website will launch soon.</h3>
                </div>
                <img src="/images/background.jpg" alt="" />
                <div className="bottom">
                    <p>Copyright © 2023 Lost To Caffeine - All Rights Reserved.</p>
                </div>
                <a href="https://www.instagram.com/losttocaffeine/" className="instagram">
                    <img src="/images/instagram.svg" alt="" />
                </a>
            </div>
        </div>
    );
}