import React from 'react';

const Jumbotron=()=>{
    let styling={
        backgroundImage:'url("https://drive.google.com/thumbnail?id=1UCjiUQ9elnXykg7IOI93da5VYw32F7GZ")' ,
        backgroundSize:'cover',
        paddingTop:'20%',
        paddingBottom:'20%'
    }

    return(
        <React.Fragment>
            <div className="jumbotron" style={styling}>
                <p>SOME CONTENT</p>
            </div>
        </React.Fragment>
    );
}

export default Jumbotron;