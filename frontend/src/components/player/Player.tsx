import * as Styles from '../../styles/components/player';

import TimeLine from './timeline/TimeLine';
import TrackControls from './controls/TrackControls';

const Player = () => {
    return (
        <Styles.Player data-testid='player'>
            <TimeLine />
            <TrackControls />
        </Styles.Player>
    );
}

export default Player;