import { FC } from 'react';

import { Wrapper } from './styles';

export type Network = {
  id: string;
  url: string;
  image: string;
  name: string;
};

interface NetworkGridProps {
  title: string;
  data: Network[];
  length?: number;
}

const NetworkGrid: FC<NetworkGridProps> = ({ title, data, length }) => {
  return (
    <Wrapper>
      <h2 className="smallTitle">
        {title} ({length || data.length})
      </h2>
      <ul>
        {data.slice(0, 6).map(element => (
          <li key={element.id}>
            <a href={element.url}>
              <img src={element.image} alt="Profile" />
              <span>{element.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default NetworkGrid;
