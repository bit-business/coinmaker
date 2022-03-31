<template>
    <b-navbar type="dark" variant="dark">

        <b-navbar-brand target="_self" href="https://crypto-studio.net/">
       <button type="button" class="btn btn-dark">
<b-icon-menu-button-wide-fill></b-icon-menu-button-wide-fill></button>
        </b-navbar-brand>

            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/create-token/" :active="page === 'Generator'"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/bsc.png"></button></b-nav-item>
                <b-nav-item target="_self" href="https://polygon.crypto-studio.net/"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/polygon.png"></button></b-nav-item>
                <b-nav-item target="_self" @click="$bvToast.show('my-toast')"><button type="button" class="btn btn-outline-secondary"><img height="21" width="75" src="/assets/images/ethereumgray.png"></button></b-nav-item>

                <b-toast id="my-toast" variant="info" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">ETHEREUM - Coming soon!</strong>
          <small class="text-muted mr-2">1 sec ago</small>
        </div>
      </template>
     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.
    </b-toast>
       <b-navbar-brand>
        </b-navbar-brand><button disabled class="btn btn-dark"></button>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      page: {
        type: String,
        default: null,
      },
    },
  };
</script>
