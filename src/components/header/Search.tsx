import * as Styles from '../../styles/components/header';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const Search = () => {
    return (
        <Styles.Search>
            <Styles.SearchInput placeholder='Поиск...'/>
            <Styles.SearchButton type='button'>
                <SearchIcon />
            </Styles.SearchButton>
        </Styles.Search>
    );
}

export default Search;