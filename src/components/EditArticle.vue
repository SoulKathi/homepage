<template>
    <div id="edit-article">
        <h4 class="red-text text-darken-4">
            Artikel bearbeiten
        </h4>
        <div class="row">
            <form @submit.prevent="updateArticle" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="number" v-model="article_id" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="title" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="author" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea class="indigo-text text-darken-4" type="text" v-model="content" required/>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input class="indigo-text text-darken-4" type="text" v-model="category" required>
                    </div>
                </div>
                <div class="fixed-action-btn">
            <button type="submit" class="btn-floating btn-large indigo darken-4">
                <i class="fa fa-check"/>
            </button>
            <router-link to="/blog/" class="btn-floating btn-large indigo darken-4">
                <i class="fa fa-arrow-left"/>
            </router-link>
            <button @click="deleteArticle" class="btn-floating btn-large red darken-4">
                <i class="fa fa-times"/>
            </button>
        </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'edit-article',
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
        deleteArticle(){
            if(confirm('Are your sure?')){
                db.collection('articles').where('article_id','==',this.$route.params.article_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                    this.$router.push('/blog/')
                })
            })
            }
        }
    }
}
</script>