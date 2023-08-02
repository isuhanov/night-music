import * as Common from './styles/components/common';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Menu from './components/menu/Menu';

const App = () => {
    return (
        <Common.Body>
            <Common.Content>
                <Header />
                <Menu />
                <Common.Main />
            </Common.Content>
            <Player />
        </Common.Body>
    );
}

export default App;
