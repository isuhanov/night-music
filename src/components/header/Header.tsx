import * as Styles from '../../styles/components/header';

import Search from './Search';
import { ReactComponent as BergerIcon } from '../../assets/icons/burger.svg';
import ProfileButton from './ProfileButton';


const Header = () => {
    return (
        <Styles.Header>
            <Styles.HeaderControls>
                <Styles.MenuButton>
                    <BergerIcon />
                </Styles.MenuButton>
                <ProfileButton />
            </Styles.HeaderControls>
            <Search />
        </Styles.Header>
    );
}

export default Header;