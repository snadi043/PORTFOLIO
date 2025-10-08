const ScrollToElement = (ref) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behaviour: 'smooth',
    });
}

export default ScrollToElement;