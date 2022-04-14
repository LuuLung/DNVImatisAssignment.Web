export const state = () => ({
    packages: [],
    packagesRequest: {},
    totalPrice: 0
  })

export const mutations = {
  updatepackages(state,packages) {
    state.packages = packages;
  },
  updateTotalPrice(state, value){
    state.totalPrice = value || 0;
  },
  updatePackagesRequest(state, packagesReq){
    state.packagesRequest = packagesReq;
  },
  updateNumberOfPackage(state, {packageItem, number}){
      const packageReq =  state.packagesRequest.packages.find(x=>x.packageId === packageItem.id);
      if(packageReq){
        packageReq.numberOfPackage = number;
      }
  }
}

export const actions = {
    getPackageWithPromotionByCompany({state, commit, rootState }){
        return this.$axios
                .$get(`https://localhost:44312/api/Packages?CompanyId=${rootState.selectedCompany.id}`)
                .then((res) => {
                    commit('updatepackages', res)
                    const packageReq = {
                      companyId : rootState.selectedCompany.id,
                      packages:[]
                    };
                    res.forEach(packageItem => {
                        packageReq.packages.push(
                            {   
                                packageId : packageItem.id,
                                numberOfPackage : 0
                            });
                    });
                    commit('updatePackagesRequest',packageReq)
                })
    },
    caculateThePriceWithPromotion({state, commit, rootState }){
        return this.$axios
                .$post(`https://localhost:44312/api/Prices`,state.packagesRequest)
                .then((res) => {
                    commit('updateTotalPrice', res)
                })
    }
}