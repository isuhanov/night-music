import * as Styles from '../../../styles/components/player';

import { ReactComponent as MusicIcon } from '../../../assets/icons/Music.svg';


const TrackInfo = () => {
    return (
        <Styles.TrackInfo>
            <Styles.TrackImg>
                <MusicIcon />
            </Styles.TrackImg>
            <Styles.TrackNameContainer>
                <Styles.TrackName>Название песни</Styles.TrackName>
                <Styles.TrackAuthor>Исполнитель</Styles.TrackAuthor>
            </Styles.TrackNameContainer>
        </Styles.TrackInfo>
    )
}

export default TrackInfo;