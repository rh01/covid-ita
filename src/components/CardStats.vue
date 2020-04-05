<template>
    <section class="section">
        <div class="container">
            <div class="tile is-ancestor" style="text-align:center">
                <div class="tile is-parent">
                    <article class="tile is-child box style-box-grey">
                        <p class="subtitle">Casi totali</p>
                        <p class="title has-text-dark">0</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box style-box-yellow">
                        <p class="subtitle">Positivi</p>
                        <p class="title has-text-warning">0</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box style-box-red">
                        <p class="subtitle">Deceduti</p>
                        <p class="title has-text-danger">0</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box style-box-green">
                        <p class="subtitle ì">Guariti</p>
                        <p class="title has-text-success">0</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CardStats'
    }
</script>
