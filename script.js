// typographic scroll effect

const sections = [...document.querySelectorAll("section")]

let options = {
  rootMargin: "0px",
  threshold: 0.35
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
		const { target } = entry
		
		if (entry.intersectionRatio >= 0.35) {
			target.classList.add("is-visible")
		} else {
			target.classList.remove("is-visible")
		}
  })
}

const observer = new IntersectionObserver(callback, options)

sections.forEach((section, index) => {
	const sectionChildren = [...section.querySelector('.text-grid').children]

  sectionChildren.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 100}ms`)
  })
	
  observer.observe(section)
})

//about menu
$("#enter-nav").on({
  click: function() {
    $("#about").css("opacity", "1");
    $("#about").fadeToggle(700);
  }
});
$("#leave-nav").on({
  click: function() {
    $("#about").fadeToggle(700);
  }
});

//section revealer

//hover effects

// progress marker

