import * as Styles from '../../../styles/components/player';

import { ReactComponent as Backward } from '../../../assets/icons/controls/backward.svg';
import { ReactComponent as Forward } from '../../../assets/icons/controls/forward.svg';
import { ReactComponent as Play } from '../../../assets/icons/controls/play.svg';

const PlaybackControls = () => {
    return (
       <>
            <Styles.ControlsBtn type='button' typeSize='side'>
                <Backward />
            </Styles.ControlsBtn>
            <Styles.ControlsBtn type='button' typeSize='main'>
                <Play />
            </Styles.ControlsBtn>
            <Styles.ControlsBtn type='button' typeSize='side'>
                <Forward />
            </Styles.ControlsBtn>
       </>
    )
}

export default PlaybackControls;