import portfolioData from "../components/Porfolio/PortfolioContainer/data";

const shufflePortfolioElements = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Event listener for the shuffle button
portfolioData.forEach((group) => {
    const tabId = `pill-${group.groupName}-tab`;
    document.addEventListener('DOMContentLoaded', () => {
        const tabButton = document.getElementById(tabId);
        if (tabButton) {
            tabButton.addEventListener('click', function() {
                const wrapper = document.querySelector(`#pills-${group.groupName} #wrapper`);
                if (!wrapper) return;
                const elementsArray = Array.from(wrapper.children);
                const shuffledArray = shuffleArray(elementsArray);
                elementsArray.forEach(element => wrapper.removeChild(element));
                shuffledArray.forEach(element => wrapper.appendChild(element));
            });
        }
    });
});
};

export default shufflePortfolioElements;