import { FC, useState } from 'react';

import Link from '../Link';
import MenuProfileSidebar from '../MenuProfileSidebar';
import { Wrapper, Logo } from './Menu.styles';

interface MenuProps {
  username: string;
}

const Menu: FC<MenuProps> = ({ username }) => {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <Logo src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[
            { name: 'Inicio', slug: '/' },
            { name: 'Amigos', slug: '/amigos' },
            { name: 'Comunidades', slug: '/comunidades' }
          ].map(menuItem => (
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

        <button type="button" onClick={() => setMenuState(!isMenuOpen)}>
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
      <MenuProfileSidebar username={username} />
    </Wrapper>
  );
};

export default Menu;
