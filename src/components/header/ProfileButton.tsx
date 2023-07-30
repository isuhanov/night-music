import * as Styles from '../../styles/components/header';

import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg';

const ProfileButton = () => {
    return (
        <Styles.ProfileButton>
            <AvatarIcon /> 
        </Styles.ProfileButton>
    )
}

export default ProfileButton;