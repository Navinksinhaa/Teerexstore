import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css';
export const Header = () => {

    return (
        <div className = 'header'>
            <h1>TeeRex Store</h1>
            <h1 className='products'>Products</h1>
            <div className="basket">
            <AddShoppingCartIcon fontSize='large'/>
            <span>1</span>

            </div>
            


        </div>

    );
}