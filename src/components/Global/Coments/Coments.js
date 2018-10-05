import React from 'react';

import './Coments.css';

const Coments = (props) => {  
	// console.log(props);
  return (
		<div className = 'section-coments'>
			{
				props.Coments.map((item) => {
					return (
						<div key = {item.uid} className ='row center-align'>
							<div className='col s12 m8 offset-m2'>
								<div className='card yellow accent-1'>
									<div className='card-content orange-text text-darken-4'>
										<p className='left-align breadcrumb'>{`${item.user} dice:`}</p>
										<div className='divider'></div>
										<p className='card-title'>{item.coment}</p>
										
									</div>
									<div className='card-action right-align'>
										<a><i className='material-icons'>thumb_up</i></a>

										<a><i onClick = {() => props.delete(item.userUid, item.comentUid)} className='material-icons'>delete</i></a>

										<a><i className='material-icons'>edit</i></a>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
		
  )
};

export default Coments;