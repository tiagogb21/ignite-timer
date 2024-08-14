import { Link, NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg';
import {Timer, Scroll} from 'phosphor-react';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/' >
                <img src={logo} alt="ignite timer logo, dois triângulos verdes sobreposicionados" />
            </Link>
            <nav>
                <NavLink to='/' title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to='/history' title="history">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
};
