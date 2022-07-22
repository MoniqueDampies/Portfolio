<template>
    <article class="col-md-6 col-lg-4 col-sm-12" v-for="item of AboutArray" :key="item.id">
        <div class="card-content">
            <div id="icon-border">
                <img id="card-icons" class="card-image" :src="item.icon" alt="mmm">
                </div>
            <h4 class="spectrum-h2 text-black text-center">{{ item.title }}</h4>
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
    background: #f5f5f5;
    height: 370px;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 2em;
    box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
    border-radius: 10px;
    background: linear-gradient(145deg, #dddddd, #FFFFFF);
    box-shadow: 10px 10px 10px #dddddd,
        -10px -10px 10px #ffffff;
}

card-content h3 {
    margin-bottom: 0.5em;
    font-weight: normal;
    text-align: center;
}

card-content p {
    font-size: 95%;
    padding: 1rem;
}

#icon-border {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    aspect-ratio: 1;
    padding: 2rem;
    /* border: 5px solid black; */
    border-radius: 100px;
    margin-bottom: 10px;
    opacity: 0.8;
    transition: all 0.5s ease;
}

#icon-border:hover {
    text-decoration: none;
    background-color: #111;
    border: #feffff;
}

#icon-border:hover {
    opacity: 1.5;
    filter: contrast(100%);
}

@media only screen and (max-width: 790px){
	.card-content{
        height: 400px;
        justify-content: center;
        text-align: center;
        position: relative;
        left: .7rem;
        height: 90%;
    }

    #card-icons{
        position: relative;
        left: -1.6rem;
        bottom: 1.4rem;
    }

    #icon-border{
        height: 7rem;
    }
}
</style>