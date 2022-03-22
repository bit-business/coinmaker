<template>
    <b-container fluid class="footer">
        <b-row class="bg-dark text-light py-4">
            <b-col lg="12" xl="8" offset-xl="2">
                <b-row>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item to="/" class="text-light">
                                Crypto Studio
                            </b-list-group-item>
                            <b-list-group-item to="/docs/" class="text-light">
                                Documentation
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item to="/create-token/" class="text-light">
                                Create BEP20 Token
                            </b-list-group-item>
                            <b-list-group-item href="https://bit-business.github.io/erc20-generator/" target="_blank" class="text-warning">
                                Create ERC20 Token
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item v-b-modal.modal-terms>
                                <small>Terms of Use</small>
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
                            by
                            <b-link class="text-warning" href="#" target="_blank">
                                Crypto Studio
                            </b-link>
                        </small>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
        <b-modal id="modal-terms"
                 title="Terms of Use"
                 size="lg"
                 centered
                 hide-footer>
            <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://bit-business.github.io/coinmaker-terms/"
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
