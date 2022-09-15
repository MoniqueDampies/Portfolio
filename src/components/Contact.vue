<template>
    <section id="contact" class="section p-0px-b contact-section">
        <div class="container pt-1">
            <div class="row justify-content-center m-60px-b md-m-40px-b">
                <!-- <div class="col-sm-12 col-md-10 col-lg-7">
                    <div class="section-title text-center">
                        <h2 class="contact-text">Contact Me</h2>
                    </div>
                </div> -->
            </div>
            <div class="contact-us-box container">
                <div class="row no-gutters ">
                    <div class="col-md-6 col-sm-5 ">
                        <div class="contact-info-box">
                            <h2>Lets get in touch</h2>
                            <p class="desc">
                                Reach out to me through the following channels or send me a
                                message and I will get back to you as soon as possible.
                            </p>
                            <div class="container">
                                <div class="row">
                                    <div class="contact-info col-sm-7 col-md-12">
                                        <a href="https://www.google.com/maps/place/Mitchells+Plain,+Cape+Town/@-34.0484419,18.602939,13z/data=!3m1!4b1!4m5!3m4!1s0x1dcc4721e60ec221:0xd3097704b4edb9ac!8m2!3d-34.0485946!4d18.6056873"
                                            target="_blank">
                                            <i class="icon theme-bg ti-direction">
                                                <img src="https://img.icons8.com/nolan/64/worldwide-location.png" />
                                            </i>
                                        </a>
                                        <p>Mitchells Plain, Cape Town, 7785.</p>
                                    </div>
                                    <div class="contact-info col-sm-7 col-md-12">
                                        <a href="mailto:moniquedampies1861@gmail.com">
                                            <i class="icon theme-bg ti-email">
                                                <img src="https://img.icons8.com/nolan/64/email-sign.png" />
                                            </i>
                                        </a>
                                        <p>moniquedampies1861@gmail.com</p>
                                    </div>
                                    <div class="contact-info col-sm-7 col-md-12">
                                        <a href="tel:0638729906" target="_blank">
                                            <i class="icon theme-bg ti-mobile">
                                                <img src="https://img.icons8.com/nolan/64/phone.png" />
                                            </i>
                                        </a>
                                        <p>063 872 9906</p>
                                    </div>
                                    <div class="contact-info col-sm-7 col-md-12">
                                        <a href="https://github.com/MoniqueDampies" target="_blank">
                                            <i class="icon theme-bg ti-direction">
                                                <img src="https://img.icons8.com/nolan/64/github.png" />
                                            </i>
                                        </a>
                                        <p>Github</p>
                                    </div>
                                    <div class="contact-info col-sm-7 col-md-12">
                                        <a href="https://codepen.io/MoniqueDampies" target="_blank">
                                            <i class="icon theme-bg ti-direction">
                                                <img src="https://i.postimg.cc/gjWGZZk4/icons8-codepen-50.png" />
                                            </i>
                                        </a>
                                        <p>CodePen</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6 col-sm-5">
                        <!-- Contact Form -->
                        <div class="contact-form">
                            <h2 class="text-white">Message me</h2>
                            <form action="https://formspree.io/f/mdobydwb" method="POST">
                                <div class="form-group">
                                    <input name="Name" type="text" required placeholder="Name" class="form-control"
                                        autocomplete="off" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input name="Email" type="email" required placeholder="Email" class="form-control"
                                        autocomplete="off" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input name="Subject" type="text" required placeholder="Subject"
                                        class="form-control" autocomplete="off" />
                                </div>
                                <br />
                                <div class="form-group message">
                                    <input name="Message" type="text" required placeholder="Message" rows="3"
                                        class="form-control" id="message" autocomplete="off">
                                </div>
                                <br />
                                <div class="send">
                                    <button class="m-btn m-btn-theme gradient3">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style scoped>
/***************** START OF contact *************************/
.send button {
    background-color: rgb(165, 41, 185);
    border: none;
}

::placeholder {
    color: white;
}

.m-btn-theme {
    color: #fff;
}


.contact-info-box {
    padding:10%;
}

.contact-text {
    font-size: 50px;
    font-weight: 600;
    background: #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.contact-info-box h2 {
    text-transform: capitalize;
    margin: 0;
    padding: 0 0 20px;
    font-size: 30px;
    color: white;
    font-weight: 600;
    /* color: #151515; */
}

.contact-info-box .desc {
    width: 450px;
    max-width: 100%;
    margin-bottom: 40px;
    color: white;
    font-size: 20px;
}

.contact-info-box .contact-info {
    position: relative;
    padding-left: 45px;
    padding-bottom: 20px;
    font-size: 20px;
    /* border: 1px solid black; */
}

.contact-info-box .contact-info p {
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 30px;
    color: white;
    /* border: 1px solid black; */
}

.contact-info-box .contact-info .icon {
    width: 40px;
    height: 40px;
    padding: 2px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(0, 0, 0);
    text-align: center;
    position: absolute;
    top: 0;
    line-height: 35px;
    left: 0;
    font-size: 17px;
}

.icon img {
    width: 2.2rem;
}

.contact-info-box .contact-info p {
    margin: 0;
    line-height: 2.5rem;
    font-size: 1rem;
    letter-spacing: 1.5px;
    /* border: 1px solid black; */
}

.contact-info-box .social-icons {
    margin: 0;
    padding: 0 0px 0 40px;
}

.contact-info-box .social-icons li {
    display: inline-block;
    vertical-align: top;
    list-style: none;
}

.contact-info-box .social-icons li a {
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #333;
    border-radius: 50%;
}

.contact-info-box .social-icons li a:hover {
    background: #333;
    color: #fff;
}

.contact-form {
    /* border-left: 2px solid #ddd; */
    padding: 10%;
}

.contact-form h2 {
    text-transform: capitalize;
    /* margin: 0; */

    padding: 0 0 10px;
    font-size: 30px;
    font-weight: 600;
    color: white;
}

.contact-form .form-control {
    border-radius: 10px;
    font-size: 14px;
    height: 45px;
}



.form-control:focus {
    outline: 2px solid #a629b9c0 !important;
    /* border: none; */
    box-shadow: none;
}

input{
    margin-top: 1rem;
    height: 3rem !important;
    background-color: transparent;
}

#message{
    height: 7rem !important;
    background-color: transparent;
}

/* SEND BUTTON FORM */
.send button {
    margin-top: 1rem;
    background-color: rgb(165, 41, 185);
}

.m-btn {
    height: 50px;
    line-height: 45px;
    padding: 0 30px;
    font-size: 15px;
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

.contact-us-box {
    /* margin: 0 5%; */
    position: relative;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 103%;
    /* border: 2px solid white; */
    background: rgba(255, 255, 255, 0.02);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.7px);
    -webkit-backdrop-filter: blur(10.7px);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 10px;
}

/* .section-title p {
    font-size: 2.1rem;
} */

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
    background-image: linear-gradient(60deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
    border: none;
    box-shadow: 0 0px 0px 0 rgba(0, 40, 120, 0);
    transform: scale(0.930);
}

.gradient3 {
    background-image: linear-gradient(60deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%);
    box-shadow: 0 2px 25px 0 rgba(111, 30, 138, .35);
}


.gradient3:hover {
    background-image: linear-gradient(60deg, #8c38fe 10%, #b72ee4 50%, #9c66e5 100%) !important;
    color: white;
    border: none;
    box-shadow: 0 10px 30px #8c38fe, 0 3px 0 0 #9c66e5;
    transform: translateY(-3px);
}

/***************** END OF contact *************************/

@media only screen and (max-width: 768px) {
    .contact-us-box {
        position: relative;
        left: -4rem;
        width: 18rem;
        margin: 0;
        padding: 0;
    }

    .contact-text {
        width: 14rem;
        position: relative;
    }
}

@media only screen and (max-width: 338px) {
    .contact-us-box {
        position: relative;
        left: -1rem;
        width: 18rem;
        margin: 0;
        padding: 0;
    }

    .contact-info-box {
        position: relative;
        left: 1rem;
        right: 1rem;
        padding: .1rem;
    }
}
</style>
