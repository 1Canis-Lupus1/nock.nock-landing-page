import React from 'react';

const Jumbotron=()=>{
    let styling={
        backgroundImage:'url("https://drive.google.com/thumbnail?id=1UCjiUQ9elnXykg7IOI93da5VYw32F7GZ")' ,
        backgroundSize:'cover',
        paddingTop:'20%',
        paddingBottom:'20%',
        textAlign:'center',
        marginTop:'30'
    }

    let txtstyle={
        color:'white'
    }

    return(
        <React.Fragment>
            <div className="jumbotron" style={styling}>
                <span style={txtstyle}>
                <h3>GET A $5,000 INTEREST-FREE RENOVATION ADVANCE</h3>
                <h1><strong>Buy</strong> your home from the<br/> comfort of your couch.</h1><br />
                <h4>GET READY FOR A REAL ESTATE EXPERIENCE<br /> UNLIKE ANY YOU'VE EVER HAD BEFORE.</h4><br />
                <input type="text" className="w-25" style={{textAlign:'center'}} placeholder="City or Postal Code"/>
                <button type="button" className="btn btn-primary ">SEARCH</button><br />
                <a href="https://en.wikipedia.org/wiki/Finance" target="_blank">Need Financing</a>
                </span>
            </div>
        </React.Fragment>
    );
}

export default Jumbotron;