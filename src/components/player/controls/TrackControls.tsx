import * as Styles from '../../../styles/components/player';
import OrderControls from './OrderControls';

import PlaybackControls from './PlaybackControls';
import TrackInfo from './TrackInfo';


const TrackControls = () => {
    return (
        <Styles.TrackControls>
            <PlaybackControls />
            <TrackInfo />
            <OrderControls />
        </Styles.TrackControls>
    )
}

export default TrackControls;