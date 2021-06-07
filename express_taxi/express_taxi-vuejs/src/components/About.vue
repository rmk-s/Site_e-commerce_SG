<template>
    <section class="sections about">
        <div class="container-3">
            <div class="section-header">
                <h2 class="section-title">A propos</h2>
                <div class="line"><span></span></div>
                <p class ="lead home-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, veniam ipsum.
                </p>
            </div>
            <div class="container px-4">
                <div class="row gy-2 gx-0" >
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
                <div class="col-md-6">
                    <div class="about-img">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

</script>


<style scoped>

body{
    font-family: lucida Sans;
}

.sections{
    padding: 20px 0;
}

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
    margin-bottom: 2%;
    
}

.about .about-info .about-info-btn:hover{
    transform: translateY(-5px);
    box-shadow: rgba(214,214,214,) 0px 10px 40px 0px;
}

.about .about-img img{
    width: 85%;
    border: solid 5px rgb(0, 255, 0);
}

.about .about-info {
    float :right;
}

</style>