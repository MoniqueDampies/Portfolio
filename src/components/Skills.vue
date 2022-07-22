<template>
    <div class="contentContainer">
        <div class="skillBar">
            <h4>HTML</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-80"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>CSS3</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-70"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Bootstrap</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-60"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>MySql</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-50"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>JavaScript</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-40"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Vue.Js</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-40"></div>
            </div>
        </div>
    </div>
    <br>
    <div class="contentContainer box2">
        <div class="skillBar">
            <h4>Communication</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-60"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Time management</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-70"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Responsibility</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-80"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Creativity</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-90"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Teamwork</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-70"></div>
            </div>
        </div>

        <div class="skillBar">
            <h4>Flexibility</h4>
            <div class="skillBarContainer">
                <div class="skillBarValue value-50"></div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    name: 'Skills'
}
</script>

<style scoped>
.contentContainer {
    padding: 20px;
    max-width: 600px;
    min-width: 150px;
    margin: 15vh auto;
    border-radius: 10px;
    background: linear-gradient(145deg, #dddddd, #FFFFFF);
    box-shadow: 10px 10px 10px #dddddd,
        -10px -10px 10px #ffffff;
}

.skillBar {
    margin-bottom: 26px;
    margin-bottom: 1.66em;
}

h4 {
    font-size: 21px;
    font-size: 1.33em;
    text-transform: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 7px;
    margin-bottom: .33em;
}

.skillBarContainer {
    width: 100%;
    max-width: 600px;
    height: 26px;
    height: 1.66em;
    background: #e6eae3;
    background: #a629b9a1;
    background: #a629b989;
    overflow: hidden;
    border-radius: 5px;
}

.skillBarValue {
    height: 1.66em;
    float: left;
    background: #0866dc;
    background: #a529b9;
    background: #a529b9;
}

/* Allowed values for the css skill bars */
.value-00 {
    width: 0;
}

.value-10 {
    width: 10%;
}

.value-20 {
    width: 20%;
}

.value-30 {
    width: 30%;
}

.value-40 {
    width: 40%;
}

.value-50 {
    width: 50%;
}

.value-60 {
    width: 60%;
}

.value-70 {
    width: 70%;
}

.value-80 {
    width: 80%;
}

.value-90 {
    width: 90%;
}

.value-100 {
    width: 100%;
}

/*///////////////////////////////////////////////////
    // Animation \\ 
///////////////////////////////////////////////////*/
@-webkit-keyframes slideIn {
    0% {
        width: 0;
    }

    25% {
        width: 100%;
    }

    100% {
        width: normal;
    }
}

@-moz-keyframes slideIn {
    0% {
        width: 0;
    }

    25% {
        width: 100%;
    }

    100% {
        width: normal;
    }
}

@-ms-keyframes slideIn {
    0% {
        width: 0;
    }

    25% {
        width: 100%;
    }

    100% {
        width: normal;
    }
}

@-o-keyframes slideIn {
    0% {
        width: 0;
    }

    25% {
        width: 100%;
    }

    100% {
        width: normal;
    }
}

@keyframes slideIn {
    0% {
        width: 0;
    }

    25% {
        width: 100%;
    }

    100% {
        width: normal;
    }
}

.skillBarValue {
    -webkit-animation: slideIn 2s;
    -moz-animation: slideIn 2s;
    -o-animation: slideIn 2s;
    animation: slideIn 2s;
}


@media only screen and (max-width: 790px){
 .box2{
    position: relative;
    bottom: 6rem;

 }
    .contentContainer{
        width: 18rem;
        margin-top: 7rem;
    }


}

</style>