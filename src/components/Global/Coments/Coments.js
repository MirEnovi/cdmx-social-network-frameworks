import React from 'react';

import './Coments.css';

const Coments = (props) => {  
  console.log(props.contentComent.user.displayName);
  return (
		<div class="row center-align">
			<div class="col s12 m8 offset-m2">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<span class="card-title">{props.contentComent.user.displayName}</span>
						<p>{props.contentComent.newComent}</p>
					</div>
					{// futuro like 
					/* <div class="card-action">
						<a href="#">This is a link</a>
						<a href="#">This is a link</a>
					</div> */}
				</div>
			</div>
		</div>
  )
};

export default Coments;