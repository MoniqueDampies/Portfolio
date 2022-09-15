<template>
    <article class="col-md-6 col-lg-4 col-sm-12" v-for="item of AboutArray" :key="item.id">
        <div class="card-content col-sm-12">
            <div id="icon-border">
                <img id="card-icons" class="card-image" :src="item.icon" alt="mmm">
            </div>
            <h4 class="text-center">{{ item.title }}</h4>
            <p> {{ item.text }} </p>
        </div>
    </article>

</template>

<script>
export default {
    data() {
        return {
            AboutArray: [{
                "id": 1,
                "icon": "https://i.postimg.cc/4dLr3rG1/icons8-wireframe-display-modes-96.png",
                "title": "Web Design",
                "text": "My time with web design and development started fairly recently but my interest for it goes back to as far as I can recall. My passion for web design stems from my love of art in general and seeing well designed websites is one of my favorite things."
            },
            {
                "id": 2,
                "icon": "https://i.postimg.cc/pdxNcfkK/icons8-programming-96.png",
                "title": "Web development",
                "text": "Web development is something perfectly crafted or a person like me that is very maticulous and loves a challenge. These aspects are what fuel my passion for coding."
            },
            {
                "id": 3,
                "icon": "https://i.postimg.cc/gJkCmGCJ/icons8-web-96.png",
                "title": "UI & UX",
                "text": "I believe that paying attention to user interface and user experience is what will make the person viewing your web page have a better experience overall. Tools Ive used to refine the UI/UX of my projects is Figma designing software."
            },
            {
                "id": 4,
                "icon": "https://i.postimg.cc/FsMX35LW/icons8-microsoft-paint-96.png",
                "title": "Graphic Design",
                "text": "My graphic design skills allow me to design websites from an artistic perspective with the goal of a visually satisfying outcome. I'm a very creative individual who has a passion for combining art with technology."
            },
            {
                "id": 5,
                "icon": "https://i.postimg.cc/3J4HkJd0/icons8-3d-printer-96.png",
                "title": "3D printing",
                "text": "During a prior course I gained experience with Flashforge 3D printing software and Flashprint Adventurer 3 printers. 3D printing allows me to be creative and solve fun problems along the way."
            },
            {
                "id": 6,
                "icon": "https://i.postimg.cc/YSx55vyZ/icons8-unsplash-96.png",
                "title": "Photography",
                "text": "Another creative passion of mine includes photography because I love capturing memories and special moments. Photography and art in general inspires me when I create websites."
            }]
        };
    }
}
</script>

<style scoped>
.card-content {
    height: 380px;
    padding: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
    border-radius: 10px;
    /* border: 2px solid white; */
    background: rgba(255, 255, 255, 0.02);
    /* border-radius: 16px; */
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(10.7px);
    -webkit-backdrop-filter: blur(10.7px);
    transition: all 0.5s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

/* .card-content:hover {
    height: 370px;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 2em;
    color: rgb(255, 255, 255)!important;
    box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
    border-radius: 8px;
    box-shadow: 10px 10px 10px #dddddd,
        -10px -10px 10px #ffffff; 
    background-color: #111;
 
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
} */

h4 {
    text-align: center;
}


card-content p {
    font-size: 95%;
    padding: 1rem;
    color: rgb(255, 255, 255);
}

#icon-border {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    aspect-ratio: 1;
    padding: 1rem;
    /* border: 1px solid black; */
    border-radius: 100px;
    margin-bottom: 10px;
    opacity: 0.8;
    transition: all 0.5s ease;
    border-radius: 50%;
}

.col-lg-4 {
    flex: 0 0 auto;
    width: 28.333333%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (max-width: 790px) {
    .card-content {
        height: 400px;
        width: 30rem;
        justify-content: center;
        text-align: center;
        position: relative;
        left: .7rem;
        height: 90%;
        border: 1px solid white;
    }

    #card-icons {
        position: relative;
        left: -1.6rem;
        bottom: 1.4rem;
    }

    #icon-border {
        height: 7rem;
    }
}



/* @media (min-width: 992px) {
    .col-lg-4 {
        flex: 0 0 auto;
        width: 28.333333%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
} */

@media only screen and (max-width: 1025px) {
    .card-content {
        height: 400px;
        justify-content: center;
        text-align: center;
        position: relative;
        left: .7rem;
        height: 90%;
        padding: 1.1rem;
    }

    #card-icons {
        position: relative;
        left: -1.6rem;
        bottom: 1.4rem;
    }

    #icon-border {
        height: 7rem;
    }
}
</style>