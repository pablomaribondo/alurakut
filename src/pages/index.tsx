import { FormEvent, FC, useState } from 'react';

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
const FRIENDS = [
  {
    id: 'friend1',
    url: '/users/juunegreiros',
    image: 'https://github.com/juunegreiros.png',
    name: 'juunegreiros'
  },
  {
    id: 'friend2',
    url: '/users/omariosouto',
    image: 'https://github.com/omariosouto.png',
    name: 'omariosouto'
  },
  {
    id: 'friend3',
    url: '/users/peas',
    image: 'https://github.com/peas.png',
    name: 'peas'
  },
  {
    id: 'friend4',
    url: '/users/rafaballerini',
    image: 'https://github.com/rafaballerini.png',
    name: 'rafaballerini'
  },
  {
    id: 'friend5',
    url: '/users/marcobrunodev',
    image: 'https://github.com/marcobrunodev.png',
    name: 'marcobrunodev'
  },
  {
    id: 'friend6',
    url: '/users/felipefialho',
    image: 'https://github.com/felipefialho.png',
    name: 'felipefialho'
  },
  {
    id: 'friend7',
    url: '/users/diego3g',
    image: 'https://github.com/diego3g.png',
    name: 'diego3g'
  }
];
const Home: FC = () => {
  const [communities, setCommunities] = useState<Network[]>(COMMUNITIES);

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
          <NetworkGrid title="Meus amigos" data={FRIENDS} />
          <NetworkGrid title="Minhas comunidades" data={communities} />
        </div>
      </MainGrid>
    </>
  );
};

export default Home;
