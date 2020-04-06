<template>
    <div>
        <h4 class="has-text-centered is-size-4">Ultimo aggiornamento: {{ this.dataAggiornamento }}</h4><br>          
       <!-- <b-table :data="info" :columns="columns"></b-table> -->
        
        <b-table :data="isEmpty ? [] :data">
            <template slot-scope="props">
                <b-table-column field="denominazione_regione" label="Regione" >
                    {{ props.row.denominazione_regione }}
                </b-table-column>

                <b-table-column field="totale_casi" label="Totale casi" numeric>
                    {{ props.row.totale_casi }}
                </b-table-column>

                <b-table-column field="totale_positivi" label="Totale positivi" numeric>
                    {{ props.row.totale_positivi }}
                </b-table-column>

                <b-table-column field="deceduti" label="Deceduti" numeric>
                    {{ props.row.deceduti }}
                </b-table-column>   

                <b-table-column field="dimessi_guariti" label="Guariti" numeric>
                    {{ props.row.dimessi_guariti }}
                </b-table-column>

                <b-table-column field="nuovi_positivi" label="Nuovi positivi" numeric>
                    {{ props.row.nuovi_positivi }}
                </b-table-column>
                
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Non ci sono dati.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: 'TableStats',
        data: function() {
            return {
                data: [],
                errored: false,
                loading: true,
                info: null,
                dataAggiornamento: null
            }
        },
        methods: {
            loadAsyncData(){
                axios
                .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
                .then(response => {
                    this.info = response.data;
                    this.dataAggiornamento = moment(this.info[0].data).format('DD/MM/YYYY');
                    for(var i in this.info) {
                        var item = this.info[i];
                        this.data.push({
                            'denominazione_regione': item.denominazione_regione,
                            'totale_casi': parseInt(item.totale_casi),
                            'totale_positivi': parseInt(item.totale_positivi),
                            'deceduti': parseInt(item.deceduti),
                            'dimessi_guariti': parseInt(item.dimessi_guariti),
                            'nuovi_positivi': parseInt(item.nuovi_positivi)
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)
            }
        },
         mounted() {
            this.loadAsyncData()
        }
    }
</script>
