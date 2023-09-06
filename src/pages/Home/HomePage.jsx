import { NavMenu } from '../../components/NavigateMenu/NavMenu';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
	return (
		<main className="home-page global-container">
			<NavMenu />
			<section className="home-container">
				<div className="home-container__text-container">
					<h5>SO, YOU WANT TO TRAVEL TO</h5>
					<br />
					<h1>SPACE</h1>
					<br />
					<div className="home-container__parraph-container">
						<p>
							{
								"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. ell sit back, and relax because we'll give you a truly out of this world experience!"
							}
						</p>
					</div>
				</div>
				<div className="home-container__explorer-container">
					<Link
						className="home-container__explorer-container__button"
						to="/destination"
					>
						<div className="home-container__explorer-container__explorer-button-hover"></div>
						<div className="home-container__explorer-container__explorer-button-text">
							EXPLORE
						</div>
					</Link>
				</div>
			</section>
		</main>
	);
};
