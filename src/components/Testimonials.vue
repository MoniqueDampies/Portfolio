<template>
    <div id="carousel">
            <div class="col-sm-12">
                <div class="owl-carousel" ref="owl">
                    <div id="test-card" class="testi-content col-sm-10" v-for="item of TestimonialsArray" :key="item.id">
                        <img class="testi-pic" :src="item.image" :alt="item.name">
                        <h4>{{ item.name }}</h4>
                        <h5>{{ item.title }}</h5>
                        <h6>{{ item.text }}</h6>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            "TestimonialsArray": [
                {
                    "id": 1,
                    "image": "https://i.postimg.cc/gkxbS6DB/godwin-2.jpg",
                    "name": "Godwin Dzvapatsva",
                    "title": "Head of Curriculum",
                    "text": " Monique is a pleasure to work with and contributes positively to the class through her communication prowess. Monique has demonstrated an aptitude for HTML, CSS & Bootstrap that has left me speechless. Monique is progressing at a very rapid pace."
                },
                {
                    "id": 2,
                    "image": "https://i.postimg.cc/PJRsftt4/cassidymanuel.jpg",
                    "name": "Cassidy Manuel",
                    "title": "Colleague",
                    "text": "Monique is a confident, hardworking, respectable and fast learner. She is a team player but does well on her and she has an amazing personality."
                },
                {
                    "id": 3,
                    "image": "https://i.postimg.cc/jdB0Gd3q/Reagan1.jpg",
                    "name": "Reagan Carolussen",
                    "title": "Colleague",
                    "text": "Monique is a talented individual. With great initiative, she works hard and strives to make the best work possible. I would highly recommend her to any team."
                },
                {
                    "id": 4,
                    "image": "https://i.postimg.cc/DZ7KBjjq/emilevanwyk.jpg",
                    "name": "Emile Van Wyk",
                    "title": "Colleague",
                    "text": " Monique: attentive, inquisitive, hardworking, passionate, these are a few words I can use to describe her. She is a diligent student who is always researching new ways of expeditiously completing her work out-putting professional-level projects which makes her a great addition to any team and definitely the first pick for me."
                },
                {
                    "id": 5,
                    "image": "https://i.postimg.cc/9M1HSdKs/marshalinojankowski.jpg",
                    "name": "Marshalino Jankowski",
                    "title": "Colleague",
                    "text": "Monique is an outstanding individual with a presentable appearance that always finds time to wear a smile. Her work is outstanding and her resolve even stronger, she will not stop until she has achieved everything she has set out to do whether it be in everyday life or in the workplace."
                },
                {
                    "id": 6,
                    "image": "https://i.postimg.cc/QN4rJqpT/shanestevens.jpg",
                    "name": "Shane Stevens",
                    "title": "Colleague",
                    "text": "Monique is a natural at developing and design. She is a cool, calm and collected when it comes to her work and her capabilities. I am sure that she is destined for greatness within the near future in every aspect of life."
                }
            ]
        }

    },
    mounted() {
        this.$refs.owl.owlCarousel({
            autoplay: true,
            loop: true,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                800: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                1000: {
                    items: 3,
                    nav: false,
                    dots: false
                }
            }
        });
    },
}



</script>

<style scoped>
#testimonials {
    color: black;
    min-height: 100vh;
}


/* #testimonial-card {
    background-color: rgb(31, 27, 27);
} */

/* .testi-pic{
    width: 5rem;
} */

.testi-content {
    background-color: #111;
    background: #0c0b0b;
    padding: 10px;
    margin-top: 1em;
    margin-bottom: 2em;
    padding: 1rem;
    margin: 2rem;
    /* box-shadow: 3px 3px 8px hsl(0, 0%, 70%); */
    border-radius: 10px;
    /* background: linear-gradient(145deg, #dddddd, #ffffff); */
    /* box-shadow: 10px 10px 10px #dddddd,
        -10px -10px 10px #ffffff; */
    /* From https://css.glass */
background: rgba(255, 255, 255, 0.02);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10.7px);
-webkit-backdrop-filter: blur(10.7px);
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}

.testi-content img {
    border-radius: 10px !important;
}

.testi-content h4{
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
    font-size: 1.8rem;
    /* border: 1px solid white; */
}

.testi-content h6{
    font-weight: 500;
    font-size: 100%;
    padding: 1rem;
    padding-top: 1rem;
    /* border: 1px solid white; */
}

.testi-content h5{
    font-weight: 500;
    text-align: center;
    font-size: 1.3rem;
    /* border: 1px solid white; */
}


#test-card {
    margin-bottom: 1rem;
    margin: 10px;
    height: 42rem;
        width: 95%;
        color: white;
        letter-spacing: 1px;
}

#testi-profiles img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 30% !important; */
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 1rem;

}

#carousel {
    overflow-x: hidden;
    padding: 25px;
    border: none;
    outline: none;
}

@media only screen and (max-width: 790px) {

   
    .owl-carousel .owl-item img {
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    #test-card {
        margin-bottom: 1rem;
        height: 35rem;
        width: 100%;
    }
}
</style>