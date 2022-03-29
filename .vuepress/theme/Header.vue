<template>
    <b-navbar type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand target="_self" href="https://crypto-studio.net/">
            <b-icon-menu-button-wide-fill></b-icon-menu-button-wide-fill>
        </b-navbar-brand>


            <b-navbar-nav class="mx-auto">
                <b-nav-item to="/create-token/" :active="page === 'Generator'"><img height="21" width="75" src="/assets/images/bsc.png"></b-nav-item>
                <b-nav-item target="_self" href="https://polygon.crypto-studio.net/"><img height="21" width="75" src="/assets/images/polygon.png"></b-nav-item>
                <b-nav-item target="_self" @click="$bvToast.show('my-toast')"><img height="21" width="75" src="/assets/images/ethereumgray.png"></b-nav-item>

                <b-toast id="my-toast" variant="info" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">ETHEREUM - Coming soon!</strong>
          <small class="text-muted mr-2">1 sec ago</small>
        </div>
      </template>
     Creator for ETHEREUM network is nearly finished. If you need it, please contact us by contact form and we will send you a link to BETA version.
    </b-toast>

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
