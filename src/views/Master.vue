<template>
    <section id="master">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-sm-12 col-md-8">
                    <h5 class="font-alt col-sm-12">Hello, I'm Monique</h5>
                    <p class="home-text text-white">
                        I'm an aspiring web developer based in Cape Town. I create
                        websites with a focus on UI and UX.
                    </p>
                    <div class="btn-bar">
                        <a class="btn btn-gradient gradient3 mywrkbtn" href="#projects">My Work</a>
                        <a class="btn btn-gradient gradient3" href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section -->
    <section id="About" class="container">
        <div id="row" class="row justify-content-center">
            <div class="col-md-6 col-sm-12 mt-2 text-center img-fluid">
                <img class="profile-image rounded-pill" src="https://i.postimg.cc/8CDxpCcs/myprofile-removebg.png"
                    alt="my picture" />
            </div>
            <div id="aboutText" class="col-md-6 col-sm-12 about-pad pt-4">
                <div class="about-left">
                    <h2 class="h1">I'm Monique Dampies</h2>
                    <h3 class="text-black mx-1">
                        An aspiring web developer based in Cape Town
                    </h3>
                    <p class="h4">
                        Welcome to my digital portfolio! I'm happy you're here :)
                    </p>
                    <p class="h3">
                        Here you can get to know me a little more and watch my growth as a
                        young aspiring developer.
                    </p>
                    <p class="h3">
                        While you are here don't forget to check out some of my
                        <a class="m-btn-link theme-after" href="#projects"> Projects. </a>
                    </p>
                    <a class="btn btn-gradient gradient3 mt-4" href="#contact">
                        Contact me
                        <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <section id="AboutCards">
        <div class="container">
            <div class="row">
                <AboutCard />
            </div>
        </div>
    </section>
    <!-- Skills Section -->
    <!-- SECTION HEADING -->
    <div class="row justify-content-center m-60px-b md-m-40px-b">
        <div class="col-sm-12 col-md-10 col-lg-7">
            <div class="section-title text-center text-black">
                <h2 class="contact-text text-black mt-4">My Skills</h2>
            </div>
        </div>
    </div>
    <section id="SkillSection">
        <div id="skill-bars" class="container">
            <div class="row" style="height: 40rem; position: relative; bottom: 5rem;">
                <Skills />
            </div>
        </div>
    </section>
    <!-- Testimonials Section -->
    <!-- SECTION HEADING -->
    <div class="container">
        <div class="row justify-content-center m-60px-b md-m-40px-b">
            <div class="col-12 col-md-10 col-lg-7">
                <div class="section-title text-center text-black">
                    <h2 class="contact-text test-text text-black mb-5">Testimonials</h2>
                </div>
            </div>
        </div>
    </div>
    <section id="TestimonialSection">
        <div class="container">
            <div class="row">
                <Testimonials />
            </div>
        </div>
    </section>
    <!-- Resume Section -->
    <div id="resume" class="row justify-content-center m-60px-b md-m-40px-b">
        <div class="col-sm-12 col-md-10 col-lg-7">
            <div class="section-title text-center text-black">
                <h2 class="contact-text text-black mt-5">My Resume</h2>
            </div>
        </div>
    </div>
    <section id="ResumeCard">
        <div class="container">
            <div class="row Resumerow">
                <Resume />
            </div>
        </div>
    </section>
    <!-- Projects Section -->
    <div id="projects" class="row justify-content-center m-60px-b md-m-40px-b">
        <div class="col-12 col-md-10 col-lg-7">
            <div class="section-title text-center text-black">
                <h2 class="contact-text text-black mt-5 mb-3">My Projects</h2>
            </div>
        </div>
    </div>
    <section id="ProjectCard">
        <div class="container">
            <div class="row">
                <Projects />
            </div>
        </div>

    </section>
    <!-- Contact Section -->
    <section id="Contact">
        <div class="container">
            <div class="row">
                <Contact />
            </div>
        </div>
    </section>
</template>

<script>
import Testimonials from "@/components/Testimonials.vue";
import AboutCard from "@/components/AboutCard.vue";
import Resume from "@/components/ResumeCard.vue";
import Contact from "@/components/Contact.vue"
import Projects from "@/components/Projects.vue"
import Skills from "@/components/Skills.vue"

export default {
    name: "master",
    components: { AboutCard, Skills, Testimonials, Resume, Contact, Projects },
};
</script>

<style scoped>
#master {
    min-height: 100%;
    padding-top: 16rem;
    padding-bottom: 16rem;
    background: linear-gradient(15deg, #a529b9 19.9%, #50b1e1 95%);
    overflow-x: hidden;
}

#ProjectCard {
    min-height: 50vh;
    padding: 1rem;
    margin: 2rem;
    margin-top: 2rem;

}

#AboutCard {
    min-height: 50vh;
    padding: 1rem;
    margin: 2rem;
    margin-top: -5rem;
}

#About {
    min-height: 50vh;
    padding: 1rem;
    margin: 2rem;
    margin-top: 2rem;
}

#TestimonialCards {
    min-height: 100vh;
    padding-bottom: 2rem;
}

#ResumeCard {
    min-height: 50vh;
    padding: 1rem;
    margin: 2rem;
}

#Contact {
    min-height: 50vh;
    padding: 1rem;
    margin: 1rem;
    position: relative;
    right: 2rem;
}

#SkillSection {
    min-height: 50vh;
    padding: 1rem;
    margin: 2rem;
}

.Resumerow {
    margin-top: -6rem;
}

.contact-text {
    font-size: 40px;
    font-weight: 600;
    background: #a529b9;
    background: linear-gradient(to right, #a529b9 11%, #50b1e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.profile-image {
    position: relative;
    top: -4rem;
    /* border: 1px solid black; */

    width: 80%;
}

.about-left h2 {
    font-size: 34px;
    font-weight: 600;
    color: #111;
    margin: 10px 0 15px;
    line-height: 1.5;
}

.about-left p {
    font-size: 18px;
    margin: 15px 0 15px;

    font-weight: 400;
    line-height: 30px;
}

.about-left .m-btn-link {
    font-size: 14px;
    font-weight: 600;
}

.about-left .m-btn-link {
    font-size: 14px;
    font-weight: 600;
}

.m-btn-link {
    color: rgb(0, 0, 0) !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    transition: ease all 0.3s;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: white;
}

.m-btn-link:before {
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: #444;
    transition: ease all 0.3s;
}

.m-btn-link:after {
    content: "";
    width: 0;
    height: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transition: ease all 0.3s;
}

::after,
::before {
    box-sizing: border-box;
}

.theme-after::after {
    background: linear-gradient(111.7deg, rgb(165, 41, 185) 19.9%, rgb(80, 177, 225) 95%);
}

.about-left .m-btn {
    margin-top: 20px;
    margin-bottom: 20px;

    background: linear-gradient(111.7deg, rgb(165, 41, 185) 19.9%, rgb(80, 177, 225) 95%);
}

.m-btn-theme {
    color: #fff;
}

img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
}

.theme-after {
    background-image: linear-gradient(to right,
            #8c38fe,
            #9c66e5,
            #b72ee4 50%,
            rgb(39, 23, 44) 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
}

.theme-after p {
    font-family: 'Work Sans', sans-serif;
    font-size: 2rem;
}

.theme-after:before {
    content: '';
    background-image: linear-gradient(60deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
}

.theme-after:hover {
    background-position: 0;
}

.theme-after:hover::before {
    width: 100%;
}

a:hover {
    color: #111;
}

.m-btn-link {
    color: rgb(0, 0, 0) !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    transition: ease all 0.3s;
    font-size: 2rem;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: white;
}

.m-btn-link:before {
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: #444;
    transition: ease all 0.3s;
}

.m-btn-link:after {
    content: "";
    width: 0;
    height: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transition: ease all 0.3s;
}

::after,
::before {
    box-sizing: border-box;
}


.about-left .m-btn {
    margin-top: 20px;
    margin-bottom: 20px;
}

.btn-gradient {
    background: #feffff !important;
    color: rgb(0, 0, 0);
    border-radius: 45px;
    padding: 15px 40px;
    margin: 5px;
    box-shadow: 0 6px 30px -10px #4a74c9;
    transition: all 0.5s ease;
    border: 0;
    font-size: small;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.btn-gradient:hover {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%);
    border: none;
    box-shadow: 0 0px 0px 0 rgba(0, 40, 120, 0);
    transform: scale(1.93);
    font-weight: 600;
}

.gradient3 {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%);
    box-shadow: 0 2px 25px 0 rgba(111, 30, 138, 0.35);
}

.gradient3:hover {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%) !important;
    color: white;
    border: none;
    box-shadow: 0 10px 30px #8c38fe, 0 3px 0 0 #9c66e5;
    transform: translateY(-3px);
}

.theme-after {
    background-image: linear-gradient(to right,
            #8c38fe,
            #9c66e5,
            #b72ee4 50%,
            rgb(39, 23, 44) 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    transition: all 0.3s ease-in-out;
}

.theme-after p {
    font-family: "Work Sans", sans-serif;
}

.theme-after:before {
    content: "";
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
}

.theme-after:hover {
    background-position: 0;
}

.theme-after:hover::before {
    width: 100%;
}

a:hover {
    color: #111;
}

.full-screen {
    min-height: 45vh;
}

.font-alt {
    font-family: "Sunflower", sans-serif;
    font-size: 60px;
    font-weight: 600;
    color: white;
    margin: 0 0 20px;
}

.home-text-center {
    margin-top: 4rem;
    position: relative;
    left: 18rem;
}

.home-text {
    max-width: 100%;
    font-weight: 400;
    font-size: 18px;
    padding: 0 0 35px;
    color: #fff;
    margin: 0;
}

.home-text-center .m-btn {
    min-width: 160px;
    margin: 8px;
}

.m-btn-white {
    color: #151515;
    background-color: #fff;
}

.m-btn {
    height: 45px;
    line-height: 45px;
    padding: 0 30px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    display: inline-block;
    text-decoration: none !important;
}

.btn-gradient {
    background: #feffff !important;
    color: rgb(0, 0, 0);
    border-radius: 45px;
    padding: 15px 40px;
    margin: 5px;
    box-shadow: 0 6px 30px -10px #4a74c9;
    transition: all 0.5s ease;
    border: 0;
    font-size: small;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.btn-gradient:hover {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%);
    border: none;
    box-shadow: 0 0px 0px 0 rgba(0, 40, 120, 0);
    transform: scale(0.93);
}

.gradient3 {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%);
    box-shadow: 0 2px 25px 0 rgba(111, 30, 138, 0.35);
}

.mywrkbtn {
    padding: 15px 50px;
}

.gradient3:hover {
    background-image: linear-gradient(15deg,
            #8c38fe 10%,
            #b72ee4 50%,
            #9c66e5 100%) !important;
    color: white;
    border: none;
    box-shadow: 0 10px 30px #8c38fe, 0 3px 0 0 #9c66e5;
    transform: translateY(-3px);
}

@media only screen and (max-width: 790px) {
    #master {
        padding-top: 6rem;
        padding-bottom: 7rem;
    }

    #SkillSection {
        height: 245vh;
        padding: 0;
        margin: 0;
    }

    .profile-image {
        width: 29rem;
        margin-top: 2rem;
    }

    .aboutText {
        margin-right: 3rem;
    }
}

@media only screen and (max-width: 350px){
    .about-left{
        position: relative;
        right: 2rem;
    }
    .gradient3{
        position: relative;
        left: 3rem;
    }
      .profile-image{
        position: relative;
        right: 2rem;
        width: 19rem;
        margin-bottom: -3rem;
      }

      .test-text{
        position: relative;
        bottom: 3rem;
      }
}
</style>
