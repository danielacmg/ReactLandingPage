import React from "react";

const Jumbotron = (props) => {
	return (
            <div class="jumbotron bg-light p-2">
                <h1 class="display-4">It Work!</h1>
                
                <p>{props.jumbotronText}</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
                </p>
              
            </div>
    );
};

export default Jumbotron;