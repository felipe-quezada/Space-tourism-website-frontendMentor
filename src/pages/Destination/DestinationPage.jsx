import { NavMenu } from '../../components/NavigateMenu/NavMenu';
import './DestinationPage.css';
import dataJson from '../../data.json';
import { useState } from 'react';

export const DestinationPage = () => {
	const destinationData = dataJson.destinations;
	const [planetSelect, setPlanetSelect] = useState(0);
	const handleClick = (index) => {
		setPlanetSelect(index);
	};

	return (
		<main className="destination-page global-container">
			<NavMenu />
			<section className="destination-container-main">
				<div>
					<img
						src={destinationData[planetSelect].images.png}
						alt={destinationData[planetSelect].name}
					/>
				</div>
				<div style={{ width: '445px' }}>
					<nav
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '285.5px',
							height: '34px',
						}}
					>
						{destinationData.map(({ name }, index) => (
							<button
								className="select-planet"
								key={index}
								onClick={() => handleClick(index)}
							>
								<p
									className={`select-planet__text ${
										planetSelect == index ? 'select-planet__style-active' : 'select-planet__style'
									}`}
								>
									{name.toUpperCase()}
								</p>
							</button>
						))}
					</nav>
					<br />
					<h2>{destinationData[planetSelect].name}</h2>
					<br />
					<p>{destinationData[planetSelect].description}</p>
					<br />
					<hr />
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div>
							<p className="sub-heading-2">AVG. DISTANCE</p>
							<p className="sub-heading-1">
								{destinationData[planetSelect].distance.toUpperCase()}
							</p>
						</div>
						<div>
							<p className="sub-heading-2">EST. TRAVEL TIME</p>
							<p className="sub-heading-1">
								{destinationData[planetSelect].travel.toUpperCase()}
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
