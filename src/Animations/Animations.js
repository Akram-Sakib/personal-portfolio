// Header Animation
export const navAnimationLogo = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1, type: "spring" },
  },
};



// Banner Animations

export const bannerLeftVariant = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 1.5, type: "spring" },
  },
};

export const bannerRightVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 2, type: "spring" },
  },
};

// Services Animations

export const serviceAnimation = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: 1.5, type: "spring" },
  }
}
