import React from 'react';

const Foot=()=>{
    let footStyle={
        paddingTop:"55px",
        marginTop:"10px",
        marginBottom:"10px"
    }

    let coloring={
        color:"white"
    }
    return(
        <React.Fragment>
            <div style={{ background: "#49BCF8", height: "calc(50vh)" }}>
            <div class="container" style={footStyle}>
                <div class="row" style={coloring}>
                    <div class="col-sm">
                        <img src="https://drive.google.com/thumbnail?id=1I0hCDpnkmFF4vxAYea89gLQNtdRYNwyF" /><br/><br/>
                        <p>nock nock provide buyers with the ultimate in Real Estate experiences while dealing wiht only the top 1% of hand picked Real Estate Agents in Canada.</p>
                    </div>
                    <div class="col-sm">
                    <p><strong>Top Searches</strong><br/><br/>Real Estate Agents Near Me<br/>Real Estate Agents in Toronto<br/>Real Estate Agents in Oakville<br/>Real Estate Agents in Milton</p>
                    </div>
                    <div class="col-sm">
                    <p><br/><br/>Real Estate Agents in Burlington<br/>Real Estate Agents in Mississauga<br/>Real Estate Agents in Etiobicoke<br/>Real Estate Agents in Hamilton</p>
                    </div>
                    <div class="col-sm">
                    Follow Us:<br/><br/>
                    <a href="https://www.facebook.com/" target="_blank" className="m-2"><img src="https://drive.google.com/thumbnail?id=1s_3NC92VLa88UWNkj6e01BoLJ7GQoxsW"/></a>
                    <a href="https://twitter.com/" target="_blank" className="m-2"><img src="https://drive.google.com/thumbnail?id=1HQiBwHH2GcRptgbw48AFdIzH-5gIFcY2"/></a>
                    <a href="https://www.instagram.com/" target="_blank" className="m-2"><img src="https://drive.google.com/thumbnail?id=180LSrHMMMowip5m6i8m4yZx4-xMlNqGe"/></a>
                    </div>
                </div>
                <hr/>
                <h6 style={{ background: "#98FFFF"}}><a href="#">Terms and Conditions</a>    /   <a href="#">About Us</a>    /  <a href="#">News</a>    /   <a href="#">Privacy Policy</a></h6>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Foot;