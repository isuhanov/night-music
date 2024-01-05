import * as Styles from '../../styles/components/header';

import Search from './Search';
import { ReactComponent as BergerIcon } from '../../assets/icons/burger.svg';
import ProfileButton from './ProfileButton';
import { useMenu } from '../../hooks/useMenu';


const Header = () => {
    const { changeStateMenu } = useMenu();
    
    return (
        <Styles.Header data-testid='header'>
            <Styles.HeaderControls>
                <Styles.MenuButton onClick={changeStateMenu} data-testid='menu-button'>
                    <BergerIcon />
                </Styles.MenuButton>
                <ProfileButton />
            </Styles.HeaderControls>
            <Search />
        </Styles.Header>
    );
}

export default Header;