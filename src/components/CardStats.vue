<template>
    <div>
        <h4 class="has-text-centered is-size-4">Ultimo aggiornamento: {{ this.dataAggiornamento }}</h4><br>          
        <section class="section">
            <div class="container">
                <div class="tile is-ancestor" style="text-align:center">
                    <div class="tile is-parent">
                        <article class="tile is-child box style-box-grey">
                            <p class="subtitle">Casi totali</p>
                            <p class="title has-text-dark">{{ this.casi }}</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box style-box-yellow">
                            <p class="subtitle">Positivi</p>
                            <p class="title" style="color:#FFC107">{{ this.positivi }}</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box style-box-red">
                            <p class="subtitle">Deceduti</p>
                            <p class="title has-text-danger">{{ this.deceduti }}</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box style-box-green">
                            <p class="subtitle ì">Guariti</p>
                            <p class="title has-text-success">{{ this.guariti }}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <h4 class="has-text-centered is-size-5">Nuovi positivi: {{ this.nuoviPositivi }}</h4><br>          
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: 'CardStats',
        data: function() {
            return {
                loading: true,
                errored: false,
                info: null,
                guariti: 0,
                casi: 0,
                deceduti: 0,
                positivi: 0,
                nuoviPositivi: 0,
                dataAggiornamento: null
            }
        },
        mounted () {
            axios
            .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
            .then(response => {
                this.info = response.data;
                this.positivi = this.info[0].totale_positivi;
                this.guariti = this.info[0].dimessi_guariti;
                this.deceduti = this.info[0].deceduti;
                this.casi = this.info[0].totale_casi;
                this.nuoviPositivi = this.info[0].nuovi_positivi;
                this.dataAggiornamento = moment(this.info[0].data).format('MM/DD/YYYY');
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => this.loading = false)
        }
    }
</script>
