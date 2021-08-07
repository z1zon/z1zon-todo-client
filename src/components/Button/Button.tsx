import React, { FC } from 'react';

export type Props = {
  size?: 'small' | 'medium' | 'large';
};

const Button: FC<Props> = (props) => {
  const { size = 'medium' } = props;
  return (
    <>
      {size === 'small' && <div>small</div>}
      {size === 'medium' && <div>medium</div>}
      {size === 'large' && <div>large</div>}
    </>
  );
};

export default Button;
