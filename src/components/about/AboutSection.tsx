import React from 'react';
import { Col, Row } from 'react-bootstrap';

import ImgText from '../imgTest/ImgText';

import aboutImg from '../../assets/img/about-img.png';
import progressImg from '../../assets/img/progress.png';
import dmIcon from '../../assets/img/dm-icon.png';
import devIcon from '../../assets/img/dev-icon.png';

import styles from './styles.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <ImgText
        textColStyle={styles.aboutTextCol}
        containerDirection={styles.aboutRow}
        subtitle="We create ideas & policies for your company future"
        mainHeading="Smart Digital Agency For Your Business To Succeed"
        description="Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Old World knifefish pike conger burbot pollock herring? Tetra electric eel jellynose fish inconnu murray cod treefish false trevally orangespine."
        imgSrc={aboutImg}
        imgAlt="about img"
        mainBtnName="Learn more"
        hideIconBtn={true}
      >
        <div className={styles.iconsSection}>
          <Row>
            <Col sm={1} md={1} lg={1}>
              <img src={dmIcon} alt="" className={styles.icon} />
            </Col>
            <Col>
              <h4 className={styles.iconTitle}>Digital Marketing</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={1} lg={1}></Col>
            <Col>
              <p className={styles.iconDesc}>
                Ballan wrasse climbing gourami amur pike Arctic char, steelhead
                sprat sea lamprey grunion. Old World knifefish pike conger
                burbot pollock herring?
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={1} lg={1}>
              <img src={devIcon} alt="" className={styles.icon} />
            </Col>
            <Col>
              <h4 className={styles.iconTitle}>Content Development</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={1} md={1} lg={1}></Col>
            <Col>
              <p className={styles.iconDesc}>
                Ballan wrasse climbing gourami amur pike Arctic char, steelhead
                sprat sea lamprey grunion. Old World knifefish pike conger
                burbot pollock herring?
              </p>
            </Col>
          </Row>
          <div className={styles.progressDiv}>
            <img src={progressImg} alt="" />
          </div>
        </div>
      </ImgText>
    </div>
  );
};

export default AboutSection;
