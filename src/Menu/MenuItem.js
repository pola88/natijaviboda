import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import styled from 'styled-components';

const StyleItem = styled.a `
  text-decoration: none;
  color: #7F560F;
  font-size: 1.18rem;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  padding-bottom: 5px;
  ${(props) => props.active ? 'border-bottom: 1.5px solid #7F560F;' : ''}
  ${(props) => props.active ? 'font-weight: 700;' : ''}

  &:hover {
    font-weight: 700;
    transition-timing-function: linear;
    transition: all .3s;
  }
  
  @media (max-width: 1024px) {
    ${(props) => props.active ? 'border-bottom: none;' : ''}
    margin-top: 30px;
    margin-left: 40px;
    font-size: 2.18rem;
  }

  @media (max-width: 600px) {
    margin-top: 30px;
    margin-left: 40px;
    font-size: 1.18rem;
  }
`;

export const MenuItem = ({ page, onClick }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(page.id);
		document.getElementById(page.id).scrollIntoView();
    onClick && onClick();
	};

	return (
		<StyleItem
      active={activeNavLinkId === page.id}
			onClick={handleClick}
		>
			{page.name}
		</StyleItem>
	);
};