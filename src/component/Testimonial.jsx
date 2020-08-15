import React from 'react';

const Testimonial=()=>{
    return(
        <React.Fragment>
            <div class="card-deck">
            <div className="card m-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL8gPRDx9iWXZx2GcScvJ2EDW6BoESX-KzdA&usqp=CAU" height="100px" width="100px" alt="USER1"/>
                <div class="card-body">
                <h5 class="card-title">Rosie Sutter</h5>
                <p class="card-text"><strong>Living Reality</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            <div class="card m-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhMJ-ceyyUa4C41_4atzuYaQOWcs1k7hMX1g&usqp=CAU" height="100px" width="100px" alt="USER2"/>
                <div class="card-body">
                <h5 class="card-title">Nate Lahey</h5>
                <p class="card-text"><strong>Cir Reality</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            </div>
            <div class="card-deck">
            <div className="card m-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU8Td5rQ__s_raB7KzXu6H_AEPPq2bjT44rQ&usqp=CAU" height="100px" width="100px" alt="USER3"/>
                <div class="card-body">
                <h5 class="card-title">Martha Gim</h5>
                <p class="card-text"><strong>The Red Pin</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            <div class="card m-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA0QBKdJ64psRim4dtLltQmtWIiwTUU9moUQ&usqp=CAU" height="100px" width="100px" alt="USER4"/>
                <div class="card-body">
                <h5 class="card-title">Jack Gibbins</h5>
                <p class="card-text"><strong>Shindico</strong>    ||    <em>Real Estate Agent</em></p>
                <p class="card-text"><small class="text-muted">Insert Table Here</small></p>
                </div>
            </div>
            </div><br/>
            <center><strong><a href="#">View More</a></strong></center>
        </React.Fragment>
    );
}

export default Testimonial;