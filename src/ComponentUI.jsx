import logoimage from './logo.jpg';

function Header () {
    return (
        <div class='header'>
            <img className='header-image' src={logoimage} alt='logo'></img>
            <h1>Welcome to the product page!</h1>
        </div>
    )
}

export default Header