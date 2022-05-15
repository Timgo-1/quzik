import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Container } from '../../globalStyles';
// import { pink, orange } from '../../Colors';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: ${({ background }) => (background ? 'radial-gradient(circle, rgba(5,15,74,0.9350927871148459) 26%, rgba(51,59,2,0.9827213822894169) 70%);' : 'transparent')};
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: aqua;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 100;
	&:hover {
		color: royalblue;
	}
`;

export const NavIcon = styled.img`
	margin-right: 0.25rem;
	width: 2.5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 100;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100vh;
		position: absolute;
		padding-top: 80px;
		top: ${({ show }) => (show ? 0 : '-100vh')};
		right: 0;
		opacity: 1;
		transition: all 0.5s ease;
		background: radial-gradient(circle, rgba(34,8,32,0.9641967024539877) 20%, rgba(95,106,87,0.9567587209302325) 50%, rgba(8,0,2,0.9827213822894169) 80%);
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	margin-left: auto;

	button {
		background-color: transparent;
		border-radius: 5px;
		border: 2px solid fuchsia;

		@media screen and (max-width: 960px) {
			width: 100%;
		}
		&:hover {
		border: 2px solid chartreuse;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: tomato;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&.active {
		border-bottom: 2px solid violet;
	}
	&:hover {
		color: gold;
		border-bottom: 2px solid khaki;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&.active {
			border-bottom: none;
			text-decoration: underline;
			text-decoration-color: violet;
		}
		&:hover {
			color: gold;
			border-bottom: none;
			text-decoration: underline overline;
			text-decoration-color: khaki;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;

	@media screen and (max-width: 960px) {
		width: 75%;
	}
`;
