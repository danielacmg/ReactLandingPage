import React from "react";


const Card = (props) => {
	return (        
        <div class="col-sm-4">
            <div class="card m-2" >
                <img class="card-img-top" src="big-project-image.png" alt="Card image cap"/>
                <div class="card-body p-2">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardText}</p>
                    <a href="#" class="btn btn-primary">Action</a>
                </div>
            </div>
        </div>                    
    );
};

export default Card;