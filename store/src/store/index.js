import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex)


let store = new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        changeList (state,payload){
            state.list = payload.list;
        }
    },
    actions:{
        getDateAction(store){
            Axios.get('http://192.168.43.201:3000/info')
            .then(function(params){
                console.log(params.data.data)
                store.commit('changeList',{
                    list:params.data.data
                })
            })
        }
    }
})

export default store
