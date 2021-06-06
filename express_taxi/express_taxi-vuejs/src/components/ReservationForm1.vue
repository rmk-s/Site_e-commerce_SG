<template>
   <!--Réservation-->
    <section class="sections réservation">
        <div class="overplay">
            <div class="container-3">
                <div class="section-header">
                    <h2 class="section-title">Réservation</h2>
                    <div class="line"><span></span></div>
                    <p class ="lead home-desc">
                        Voici nos horaires auxquelles nous sommes présents durant cette journée.
                    </p>
                </div>
            </div>

            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                    <div class="p-3 border bg-light">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col">
                <div class="p-3 border bg-light">La map :</div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>


</script>


<style scoped>

.réservation{
    height: 600px;
    background-image:require('./assets/Accueil/ville.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

</style> 