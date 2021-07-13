import { FC } from 'react';

import { Wrapper } from './styles';

interface ProfileSidebarProps {
  username: string;
}

const ProfileSidebar: FC<ProfileSidebarProps> = ({ username }) => {
  return (
    <div className="profileSidebar">
      <div>
        <img
          src={`https://github.com/${username}.png`}
          style={{ borderRadius: '8px' }}
          alt="Profile"
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${username}`}>
            @{username}
          </a>
        </p>
        <hr />

        <Wrapper>
          <nav>
            <a href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/user.svg`}
                alt=""
              />
              Perfil
            </a>
            <a href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/book.svg`}
                alt=""
              />
              Recados
            </a>
            <a href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/camera.svg`}
                alt=""
              />
              Fotos
            </a>
            <a href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/sun.svg`}
                alt=""
              />
              Depoimentos
            </a>
          </nav>
          <hr />
          <nav>
            <a href="/">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/plus.svg`}
                alt=""
              />
              GitHub Trends
            </a>
            <a href="/logout">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}//icons/logout.svg`}
                alt=""
              />
              Sair
            </a>
          </nav>
        </Wrapper>
      </div>
    </div>
  );
};

export default ProfileSidebar;
