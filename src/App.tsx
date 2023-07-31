import * as Common from './styles/components/common';
import Header from './components/header/Header';
import Player from './components/player/Player';

const App = () => {
    return (
        <Common.Body>
            <Header />
            <Common.Main />
            <Player />
        </Common.Body>
    );
}

export default App;
