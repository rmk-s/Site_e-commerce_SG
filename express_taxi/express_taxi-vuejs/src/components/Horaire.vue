<template>
    <!--Horaires-->
    <section class="sections times">
        <div class="container-3">
            <div class="section-header">
                <h2 class="section-title">Les horaires</h2>
                <div class="line"><span></span></div>
                <p class ="lead home-desc">
                    Voici nos horaires auxquelles nous sommes présents durant cette journée.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Lundi</h3>
                    <p class="serv-title">✔️: Présent de 5 heures à 23 heures</p>
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Mardi</h3>
                    <p class="serv-title">✔️: Présent de 5 heures à 23 heures</p>
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Mercredi</h3>
                   <p class="serv-title">✔️: Présent de 5 heures à 23 heures</p>
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Jeudi</h3>
                    <p class="serv-title">✔️: Présent de 5 heures à 23 heures</p>
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Vendredi</h3>
                    <p class="serv-title">✔️: Présent de 5 heures à 23 heures </p>
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="serv">
                    <i class="fa fa-calendar fa-lg"></i>
                    <h3 class="serv-desc">Samedi</h3>
                    <p class="serv-title">✔️: Présent de 5 heures à 23 heures</p>  
                    <p class="serv-title"> ❌: Fermé de 23 heures à 5 heures</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>


<style scoped>
/*time section*/
body{
    font-family: lucida Sans;
}

.sections{
    padding: 20px 0;
}

.section-title{
    padding-top: 2%;
    margin-top: 2%;
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
</style> 