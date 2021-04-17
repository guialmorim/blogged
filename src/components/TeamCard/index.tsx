import React from 'react';
import {
	AiFillInstagram,
	AiFillLinkedin,
	AiFillFacebook,
} from 'react-icons/ai';

const TeamCard: React.FC = () => {
	return (
		<div className="card profile-card-3 shadow rounded">
			<div className="background-block">
				<img
					src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
					alt="profile-sample1"
					className="background"
				/>
			</div>
			<div className="profile-thumb-block">
				<img
					src="https://randomuser.me/api/portraits/men/41.jpg"
					alt="profile-image"
					className="profile"
				/>
			</div>
			<div className="card-content">
				<h2>
					Justin Mccoy<small>Designer</small>
				</h2>
				<div className="icon-block">
					<a href="#">
						<AiFillInstagram />
					</a>
					<a href="#">
						<AiFillLinkedin />
					</a>
					<a href="#">
						<AiFillFacebook />
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
