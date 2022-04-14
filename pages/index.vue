<template>
<div class="container">
  <h2>You will log-in as:</h2>
  <div class="grid">
    <template v-for="company in companies">
      <a-card-grid :key="company.id" class="card-grid" @click="() => selectCompany(company)">
        <p>{{ company.name }}</p>
      </a-card-grid>
    </template>
  </div>
</div>
</template>

<script>
import { mapActions, mapState, mapMutations  } from 'vuex'
export default {
  name: 'IndexPage',
  computed:{
    ...mapState([
      "companies"
    ])
  },
  created() {
    this.getCompanies()
  },
  methods:{
    ...mapActions([
      'getCompanies', 
    ]),
    ...mapMutations([
      'updateSelectedCompany'
    ]),
    selectCompany(item){
      this.updateSelectedCompany(item);
      this.$router.push("/promotion");
    }
  },
  
}
</script>
<style scoped>
.container {
  text-align: center;
}

.grid {
  display: flex;
  justify-content: center;
}

.card-grid {
 width: 300px;
 cursor: pointer;
}
</style>