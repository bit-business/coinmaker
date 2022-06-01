<template>
    <b-container fluid class="footer">
        <b-row class="bg-dark text-light py-4">
            <b-col lg="12" xl="8" offset-xl="2">
                <b-row>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item href="https://crypto-studio.net/" class="text-light">
                                Crypto Studio
                            </b-list-group-item>
                            <b-list-group-item to="/docs/" class="text-light">
                                Documentation
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item to="/create-token/" class="text-warning">
                                Create BSC Token
                            </b-list-group-item>
                            <b-list-group-item href="https://polygon.crypto-studio.net/" target="_blank" class="text-light">
                                Create Polygon Token
                            </b-list-group-item>
                               <b-list-group-item to="/" class="text-light">
                                Create Ethereum Token
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item v-b-modal.modal-terms>
                                <small>Terms of Use</small>
                            </b-list-group-item>
                             <b-list-group-item class="text-light"  href="https://docs.google.com/forms/d/e/1FAIpQLScfsLa4mXu476eZg43GPJUcUx-RB_GzNuvYBpkP7E-YY7SXRA/viewform?usp=sf_link" target="_blank">
<small>Contact Us</small>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" xl="8" offset-xl="2">
                <hr>
                <b-list-group flush>
                    <b-list-group-item>
                        <small>
                            All rights reserved © 2022
                            <b-link class="text-warning text-center" href="https://crypto-studio.net/" target="_blank">
                                Crypto Studio
                            </b-link>
                        </small>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
         <b-modal id="modal-feedback"
                 title="Contact Us"
                 size="lg"
                 centered
                 hide-footer>
            <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScfsLa4mXu476eZg43GPJUcUx-RB_GzNuvYBpkP7E-YY7SXRA/viewform?usp=sf_link"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowfullscreen
            ></b-embed>
        </b-modal>
        <b-modal id="modal-terms"
                 title="Terms of Use"
                 size="lg"
                 centered
                 hide-footer>
            <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://crypto-studio.net/termsofuse"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowfullscreen
            ></b-embed>
        </b-modal>
    </b-container>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>
