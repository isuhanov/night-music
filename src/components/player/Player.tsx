import * as Styles from '../../styles/components/player';

import TimeLine from './timeline/TimeLine';
import TrackControls from './controls/TrackControls';

const Player = () => {
    return (
        <Styles.Player>
            <TimeLine />
            <TrackControls />
        </Styles.Player>
    );
}

export default Player;