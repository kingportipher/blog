import React from 'react'
import {Grid, Row, Col} from 'bootstrap'



function Home(){

    return(
        <div classNameName="container-fluid">
            <section>
                <div classNameName="wrapper">
                    <nav className="logo-nav">
                     
                        <h1 className="title">VA News</h1>


                    </nav>
                    <section className="featured-body">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">News</a>
                       
                        </div>
                    </div>
                    </nav>
                    </section>
                </div>
                <div className="row">
                <div class="row mx-md-n5">
                <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
                <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
                <div class="col px-md-5"><div class="p-3 border bg-light">Custom column padding</div></div>
                
                </div>

                    
                </div>

            </section>
            </div>
    );
}

export default Home;