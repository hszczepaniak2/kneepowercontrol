import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { HambugerNavigation } from './HambugerNavigation';

const StyledNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  display: none;
  z-index: 999;

  @media (max-width: 400px) {
    display: block;
  }
`;

const StyledBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  background: linear-gradient(
    90deg,
    rgba(79, 77, 165, 1) 0%,
    rgba(40, 39, 83, 1) 100%
  );
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 160px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const HamburgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <StyledNav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <StyledBackground className="background" variants={sidebar} />
      <HambugerNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </StyledNav>
  );
};
