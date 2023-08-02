import * as Styles from '../../styles/components/menu';

import { ReactComponent as HomeIcon } from '../../assets/icons/menu/home.svg';
import { ReactComponent as TraksIcon } from '../../assets/icons/menu/traks.svg';
import { ReactComponent as PlaylitsIcon } from '../../assets/icons/menu/playlits.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/menu/history.svg';
import { useMenu } from '../../hooks/useMenu';

const MenuItems = () => {
    const { closeMenu } = useMenu();

    return (
        <Styles.MenuItemsWrapper onClick={closeMenu}>
            <Styles.MenuItem showFill={false}>
                <HomeIcon />
                <Styles.MenuItemName>Главная</Styles.MenuItemName>
            </Styles.MenuItem>
            <Styles.MenuItem showStroke={false}>
                <TraksIcon />
                <Styles.MenuItemName>Треки</Styles.MenuItemName>
            </Styles.MenuItem>
            <Styles.MenuItem showStroke={false}>
                <PlaylitsIcon />
                <Styles.MenuItemName>Плейлисты</Styles.MenuItemName>
            </Styles.MenuItem>
            <Styles.MenuItem showStroke={false}>
                <HistoryIcon />
                <Styles.MenuItemName>История</Styles.MenuItemName>
            </Styles.MenuItem>
        </Styles.MenuItemsWrapper>
    )
}

export default MenuItems;