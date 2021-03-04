const percentageInView = (element) => {
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  console.log(viewportHeight, scrollTop, elementOffsetTop, elementHeight);

  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round(
    distance / ((viewportHeight + elementHeight) / 100)
  );

  return Math.min(100, Math.max(0, percentage));
};

export default percentageInView;
