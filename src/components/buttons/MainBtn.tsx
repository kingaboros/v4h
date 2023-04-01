import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  btnName: string;
}

const MainBtn = ({ btnName }: IProps) => {
  return (
    <>
      <button className={styles.mainBtn}>{btnName}</button>
    </>
  );
};

export default MainBtn;
