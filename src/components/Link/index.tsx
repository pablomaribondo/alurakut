import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink passHref href={href}>
      <a {...props} rel="noreferrer">
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
