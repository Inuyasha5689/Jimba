<template>
    <footer class="row-footer" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <label for="links" id="label">Website Links</label>
                    <ul id="links">
                        <router-link to="/" tag="li"><a>Home</a></router-link>
                        <router-link to="/blog" tag="li"><a>Blog</a></router-link>
                        <router-link to="/social" tag="li"><a>Social Media Links</a></router-link>
                        <router-link to="/gallery" tag="li"><a>Art Gallery</a></router-link>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped="true">
    #footer {
        background-color: #2B2B2B;
        color: #8EB8E5;
    }

    #links {
        list-style: none;
        padding-top: 10px;
        text-align: left;
        padding-left: 0;
    }

    #label {
        text-align: center;
    }

    a {
        color: #42b983;
    }
</style>