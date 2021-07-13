import { FC, useState } from 'react';

import Link from '../Link';
import ProfileSidebar from '../ProfileSidebar';
import { Wrapper, Logo } from './styles';

const MENU_ACTIONS = [
  { name: 'Inicio', slug: '/' },
  { name: 'Amigos', slug: '/amigos' },
  { name: 'Comunidades', slug: '/comunidades' }
];

interface MenuProps {
  username: string;
}

const Menu: FC<MenuProps> = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <Logo src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {MENU_ACTIONS.map(menuItem => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href="/logout">Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button type="button" onClick={toggleMenuHandler}>
          {isMenuOpen && (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/menu-open.svg?v=${process.env.NEXT_PUBLIC_VERSION}`}
              alt=""
            />
          )}
          {!isMenuOpen && (
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/menu-closed.svg?v=${process.env.NEXT_PUBLIC_VERSION}`}
              alt=""
            />
          )}
        </button>
      </div>
      <ProfileSidebar username={username} />
    </Wrapper>
  );
};

export default Menu;
