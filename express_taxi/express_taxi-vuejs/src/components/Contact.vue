 <template>
 <!--Contact-->
    <section id="contact">
        <div class="container">
            <div class="title">
                <h5>Une question ? Un problème ?</h5>
                <h6>Contactez-nous</h6>
            </div>
            <form action="#" method="post">
                <input type="text" name="name" placeholder="Entrez votre nom..." required="">
                <input type="email" name="email" placeholder="Entrez votre email..." required="">
                <input type="text" name="subject" placeholder="Entrez Le sujet..." required="">
                <input type="text" name="number" placeholder="Entrez votre numéro de téléphone..." required="">
                <textarea name="message" placeholder="Entrer votre message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>
</template>


<script>

</script>


<style scoped>
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