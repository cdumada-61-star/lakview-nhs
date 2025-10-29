import React from 'react';
import lakeviewLogo from '../../assets/lakeviewLogo.png';

function Home(){
    return (
        <div>
            <img src={lakeviewLogo} className="rounded float-left" alt="Rights to LakeView Technology Academy"></img>
            <br/>
            <h1>LakeView NHS Website</h1>
        </div>
    );
}

export default Home;