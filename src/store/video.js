
import videos from './../data/data.json';
const state = {
  videoList : [],
  category:[],
  listByCategory:[]
}
const getters = {
  getList : (state) =>{
    return state.videoList;
  },
  category : (state) =>{
    //eslint-disable-next-line
    debugger;
    return state.category;
  }
}
const mutations= {
  getList : (state, videos) => {
     state.videoList = videos;
  },
  category : (state, category)=>{
    state.category = category;
  },
  getByFilter : (state, listByCategory)=>{
    state.listByCategory = listByCategory;
  }
}
const actions ={
  filter({commit}, payload){
    let res = this.state.video.videoList;
    if(payload.category !== 'all'){
      res = this.state.video.videoList.filter(item => item.encoder === payload.category)
    }
    //eslint-disable-next-line
    debugger;
    commit('getByFilter', res);
  },
  loadGallery ({commit}) {
    return new Promise((resolve, reject)=>{
      if(!videos){
        reject('Failed to load video data')
      }
      commit('getList', videos);
      
      resolve(videos);
    });
  },
  getCategory({commit}){
    const category = this.state.video.videoList.reduce((preValue, currValue)=>{
      preValue = preValue || [];
      const res = preValue.some((e)=>{ return e === currValue.encoder});
      //eslint-disable-next-line
      //console.log(preValue, currValue, res);
      
      if(!res){
        preValue.push(currValue.encoder);
      }
      return preValue;
    }, []);
    //eslint-disable-next-line
    console.log(category);
    commit('category', category)
  }
}
export default {
  namespace : true,
  state, 
  getters, 
  actions,  mutations
}