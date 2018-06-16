<template>
    <div id="new-article">
        <h4 class="red-text text-darken-4">
            New Article
        </h4>
        <div class="row">
            <form @submit.prevent="saveArticle" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="number" v-model="article_id" required>
                        <label class="indigo-text text-darken-4">Article ID</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="title" required>
                        <label class="indigo-text text-darken-4">Title</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="author" required>
                        <label class="indigo-text text-darken-4">Author</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea class="indigo-text text-darken-4" type="text" v-model="content" required/>
                        <label class="indigo-text text-darken-4">Article</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="category" required>
                        <label class="indigo-text text-darken-4">Category</label>
                    </div>
                </div>
                <div class="fixed-action-btn">
                    <button type="submit" class="btn-floating btn-large indigo darken-4">
                        <i class="fa fa-check"/>
                    </button>
                    <router-link to="/blog/" class="btn-floating btn-large indigo darken-4">
                        <i class="fa fa-arrow-left"/>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'new-article',
    data () {
        return {
            article_id: null,
            title: null,
            author: null,
            category: null,
            content: null
        }
    },
    methods: {
        saveArticle () {
            db.collection('articles').add({
                article_id: this.article_id,
                title: this.title,
                author: this.author,
                content: this.content,
                category: this.category
            }).then(docRef => this.$router.push('/blog/'))
            .catch(error => console.log(err))
        }
    }
}
</script>