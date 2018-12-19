<template>
    <section class="main">
        <nav>
            <ul>
                <li>
                    Matériel
                    <ul>
                        <li>Cordes</li>
                        <li>Tissus &amp; structure</li>
                        <li>Cerceau &amp; structure</li>
                    </ul>
                </li>
                <li>
                    Zones géographiques
                    <ul>
                        <li>PACA</li>
                        <li>France</li>
                        <li>Europe</li>
                        <li>Monde</li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div>
            <h1>Informations pratiques</h1>
            <h2>Matériel</h2>
            
            <h3>Cordes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            
            <h3>Tissus &amp; structure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            
            <h3>Cerceau &amp; structure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            <h2>Zones géographiques</h2>
            
            <h3>PACA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            
            <h3>France</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            
            <h3>Europe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
            
            <h3>Monde</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ea qui numquam nam enim, cupiditate dignissimos nulla omnis facilis ratione? Quasi soluta nemo rem dicta aut incidunt praesentium vero.</p>
        </div>
    </section>
</template>

<style lang="stylus" scoped>
section.main{
    display:grid;
    grid-template-columns: 18rem auto;
    padding-top:7rem;
    justify-content:center;
    max-width:1000px;
    margin:0 auto;
}

nav{

    ul, li{
        list-style:none;
        margin:0;
        padding:0;
    }

    ul > li{
        font-weight:600;
        margin-bottom:20px;
        ul > li{
            padding-left:10px;
            font-weight:400;
            margin-bottom:0;
        }

    }
}
</style>