import * as Styles from '../../styles/components/menu';

import MenuItems from './MenuItem';
import { ReactComponent as Settings } from '../../assets/icons/menu/settings.svg';


const Menu = () => {
    return (
        <Styles.Menu>
            <MenuItems />
            <Styles.MenuItem showFill={false}>
                <Settings />
                <Styles.MenuItemName>Настройки</Styles.MenuItemName>
            </Styles.MenuItem>
        </Styles.Menu>
    )
}

export default Menu;