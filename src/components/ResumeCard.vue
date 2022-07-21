<template>
    <div id="resume" >
        <div>
            <div class="work">
                <div id="container timeline-sec">
                    <div class="row main center">
                        <div class="box center col-md-6 col-lg-4 col-sm-12" v-for="item of ResumeArray" :key="item.id">
                            <img class="resume-image w-25" :src="item.icon" :alt="item.name">
                            <p>{{ item.year }}</p>
                            <p>{{ item.name }}</p>
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumeSection',
    data() {
        return {
            ResumeArray: [
                {
                    "id": 1,
                    "icon": "https://i.postimg.cc/tJKBtH6q/LCA.jpg",
                    "year": "2022",
                    "link": "https://www.lifechoices.co.za/",
                    "name": "Life Choices Academy",
                    "text": "My journey with Life Choices Academy and software developments begins.. This is where I learned HTML5, CSS3, Bootstrap, MySQL, Javascript and VueJs as well as personal and professional development"
                },
                {
                    "id": 2,
                    "icon": "https://i.postimg.cc/PxqVdyhj/YMM.png",
                    "year": "2021",
                    "link": "https://ymm.org.za/",
                    "name": "Youth Media Movement",
                    "text": "I joined a course which revolved around upskilling youth with 4IR skills. We completed MTA Software Fundamentals and digital literacy, drone technology with Brighter Futures tuitions, 3D printing and SEDA entrepreneurial training course."
                },
                {
                    "id": 3,
                    "icon": "https://i.postimg.cc/QC96TMHY/exl-service-logo2.jpg",
                    "year": "2020",
                    "link": "https://www.exlservice.com/south-africa",
                    "name": "EXL Services",
                    "text": "Started my first job as a Claims Handler for a BPO call center. My responsibility was to take inbound calls from policyholders notifying us about a loss they've experienced. I would go through the claim process with them and provide/retrieve all information necessary."
                },
                {
                    "id": 4,
                    "icon": "https://i.postimg.cc/pT1GrjXn/Mondale-High-School.jpg",
                    "year": "2015",
                    "link": "http://www.mondalehs.co.za/",
                    "name": "Mondale High School",
                    "text": "I attended the prestigious Mondale High School, where my subjects pertained to the commerce industry. Here I learned what it means to be discipled, dedicated and determined. I completed my matric with a bachelors pass"
                }
            ]
        };
    }
}
</script>

<style scoped>
#resume {
    color: rgb(0, 0, 0);
    min-height: 100vh;
    /* display: flex;
    justify-content: center; */
    margin-top: 5rem;
}

#timeline-sec {
    width: 80rem;
    height: 60rem;
    padding: 2rem;
    margin-top: 2rem;
    padding-top: 5rem;
    display: flex;
    flex-direction: row;
    background: linear-gradient(145deg, #E5E6E6, #FFFFFF);
    box-shadow: 10px 10px 10px #E5E6E6,
        -10px -10px 10px #FFFFFF;
}



.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    width: 30rem;
    height: 30rem;
    background: linear-gradient(145deg, #E5E6E6, #FFFFFF);
    box-shadow: 10px 10px 10px #E5E6E6,
        -10px -10px 10px #FFFFFF;
    margin: 10px;
    flex-direction: column;
    font-size: 1.2rem;
    border-radius: 15px;
    position: relative;
    transition: all .4s;
    overflow: hidden;
    padding: 1rem;
}

.box:hover{
    color: white !important;
}


img {
    border-radius: 15px;
}


.box::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 20px;
    width: 5px;
    height: 350px;
    color: white;
    border-radius: 50px;
    transition: all .6s;
    background: linear-gradient(55deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
}

.box:nth-child(1)::before {
    color: white;
    background: linear-gradient(55deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
}

.box:hover::before {
    top: 0;
    left: 0;
    color: white;
    border-radius: 0;
    width: 100%;
    height: 100%;
}

.box p,
h1,
img {
    margin: 5px 50px;
    z-index: 100;
}

@media only screen and (max-width: 1025px){
    /*Tablets [601px -> 1200px]*/
    .box {
    width: 26rem;
    height: 30rem;
    box-shadow: 3px 3px 8px hsl(0, 0%, 70%);

    margin: 1rem;
    flex-direction: column;
    background: white;
    font-size: 1.2rem;
    border-radius: 15px;
    position: relative;
    transition: all .4s;
    overflow: hidden;
    padding: 1rem;
}

.row{
    flex-direction: row;
    flex-wrap: wrap;
}

.box::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 20px;
    width: 5px;
    height: 350px;
    color: white;
    border-radius: 50px;
    transition: all .6s;
    background: linear-gradient(15deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
}

.box:nth-child(1)::before {
    color: white;
    background: linear-gradient(15deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
}

.box:hover::before {
    top: 0;
    left: 0;
    color: white;
    border-radius: 0;
    width: 100%;
    height: 100%;
}

.box p,
h1,
img {
    margin: 5px 50px;
    z-index: 100;
}
    

}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
}



</style>