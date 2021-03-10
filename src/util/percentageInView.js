const percentageInView = (element) => {
  const { top, height } = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  let percentage;
  if (viewportWidth <= 700) {
    percentage = (100 * (viewportHeight - top)) / height;
  } else {
    percentage = (100 * (viewportHeight - top - 40)) / height;
  }
  return percentage;
};

export default percentageInView;
