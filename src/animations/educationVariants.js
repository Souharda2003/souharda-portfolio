export const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const leftCard = {
  hidden: {
    opacity: 0,
    x: -80
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const rightCard = {
  hidden: {
    opacity: 0,
    x: 80
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const headerVariant = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
};