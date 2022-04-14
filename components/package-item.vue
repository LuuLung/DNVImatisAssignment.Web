<template>
    <a-card :title="packageItem.name" class="package-item">
        <div> {{packageItem.description}}</div>
        <div v-if="packageItem.promotions.length > 0"> 
            <p>Promotion: </p>
            <template v-for="promotion in packageItem.promotions">
                <p :key="promotion.id" class="promotion-item" > - {{promotion.name}} </p>
            </template>
        </div>
        <div class="number-package">
            <div><a-input-number  id="numberPackage" :min="0" :defaultValue="0" @change="changed($event)" /></div>
            <div>X</div>
            <div><a-statistic :precision="2" :value="packageItem.price" /> / Person</div>
        </div>   
    </a-card>
</template>
<script>
import { mapMutations} from 'vuex'
export default {
   props: {
       packageItem : {
           type: Object,
           required: true
       }
   },
   methods:{
       ...mapMutations('promotion',[
            'updateNumberOfPackage'
        ]),
       changed(e){
           this.updateNumberOfPackage( {  packageItem: this.packageItem, number : e } );
       }
   }
}
</script>
<style scoped>
.package-item {
    text-align: left;
}

.number-package {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.promotion-item {
    color: red;
}
</style>