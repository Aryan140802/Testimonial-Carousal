const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
		name: "Susan Smith",
		profession: "WEB DEVELOPER",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"
	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
		name: "Anna Grey",
		profession: "UFC FIGHTER",
		description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
		name: "Branson Cook",
		profession: "ACTOR",
		description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"	},

	{
		photo:
			"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
		name: "Peter Parker",
		profession: "PROFESSIONAL",
		description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"	},

        {
            photo:
                "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
            name: "Alex Jones",
            profession: "Karate Teacher",
            description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"},

            {
                photo:
                    "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
                name: "Mike Dean",
                profession: "DJ",
                description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque fuga culpa hic rem repudiandae accusamus iure enim! Culpa blanditiis impedit vitae magnam non maxime aliquid eaque excepturi iusto iste, pariatur facilis voluptatum cupiditate deserunt beatae sequi iure cumque, eligendi corrupti necessitatibus praesentium sed veritatis minima. Exercitationem quis voluptas reprehenderit deserunt cupiditate corrupti totam laborum!"}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);



window.addEventListener("resize", () => {
	description.style.height = "100%";
});
