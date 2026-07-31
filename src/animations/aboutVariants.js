export const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7
    }
  }
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7
    }
  }
};