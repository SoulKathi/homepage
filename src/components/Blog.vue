<template>
    <div id="blog">
        <h4 class="red-text text-darken-4">
            Blog
        </h4>

        <div class="row indigo-text text-darken-4" v-for="article in articles" v-bind:key="article.id">
            <div class="col s2 right-align">
                <div class="chip indigo darken-4 white-text">
                    {{article.category}}
                </div>
            </div>
            <div class="col s4 center-align">
                {{article.title}}
            </div>
            <div class="col s3 left-align">
                <i>
                    by {{article.author}}
                </i>
            </div>
            <div class="col s3">
                <button @click="deleteArticle(article.article_id)" class="secondary-content red darken-4 btn-floating">
                    <i class="fa fa-times"/>
                </button>
                <router-link class="secondary-content indigo darken-4 btn-floating" v-bind:to="{name: 'edit-article', params: {article_id: article.article_id}}">
                    <i class="fa fa-pencil"/>
                </router-link>
                <router-link class="secondary-content indigo darken-4 btn-floating" v-bind:to="{name: 'view-article', params: {article_id: article.article_id}}">
                    <i class="fa fa-eye"/>
                </router-link>
            </div>
        </div> 

        <div class="fixed-action-btn">
            <router-link to="/blog/new" class="btn-floating btn-large red darken-4">
                <i class="fa fa-plus"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'blog',
    data () {
        return {
            articles: []
        }
    },
    created () {
        db.collection('articles').orderBy('article_id').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'article_id': doc.data().article_id,
                    'title': doc.data().title,
                    'content': doc.data().content,
                    'author': doc.data().author,
                    'category': doc.data().category
                }
                this.articles.push(data)
            })
        })
    },
    methods: {
        deleteArticle(article_id){
            if(confirm('Are your sure?')){
                db.collection('articles').where('article_id', '==', article_id).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        //hier muss noch ein Reload eingefügt werden.
                        this.$router.push('/blog/')
                    })
                })
            }
        }
    }
}
</script>

