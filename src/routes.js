/**
 * Created by dasco on 3/19/2017.
 */
import Home from './components/Home.vue';
import Social from './components/content/Social.vue';
import Blog from './components/content/Blog.vue';
import Gallery from './components/content/Gallery.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/blog', component: Blog},
    { path: '/gallery', component: Gallery},
    { path: '/social', component: Social}
];
