import SearchIcon from '@mui/icons-material/Search';
import './Searchbar.css';

export const Searchbar = () => {
    return (
        <div className='Searchbar'>
            <input className="Search" type='text' placeholder='Search'/>
            <SearchIcon className='icon'/>
        </div>
    );
}