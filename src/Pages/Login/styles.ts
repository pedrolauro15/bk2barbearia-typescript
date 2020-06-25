import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	grid-gap: 32px;
	padding: 164px;
	max-height: 100vh;
	overflow: hidden;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0;
		align-items: center;
		justify-content: center;
		padding: 32px;
		overflow: scroll;
	}
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;

	> img {
		width: 350px;
		margin-bottom: 64px;
	}

	> form {
		display: flex;
		flex-direction: column;
		margin-top: 32px;
	}

	> form > input {
		padding: 16px;
		border-radius: 8px;
		max-width: 400px;
		margin-bottom: 16px;
		font-size: 18px;
		transition: all 0.1s;
    background-color: #FFF;

		::placeholder {
			font-size: 18px;
		}

		&:hover {
			background-color: ${shade(0.1, '#FFF')};
		}

    &:focus {
      box-shadow: 0 0 8px #DD4455;
      background-color: #FFF;
    }
	}

	> form > button {
		background-color: var(--primary);
		border-radius: 8px;
		color: #fff;
		max-width: 400px;
		font-size: 18px;
		font-weight: bold;
		padding: 16px;
		cursor: pointer;
		transition: all 0.25s;

		&:hover {
			background-color: ${shade(0.25, '#DD4455')};
		}

		&:active {
			background-color: ${shade(0.15, '#DD4455')};
		}
	}

	@media (max-width: 768px) {
		> h1 {
			margin-left: 16px;
		}

		> img {
			margin-bottom: 16px;
		}

		> form {
			width: 100%;
			padding: 16px;
			margin-top: 12px;
		}

		form > input,
		button {
			width: 100%;
		}
	}
`;

export const RightContainer = styled.div`
	display: flex;

	> img {
		width: 80%;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const PlayStoreButton = styled.button`
	display: none;
	background: none;
	@media (max-width: 768px) {
		transition: all 0.3s;
		display: block;
		margin: 0 auto;

		> img {
			width: 60%;
		}

		&:active {
			opacity: 0.5;
		}
	}
`;
