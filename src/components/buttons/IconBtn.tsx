import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import styles from './styles.module.scss';

interface IProps {
  iconBtnName?: string;
}

const IconBtn = ({ iconBtnName }: IProps) => {
  return (
    <div>
      {' '}
      <button className={styles.contactBtn}>
        Contact{' '}
        <i>
          <BsArrowRight />
        </i>
      </button>
    </div>
  );
};

export default IconBtn;
