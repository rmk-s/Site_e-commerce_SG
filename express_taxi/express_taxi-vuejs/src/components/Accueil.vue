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

    <section class="sections about">
            <div class="container px-4">
                <div class="row gx-5">
                <div class="col-md-6">
                    <div class="about-info">
                        <h3>Présentation de notre site <span>"ExpressTaxi"</span></h3>
                        <p class="about-info-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur distinctio velit hic! Fugiat voluptas vel veniam maiores fuga id omnis, dolore illo. Doloribus, asperiores, impedit reprehenderit accusamus, corporis quo itaque alias mollitia autem aliquam debitis nisi id praesentium modi. Deleniti cumque exercitationem suscipit impedit magnam, minima possimus nihil? Dolor mollitia non hic minus? Nobis, praesentium sapiente reprehenderit est maiores rem, excepturi voluptas culpa voluptatum, non unde. Maiores deleniti ratione repudiandae architecto tempore omnis iure.
                        </p>
                        <button class="about-info-btn">Lire plus</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*General Styles*/

body{
    font-family: lucida Sans;
}

.sections{
    padding: 20px 0;
}

.overplay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
}

.section-header .section-title {
    text-align: center;
    font-size: 40px;
}

.section-header .line{
    width: 150px;
    background: #ddd;
    height: 3px;
    margin: auto;
}

.section-header .line span{
    display: block;
    width: 100px;
    height: 4px;
    background: greenyellow;
    margin: auto;
    position: relative;
    bottom: 0.5px;
}

.section-header p{
    width: 800px;
    color: #303030;
    margin: 10px auto;
    line-height: 1.5;
}

/* Home sections*/

.home{
    height: 500px;
    background-image:require('./assets/image/pexel.jpg');
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

/* A propos section */

.about .about-info h3{
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 20px;
}

.about .about-info h3 span{
    color:greenyellow;
}

.about .about-info .about-info-desc{
    line-height: 1.8;
    color: #888;
    margin-bottom: 20px;
}

.about .about-info .about-info-btn{
    background-color: greenyellow;
    padding: 10px 20px;
    border: 0;
    color: #fff;
    font-weight: bold;
}

.about .about-info .about-info-btn:hover{
    transform: translateY(-5px);
    box-shadow: rgba(214,214,214,) 0px 10px 40px 0px;
}

.about .about-img img{
    width: 85%;
}

/*time section*/

.times {
    background: #f7f7f7;
}

.times .serv{
    background: #fff;
    padding: 20px;
    text-align: center;
}

.times .serv .fa{
    background: greenyellow;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    border-radius: 50%;
}


.times .serv .serv-desc{
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 20px;
}

.times .serv .serv-title{
    font-size: 16px;
    color: #888;
    margin-bottom: 20px;
}


/*Réservtion*/

.réservation{
    height: 600px;
    background-image:require('./assets/image/ville.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

/*Contact*/ 

section#contact{
    background-color: #f9f9fb;
    padding: 100px 15px;
}

section#contact .container{
    max-width: 900px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 60px 10px;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: rgba(214,214,214,) 0px 10px 50px -10px;
}

section#contact .container .title{
    text-align: center;
    color: #2a2a2a;
    margin-bottom: 60px;
}

section#contact .container .titleh5{
    font-size: 1.2em;
}

section#contact .container .title h6{
    font-size: 2.8em;
}

section#contact .container form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 600px;
}

section#contact .container form input{
    width: 45%;
}

section#contact .container form input:hover,
section#contact .container form textarea:hover{
    border-bottom: 2px solid greenyellow;
}

section#contact .container form input,
section#contact .container form textarea{
    margin: 15px 0;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 2px solid #e4e4ec;
    transition: 0.2s;
}

section#contact .container form textarea{
    width: 100%;
    resize: none;
    height: 100px;
    margin-bottom: 60px;
}

section#contact .container form button{
    width: 192px;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: greenyellow;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    margin-top: 30px;
    outline: none;
    margin: 0 auto;
    transition: 0.2s;
}


section#contact .container form button:hover{
    transform: translateY(-5px);
    box-shadow: rgba(214,214,214,) 0px 10px 40px 0px;
}


</style>
