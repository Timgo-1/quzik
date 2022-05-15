import styled from 'styled-components';
//import { pink, orange } from '../../Colors';
import { Heading, TextWrapper } from '../../globalStyles';

export const PricingSection = styled.div`
	padding: 50px 0 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: radial-gradient(circle, rgba(34,8,32,0.9641967024539877) 20%, rgba(14,12,59,0.9567587209302325) 50%, rgba(8,0,2,0.9827213822894169) 80%);
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingHeading = styled(Heading)`
	font-size: 3rem;
	margin-bottom: 24px;
	color: deeppink;
`;

export const PriceSubtitle = styled.h1`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	color: navy;
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCardInfo = styled.div`
	background: linear-gradient(225deg, rgba(7,52,39,0.9948715490797546) 25%, rgba(14,23,71,0.9948715490797546) 50%, rgba(65,64,44,0.9827213822894169) 75%);
	box-shadow: 0 6px 20px grey;
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: hotpink;
	margin: auto;
	> button {
		background-color: transparent;
		border: 2px solid chartreuse;
		margin-top: auto;

		&:hover {
			border: none;
		}
	}

	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
	color: peru;
`;

export const PricingCardCost = styled(TextWrapper)`
	font-size: 1.2rem;
`;

export const PricingCardText = styled(TextWrapper)`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: darkorange;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: violet;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;
