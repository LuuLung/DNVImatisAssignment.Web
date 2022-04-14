<template>
 <div class="container">
    <h2>You logged-in as: {{ selectedCompany.name }}</h2>
    <div class="list-package">
        <template v-for="packageItem in packages">
            <package-item :key="packageItem.id" class="package-item"  
                :package-item="packageItem"></package-item>
        </template>
    </div>
    <a-button type="primary" block class="cal-btn" @click="() => calculate()">Caculate</a-button>
    <div class="total-price">
      <a-statistic title="Total price" :value="totalPrice" style="margin-right: 50px" />
    </div>
 </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import packageItem from '~/components/package-item.vue'
export default {
  components: { packageItem },
    computed:{
    ...mapState([
      "selectedCompany",
    ]),
    ...mapState("promotion",[
        "packages",
        "packagesRequest",
        "totalPrice"
    ])
  },
  created() {
    this['promotion/getPackageWithPromotionByCompany']();
  },
  methods:{
    ...mapActions([
      'promotion/getPackageWithPromotionByCompany',
      'promotion/caculateThePriceWithPromotion'
    ]),
    calculate(){
        this['promotion/caculateThePriceWithPromotion']();
    }
  },
}
</script>
<style scoped>
.container {
  text-align: center;
  padding-bottom: 50px;
}

.list-package {
   padding-left: 20%;
   padding-right: 20%;  
}

.cal-btn {
    margin-top: 50px;
    width: 100%;
    max-width: 500px;
}

.package-item{
    margin-top: 20px;
}

.total-price {
  margin-top: 20px;
}
</style>