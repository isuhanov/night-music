import * as Common from './styles/components/common';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Menu from './components/menu/Menu';

import { useMenu } from './hooks/useMenu';

const App = () => {

    const { menuVisible } = useMenu();
    return (
        <Common.Body>
            <Common.Content>
                <Header />
                <Common.Main />
                { menuVisible && <Menu /> }
            </Common.Content>
            <Player />
        </Common.Body>
    );
}

export default App;
