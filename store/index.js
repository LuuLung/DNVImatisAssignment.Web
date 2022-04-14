export const state = () => ({
    companies: [],
    selectedCompany:{}
  })

export const mutations = {
  updateCompanies(state,companies) {
    state.companies = companies;
  },
  updateSelectedCompany(state,company){
    state.selectedCompany = company;
}
}

export const actions = {
    getCompanies({commit}){
        return this.$axios
                .$get('https://localhost:44312/api/Companies')
                .then((res) => {
                    commit('updateCompanies', res)
                })
    }
}