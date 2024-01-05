import * as Styles from '../../../styles/components/player';

import { ReactComponent as Burger } from '../../../assets/icons/controls/burger-controls.svg';
import { ReactComponent as Repeat } from '../../../assets/icons/controls/repeat.svg';
import { ReactComponent as Shuffle } from '../../../assets/icons/controls/shuffle.svg';


const OrderControls = () => {
    return (
        <>
            <Styles.ControlsBtn type='button' typeSize='main'>
                <Burger />
            </Styles.ControlsBtn>
            <Styles.ControlsBtn type='button' typeSize='main' showFill={false}>
                <Repeat />
            </Styles.ControlsBtn>
            <Styles.ControlsBtn type='button' typeSize='main' showFill={false}>
                <Shuffle />
            </Styles.ControlsBtn>
        </>
     )
}

export default OrderControls;