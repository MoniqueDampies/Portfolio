<template>
    <div class="work">
        <div class="row main center">
            <div class="box center col-md-6 col-lg-4 col-sm-12" v-for="item of ProjectsArray" :key="item.id">
                <div class="projects-card project-one mb-5" :style="item.image">
                    <div class="project-info-container">
                        <h3 class="project-title">
                            {{ item.title }}</h3>
                        <span class="project-load-bar"></span>
                        <p class="project-short-desc">
                            {{ item.text }}</p>
                        <div class="row">
                            <button class="project-btn hover-border col-sm-2"> <a :href="item.live">
                                    LIVE</a> </button>
                            <button class="project-btn hover-border col-sm-2"> <a :href="item.link">
                                    GITHUB</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            "ProjectsArray": [
                {
                    "id": 1,
                    "image": "background-image: url(https://i.postimg.cc/65zwVV13/to-do-app.jpg)",
                    "title": "To-Do App",
                    "text": "To Do App built using HTML5, CSS3, Bootstrap and Javascript",
                    "live": "https://monique-to-do-app.netlify.app",
                    "link": "https://github.com/MoniqueDampies/ToDoApp"
                },
                {
                    "id": 2,
                    "image": "background-image: url(https://i.postimg.cc/VLzmbZgp/group-project.jpg)",
                    "title": "Group website",
                    "text": "A group project where I built a page about the group members favorite music built using HTML5, CSS3 and Bootstrap",
                    "live": "https://groupassignment.netlify.app/",
                    "link": "https://github.com/Emivw/college1"
                },
                {
                    "id": 3,
                    "image": "background-image: url(https://i.postimg.cc/T3wxtyZc/jellyfish.jpg)",
                    "title": "Jellyfish website",
                    "text": "A basic HTML5 and CSS3 site built to practice iframes and transitions",
                    "live": "https://jelliefishies.netlify.app/",
                    "link": "https://github.com/MoniqueDampies/jellyfish"
                },
                {
                    "id": 4,
                    "image": "background-image: url(https://i.postimg.cc/66rBqxrC/interest-calculator.jpg)",
                    "title": "Interest Calculator",
                    "text": "A Simple and Compound Interest Calculator built using HTML5, CSS3, Bootstrap and Javascript",
                    "live": "https://monique-interestamount-calculator.netlify.app",
                    "link": "https://github.com/MoniqueDampies/InterestAmount"
                },
                {
                    "id": 5,
                    "image": "background-image: url(https://i.postimg.cc/Bb0spm08/bmi-calulator.jpg)",
                    "title": "BMI Calculator",
                    "text": "Body Mass Index calculator built using HTML5, CSS3, Bootstrap and Javascript ",
                    "live": "https://monique-bmi-calculator.netlify.app",
                    "link": "https://github.com/MoniqueDampies/BMI-Calculator"
                },
                {
                    "id": 6,
                    "image": "background-image: url(https://i.postimg.cc/kGvCpWJT/calculator.jpg)",
                    "title": "Javascript Calculator",
                    "text": "A Simple Javascript Calculator built with HTML5, CSS3, Bootstrap and Javascript",
                    "live": "https://monique-javascript-calculator.netlify.app",
                    "link": "https://github.com/MoniqueDampies/JS-Calculator"
                }
            ]
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap');

/* variables */
:root {
    /* Color */
    --main-color: #e2e2f0;
    --secondary-color: rgb(14, 13, 13);
    /* Font-size */
    --font-size-main-title: 6rem;
    --font-size-secondary-title: 2.5rem;
    --font-size-section-title: 3rem;
    --font-size-project-title: 5em;
    --font-size-text: 1.2rem;
    --font-size-btn: 1.6rem;
}

.projects-card {
    position: relative;
    width: 25em;
    height: 30em;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .2);
    padding: 1em;
    background-position: center center;
    background-size: cover;
    transition: 1s;
    /* border: 2px solid black; */
    overflow-y: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.project-info-container {
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    padding: 0 1em 1em 1em;
    overflow: hidden;
}

.project-title {
    font-size: 1.4rem;
    color: var(--main-color);
    font-weight: 800;
    text-transform: uppercase;
    margin: 1em 0 .3em 0;
    transition: .3s;
}

.project-load-bar {
    width: 0;
    height: 3px;
    background: var(--main-color);
    margin: 0;
}

.projects-card:hover {
    transform: scale(1.05);
}

.projects-card:hover .project-info-container {
    top: 50%;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1em;
    background: linear-gradient(hsl(0 0% 0% / 0), hsl(20 0% 0% / 0.3) 10%, hsl(0 0% 0% / 1));
}

.project-short-desc {
    font-weight: bold;
}

.project-short-desc,
.project-btn {
    font-size: var(--font-size-text);
    color: #fff;
    /* margin: 1em 0 0 0; */
    display: none;
    opacity: 0;
    font-weight: 200;
}

.project-btn {
    max-width: 10em;
    padding: .7em 0;
    /* margin: 1.5em 0; */
    display: none;
    justify-content: center;
    border: none;
    border-radius: 15px;
    background: var(--main-color);
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    transition: .5s;
}

.project-btn a {
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    justify-self: center;
    text-decoration: none;
}

.project-btn:hover {
    transform: scale(1.05);
}


.projects-card:hover .project-title {
    color: #fff;
}

.projects-card:hover .project-load-bar {
    display: flex;
    transition: opacity 1s ease;
    animation: project-load-animation 1s ease .1s forwards;
}

.projects-card:hover .project-short-desc {
    display: flex;
    transition: opacity 1s ease;
    animation: project-infos-animation .4s ease .4s forwards;
}

.projects-card:hover .project-btn {
    display: flex;
    transition: opacity 1s ease;
    animation: project-infos-animation .4s ease .4s forwards;
}


@keyframes project-load-animation {
    0% {
        width: 0;
    }

    15% {
        width: 0vw;
    }

    25% {
        width: 0vw;
    }

    50% {
        width: 35vw;
    }

    65% {
        width: 50vw;
    }

    75% {
        width: 75vw;
    }

    100% {
        width: 100vw;
    }
}


@keyframes project-infos-animation {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.hover-border {
    display: inline-block;
    position: relative;
    left: 6rem;
    color: #ffffff;
    cursor: pointer;
    margin: 10px;
}

.hover-border:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 2px;
    margin-left: 10px;
    left: 0;
    background: #ffffff;
    transition: 500ms cubic-bezier(.8, 0, .2, 1);
    z-index: -1;
}

.hover-border:hover:after {
    width: 3rem;
}

@media only screen and (max-width: 790px) {
    .projects-card {
        position: relative;
        /* left: -2.5rem; */
        width: 17rem;
        height: 25em;
        padding-bottom: 1rem;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .projects-card:hover .project-info-container {
        top: 30%;
    }

    .row {
        flex-direction: row;
    }

    .project-btn {
        position: relative;
        bottom: 1.2rem;
        left: 1.9rem;
        padding: 0;
    }

}

@media only screen and (max-width: 326px) {
    .projects-card {
        position: relative;
        left: -2.5rem;
        width: 17rem;
        height: 25em;
        padding-bottom: 1rem;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .hover-border:hover:after {
        width: 8.4rem;
    }
}
</style>