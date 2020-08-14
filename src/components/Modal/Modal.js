import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import ImageComparison from '../ImageComparison';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 1 },
  },
};

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const StyledModal = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 3;
`;

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <StyledBackdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <StyledOverlay onClick={() => setShowModal(!showModal)} />
          <StyledModal variants={modal}>
            <div className="">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium ad, cum dignissimos enim ex exercitationem fugiat
                molestiae nam nostrum numquam obcaecati quae quaerat quam
                quibusdam, ratione rerum saepe vel veritatis?
              </div>
              <div>
                Adipisci assumenda cupiditate debitis dolor dolorem, expedita
                libero molestiae necessitatibus nesciunt nostrum, obcaecati
                porro quam quidem ratione ullam. Culpa eligendi exercitationem
                numquam omnis quisquam reprehenderit, temporibus? Assumenda
                excepturi nemo reiciendis.
              </div>
            </div>
          </StyledModal>
        </StyledBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
