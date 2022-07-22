<template>
    <section id="footer">
        <div class="footer">&copy Copyright 2022 - Made with love by Monique Dampies</div>
    </section>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/***************** START OF footer *************************/
#footer {
    /* height: 10vh; */
    background-color: #00000065;
    color: #fff;
    width: 150rem;
}

.footer {
    margin: auto;
    width: 100rem;
    padding: 0.5rem;
    position: relative;
    left: 9rem;
}

@media only screen and (max-width: 338px){
  #footer {
    /* height: 10vh; */
    background-color: #00000065;
    color: #fff;
    width: 150rem;
}

.footer {
    margin: auto;
    width: 100rem;
    padding: 0.5rem;
    text-align: center;
}
}
/***************** END OF footer *************************/
</style>