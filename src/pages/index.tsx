import MainGrid from '../components/MainGrid';
import Box from '../components/Box';
import Menu from '../components/Menu';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';

const ProfileSidebar = ({ username }) => (
  <Box>
    <img
      src={`https://github.com/${username}.png`}
      style={{ borderRadius: '8px' }}
    />
  </Box>
);

const Home = () => {
  const githubUser = 'pablomaribondo';
  const friends = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <>
      <Menu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar username={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Meus amigos ({friends.length})</h2>
            <ul>
              {friends.map(friend => (
                <li key={friend}>
                  <a href={`/users/${friend}`}>
                    <img src={`https://github.com/${friend}.png`} />
                    <span>{friend}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
};

export default Home;
