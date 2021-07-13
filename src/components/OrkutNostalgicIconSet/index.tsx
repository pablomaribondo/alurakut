import { FC } from 'react';

import { List } from './OrkutNostalgicIconSet.styles';

interface OrkutNostalgicIconSetProps {
  [key: string]: number;
}

const OrkutNostalgicIconSet: FC<OrkutNostalgicIconSetProps> = props => {
  return (
    <List>
      {[
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' }
      ].map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: 'title' }}
            className="OrkutNostalgicIconSet__title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: 'number' }}
          >
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
              alt=""
            />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}
      {[
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' }
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;

        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number"
              style={{ gridArea: 'number' }}
            >
              {[0, 1, 2].map((element, index) => {
                const isHeartActive = index <= total - 1;

                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${element}`}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/icons/${icon}.svg`}
                    style={{
                      marginRight: '2px',
                      opacity: isHeartActive ? 1 : '0.5'
                    }}
                    alt=""
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </List>
  );
};

export default OrkutNostalgicIconSet;
