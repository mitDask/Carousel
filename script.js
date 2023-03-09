const slider = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");

let page = 0;
const sliderArr = Array.from(slider);
prevBtn.style.display = "none";
// console.log(sliderArr.length);
// console.log(slider.length);

sliderArr.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function carousel() {
  //if page is less than 7(~6), continue showing next
  if (page < sliderArr.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (page > 0) {
    //if page is 0,show only next
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  sliderArr.forEach(function (image) {
    image.style.transform = `translateX(-${page * 100}%)`;
  });

  console.log(sliderArr.length - 1, page);
}

nextBtn.addEventListener("click", function () {
  page++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  page--;
  carousel();
});
