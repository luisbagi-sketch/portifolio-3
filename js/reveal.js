const cards = document.querySelectorAll(".cardlist .card");

function reveal(card) {
	card.classList.add("animate__animated", "animate__fadeInUp");
}

if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					reveal(entry.target);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	cards.forEach((card, index) => {
		card.style.animationDelay = `${(index % 3) * 0.12}s`;
		observer.observe(card);
	});
} else {
	cards.forEach(reveal);
}