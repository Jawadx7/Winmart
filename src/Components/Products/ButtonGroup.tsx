interface Props{
    next: unknown,
    previous: unknown,
    goToSlide: unknown,
}

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: Props) => {
    // const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group"> // remember to give it position:absolute
        {/* <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>l</button>
        <button onClick={() => next()}>r</button>
        <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
      </div>
    );
  };

export default ButtonGroup