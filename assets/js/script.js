let images = document.querySelectorAll(".images img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let close = document.querySelector(".close");
let gallery = document.querySelector(".gallery");
let galleryImg = document.querySelector(".gallery__inner img");

let currentIdex = 0;

function showGallery() {
	if (currentIdex <= 0) {
		prev.classList.add("hide");
	} else {
		prev.classList.remove("hide");
	}

	if (currentIdex >= images.length - 1) {
		next.classList.add("hide");
	} else {
		next.classList.remove("hide");
	}

	galleryImg.src = images[currentIdex].src;
	gallery.classList.add("show");
}

images.forEach((item, index) => {
	item.addEventListener("click", function () {
		currentIdex = index;
		showGallery();
	});
});

close.addEventListener("click", function () {
	gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
	if (e.keyCode == 27) {
		gallery.classList.remove("show");
	}
});

prev.addEventListener("click", function () {
	currentIdex = currentIdex - 1;
	showGallery();
});

next.addEventListener("click", function () {
	currentIdex = currentIdex + 1;
	showGallery();
});
