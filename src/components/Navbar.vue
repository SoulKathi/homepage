<template>
    <nav>
        <div class="nav-wrapper indigo darken-4">
            <div class="container">
                <router-link to="/" class = "brand-logo">
                    <i class="fa fa-anchor"/>
                    Willkommen in meiner Welt
                </router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/">Startseite</router-link>
                    </li>
                    <li>
                        <router-link to="/blog/">Blog</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>