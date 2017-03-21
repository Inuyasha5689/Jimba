<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/" tag="li"><a>Home</a></router-link>
                        <router-link to="/blog" tag="li"><a>Blog</a></router-link>
                        <router-link to="/gallery" tag="li"><a>Art Gallery</a></router-link>
                        <router-link to="/social" tag="li"><a>Social Media Links</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <router-link to="/login" tag="li"><a>Login</a></router-link>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="jumbotron">
            <div class=" container image" :style="{backgroundImage: 'url(' + image + ')'}" id="jumbo">
            </div>
            <h1 id="heading">Jimba's Website!</h1>
        </header>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                banners: [
                    'src/assets/1459954194.jimdevries12_ice_cream_ych.png',
                    'src/assets/1472772497.jimdevries12_1471310634.kofiloki_jim_background.png',
                    'src/assets/1480852337.jimdevries12_9tybizm_-_imgur.png',
                    'src/assets/1484757945.shiki-kun-baka_всыф.png'
                ],
                image: "src/assets/1459954194.jimdevries12_ice_cream_ych.png"
            }
        },
        methods: {
            cycleBanner() {
                var vm = this;
                var i = 1;
                let inter = function () {
                    if ( i >= vm.banners.length ){
                        i = 0;
                    }
                    vm.image =vm.banners[i];
                    i++;

                    console.log(vm.image);
                };
                var intervalID = setInterval(inter, 5000);
            }
        },
        mounted() {
            var vm = this;
            vm.cycleBanner();
        }

    }
</script>

<style scoped="true">

    .jumbotron {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .image {
        padding-top: 20px;
        position: relative;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0.5;
        width: 100%;
        height: 250px;
    }

    #heading {
        position: absolute;
        width: 100%;
        top: 100px;
        left: 0px;
    }
</style>