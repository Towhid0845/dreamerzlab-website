  const sliders = document.querySelectorAll(".slider");
  // interval between switching images
  // can't be less than your animation duration in css!
  const interval = 2800;
  // if you don't want to first animation last longer than other animations
  // set animDuration (in miliseconds) to your value of animation duration in css
  const animDuration = 600;

  for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    const dots = slider.querySelector(".pagination");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    for (let i = 0; i < sliderImgs.length; i++) {
      const dot = document.createElement("input");
      dot.id = "dot-" + i;
      dot.name = "dots";
      dot.type = "radio";
      dot.classList.add("dot");

      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);

      const labels = document.createElement("label");
      const att = document.createAttribute("for");

      // Set the value of the style attribute:
      att.value = "dot-" + i;
      labels.setAttributeNode(att);
      dots.appendChild(labels);
    }
    const pacmandiv = document.createElement("div");
    pacmandiv.classList.add("pacman");
    dots.appendChild(pacmandiv);
    const allDots = document.querySelectorAll(`[id^="dot-"]`);
    const allLabels = document.querySelectorAll(`[for^="dot-"]`);

    const checkedAttr = document.createAttribute("checked");
    // Set the value of the style attribute:
    checkedAttr.value = "checked";
    allDots[0].setAttributeNode(checkedAttr);
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
      if (!nextImg) nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
      } else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];

      currDot.classList.add("active-dot");
      const checkedAttr = document.createAttribute("checked");
      checkedAttr.value = "checked";
      currDot.setAttributeNode(checkedAttr);
      currDot.click();

      prevDot = allDots[prevImg];
      prevLabel = allLabels[prevImg];
      prevDot.classList.remove("active-dot");
      prevDot.removeAttribute("checked");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
      for (let i = 0; i <= num; i++) {
        allLabels[i].classList.add("inactive-dot");
      }
      for (let j = num; j <= sliderImgs.length; j++) {
        allLabels[j]?.classList?.remove("inactive-dot");
      }
      if (num == currImg) return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg) {
        animateSlider(num + 1);
      } else animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
  }