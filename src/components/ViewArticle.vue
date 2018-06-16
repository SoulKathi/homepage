<template>
    <div id="view-article">
        <h4 class="red-text text-darken-4">
            {{title}}
        </h4>
        <div class="row indigo-text text-darken-4">
        <div class ="col s10">
            <i>
                by {{author}}
            </i>
        </div>
        <div class ="col s2 align-right">
            <div class="chip indigo darken-4 white-text">
                {{category}}
            </div>
        </div>
        </div>
        <div class="indigo-text text-darken-4">
            {{content}}
        </div>
        <div class="fixed-action-btn">
            <!--<router-link v-bind:to="{name: 'edit-article', params:{article_id: article_id}}" class="btn-floating btn-large indigo darken-4">
                <i class="fa fa-pencil"/>
            </router-link>-->
            <router-link to="/blog/" class="btn-floating btn-large indigo darken-4">
                <i class="fa fa-arrow-left"/>
            </router-link>
            <!--<button @click="deleteArticle" class="btn-floating btn-large red darken-4">
                <i class="fa fa-times"/>
            </button>-->
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-article',
    data () {
        return {
            article_id: null,
            title: null,
            content: null,
            author: null,
            category: null
        }
    },
    beforeRouteEnter(to, from, next){
        db.collection('articles').where('article_id','==',to.params.article_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.article_id = doc.data().article_id
                    vm.title = doc.data().title
                    vm.content = doc.data().content
                    vm.author = doc.data().author
                    vm.category = doc.data().category
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData (){
            db.collection('articles').where('article_id','==',this.$route.params.article_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.article_id = doc.data().article_id
                    this.title = doc.data().title
                    this.content = doc.data().content
                    this.author = doc.data().author
                    this.category = doc.data().category
                })
            })
        },
        /*deleteArticle(){
            if(confirm('Are your sure?')){
                db.collection('articles').where('article_id','==',this.$route.params.article_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                    this.$router.push('/blog/')
                })
            })
            }
        }*/
    }
}
</script>