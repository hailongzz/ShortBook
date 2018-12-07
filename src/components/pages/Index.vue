<template>
  <div>
    <div>
      <van-row >
        <van-col span="24">
          
           <van-search placeholder="请输入搜索关键词" v-model="value" />
           <van-tabs id="navbar" v-model="active" swipeable animated>
                  <van-tab class="navbar-q" title="关注">
                    <goodsInfo></goodsInfo>
                  </van-tab>
                  <van-tab class="navbar-q" title="发现">
                    发现
                    </van-tab>
                  <van-tab title="附近">
                    附近
                    </van-tab>
              </van-tabs>
        </van-col>
      </van-row>
      
    </div>
    
  </div>
</template>

<script>
import goodsInfo from '../component/goodsInfoComponent'
export default {
  data () {
    return {
      active:0,
      value:'111'
    }
  },
  components:{goodsInfo}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
