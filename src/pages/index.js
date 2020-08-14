import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section1 from '../components/Section1/Section1';
import Section2 from '../components/Section2/Section2';
import { HamburgerMenu } from '../components/HamburgerMenu/HamburgerMenu';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal/Modal';

const IndexPage = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <HamburgerMenu />
      <Section1 />
    </>
  );
};

export default IndexPage;
