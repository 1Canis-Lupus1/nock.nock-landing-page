import React from 'react';

const Testimonial=()=>{
    return(
        <React.Fragment>
            <div class="card-deck">
            <div className="card m-2">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Rosie Sutter</h5>
                <p class="card-text"><strong>Living Reality</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            <div class="card m-2">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title">Nate Lahey</h5>
                <p class="card-text"><strong>Cir Reality</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            </div>
            <div class="card-deck">
            <div className="card m-2">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Martha Gim</h5>
                <p class="card-text"><strong>The Red Pin</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            <div class="card m-2">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title">Jack Gibbins</h5>
                <p class="card-text"><strong>Shindico</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            </div><br/>
            <center><a href="#">View More</a></center>
            
        </React.Fragment>
    );
}

export default Testimonial;