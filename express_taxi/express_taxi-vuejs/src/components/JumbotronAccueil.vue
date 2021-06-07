<template>
 <!--HOME-->
    <section class= "sections home">
        <div class="overplay">
            <div class="container-2">
                <div class="home-content">
                    <h3 class="home-title">Bienvenue sur le site ExpressTaxi</h3>
                        <p class="home-desc">
                            Réservez votre taxi sur ExpressTaxi en quelques clic
                        </p>
                        <button class="btn button">Réserver</button>
                </div>
            </div>
        </div>    
    </section>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Global CSS*/

.sections{
    padding-bottom: 20px;
}

.overplay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
}


/* Home sections*/

.home{
    height: 500px;
    background-image:url('../assets/Accueil/pexel.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.container-2{
    text-align: center;
}

.home .home-title{
    color: #fff;
    font-size: 48px;
    margin-bottom: 30px;
}

.home .home-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home .home-desc{
    color: #fff;
    font-size: 19px;
}

.home .button{
    background: greenyellow;
    color: white;
    width: 150px;
    text-align: center;
    padding: 10px 0;
}

.home .button:hover{
    transform: translateY(-5px);
    box-shadow: rgba(214,214,214,) 0px 10px 40px 0px;
}

</style>
