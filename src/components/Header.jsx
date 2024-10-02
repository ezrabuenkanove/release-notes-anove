import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='public/Primary Logo on Dark BG.svg'></img>
            </div>
            <a href="https://www.anove.ai" className="website">
                <img src='public/web_icon_black.svg' />
            </a>
        </div>
    )
}

export default Header;