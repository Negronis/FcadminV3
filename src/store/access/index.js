export default { 
   state() {
      return {
         access: localStorage.getItem("fcToken") || ""
      }
   },
   getters: {
      getAccess: function (state) { 
         return state.access;
      }
   },
   mutations: {
      setAccess: (state, n) => {
         state.access = n;
      }
   },
   actions: {

   }
}