import { FormEvent, FC, useState, useEffect } from 'react';

import MainGrid from '../components/MainGrid';
import Box from '../components/Box';
import Menu from '../components/Menu';
import ProfileSidebar from '../components/ProfileSidebar';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import NetworkGrid, { Network } from '../components/NetworkGrid';

const USER = 'pablomaribondo';
const COMMUNITIES = [
  {
    id: 'community1',
    url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    name: 'Eu odeio acordar cedo'
  }
];

const Home: FC = () => {
  const [communities, setCommunities] = useState<Network[]>(COMMUNITIES);
  const [followers, setFollowers] = useState([]);
  const [user, setUser] = useState({ following: 0 });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/users/${USER}/following`
      );

      const data = await response.json();

      const formattedData = data.map((element: any) => ({
        id: element.id,
        url: element.html_url,
        image: element.avatar_url,
        name: element.login
      }));
      setFollowers(formattedData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${USER}`);

      const data = await response.json();

      setUser(data);
    })();
  }, []);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const community: Network = {
      id: new Date().toISOString(),
      name: formData.get('name'),
      image: formData.get('image'),
      url: formData.get('url')
    };

    setCommunities(prevState => [...prevState, community]);
  };

  return (
    <>
      <Menu username={USER} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <Box as="aside">
            <ProfileSidebar username={USER} />
          </Box>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={submitHandler}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  name="name"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  aria-label="Coloque uma URL para usarmos de capa"
                  name="image"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de link"
                  aria-label="Coloque uma URL para usarmos de link"
                  name="url"
                  type="text"
                />
              </div>

              <button type="submit">Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <NetworkGrid
            title="Meus amigos"
            data={followers}
            length={user?.following}
          />
          <NetworkGrid title="Minhas comunidades" data={communities} />
        </div>
      </MainGrid>
    </>
  );
};

export default Home;
