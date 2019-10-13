// one page scroll

const sections = $(".section");
const display = $('.one-page-scroll');
let inScroll = false;


const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const countPositionPercent = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemEq) => {
  elems
    .eq(elemEq)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const unBlockScroll = () => {
  const transitionDuration = 1000;
  const touchScrollInertionTime = 300;

  setTimeout(() => {
    inScroll = false;
  }, transitionDuration + touchScrollInertionTime);
};


const performTransition = sectionEq => {
  if (inScroll) return;

  inScroll = true;
  const position = countPositionPercent(sectionEq);
  const switchFixedMenuClass = () => switchActiveClass($(".paginator__item"), sectionEq);

  switchFixedMenuClass();
  switchActiveClass(sections, sectionEq);

  display.css({
    transform: `translateY(${position})`
  });

  unBlockScroll();
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "next" : "prev";
    scrollViewport(direction);
  },
  keydown: e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs) return;

    switch (e.keyCode) {
      case 40:
        scrollViewport("next");
        break;

      case 38:
        scrollViewport("prev");
        break;
    }
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});


$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
});


// разрешаем свайп на мобильниках
if (isMobile) {
  window.addEventListener(
    "touchmove",
    e => {
      e.preventDefault();
    }, {
      passive: false
    }
  );

  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirecrion;
      if (direction === "up") scrollDirecrion = "next";
      if (direction === "down") scrollDirecrion = "prev";
      scrollViewport(scrollDirecrion);
    }
  });
}
