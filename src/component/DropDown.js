import React, { useState } from 'react';
import styled from 'styled-components';

    

    const Dropdown = ({ buttonText, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            <DropdownBtn onClick={toggleDropdown}>
                <span>{buttonText}</span>
                <i className="fas fa-caret-down"></i>
            </DropdownBtn>
            {isOpen && (
                <DropDownList>
                {React.Children.map(children, (child, index) => (
                    <DropdownItem key={index}>{child}</DropdownItem>
                ))}
                </DropDownList>
            )}
        </DropdownContainer>
    );
};

const DropdownContainer = styled.div`
    position: relative; display: inline-block; width: 100%;
`;

const DropdownBtn = styled.div`
    width: 100%; height: 56px; border: 2px solid #000; background: #21232b; font-size: 16px; color: #fff; padding: 0 13px 0 13px; display: flex; align-items: center; justify-content: space-between;
    span {display: flex; align-items: center; justify-content: space-between; 
        img {margin-right: 15px; width: 24px; height: 24px; object-fit: contain;}
    }
`;

const DropDownList = styled.div`
    width: 100%; border: 2px solid #000; background: #21232b; font-size: 16px; color: #fff; display: flex; flex-flow: column; position: absolute; top: 54px; left: 0; right: 0; z-index: 1; padding: 10px 0 10px; 
`;

const DropdownItem = styled.div`
    a {
        text-align: left; width: 100%; color: #fff; font-size: 14px; display: flex; align-items: center; padding: 10px 18px;
        &:hover {background: rgba(0,0,0,0.2);}
    }
`;

export default Dropdown;