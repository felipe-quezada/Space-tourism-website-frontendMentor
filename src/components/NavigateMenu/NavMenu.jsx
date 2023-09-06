import { Link, useLocation } from 'react-router-dom';
import './NavMenu.css';
import logo from '../../assets/logo.svg';

export const NavMenu = () => {
	const { pathname } = useLocation();
	const paths = ['/', '/destination', '/crew', '/technology']

	return (
		<section className="nav-section">
			<div className="nav-logo">
				<img src={logo} style={{ width: '100%' }} />
			</div>
			<div className="line-style"></div>
			<nav className="nav-menu-container">
				<ul className="nav-menu-container__list">
					<Link className={pathname == paths[0] ? 'active-link' : 'desactive-link'} to={'/'}>
						<span>00</span> HOME
					</Link>
					<Link
						className={pathname == paths[1] ? 'active-link' : 'desactive-link'}
						to={'/destination'}
					>
						<span>01</span> DESTINATION
					</Link>
					<Link className={pathname == paths[2] ? 'active-link' : 'desactive-link'} to={'/crew'}>
						<span>02</span> CREW
					</Link>
					<Link
						className={pathname == paths[3] ? 'active-link' : 'desactive-link'}
						to={'/technology'}
					>
						<span>03</span> TECHNOLOGY
					</Link>
				</ul>
			</nav>
		</section>
	);
};
