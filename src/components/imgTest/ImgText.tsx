import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IconBtn from '../buttons/IconBtn';
import MainBtn from '../buttons/MainBtn';

import styles from './styles.module.scss';

interface IProps {
  subtitle: string;
  mainHeading: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  mainBtnName: string;
  secondBtnName?: string;
  containerDirection?: string;
  textColStyle?: any;
  hideIconBtn?: boolean;
  children?: React.ReactNode;
}

const ImgText = ({
  subtitle,
  mainHeading,
  description,
  imgSrc,
  imgAlt,
  mainBtnName,
  secondBtnName,
  containerDirection,
  textColStyle,
  hideIconBtn,
  children,
}: IProps) => {
  return (
    <>
      <Container className={styles.heroDiv}>
        <Row className={containerDirection}>
          <Col className={textColStyle}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.mainTitle}>{mainHeading}</h1>
            <p className={styles.description}>{description}</p>
            <div>{children}</div>
            <div className={styles.btnDiv}>
              <MainBtn btnName={mainBtnName} />
              {!hideIconBtn && <IconBtn iconBtnName={secondBtnName} />}
            </div>
          </Col>
          <Col className={styles.imgCol}>
            <img src={imgSrc} alt={imgAlt} className={styles.sectionImg} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImgText;
