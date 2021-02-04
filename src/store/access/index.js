export default { 
   state() {
      return {
         access: localStorage.getItem("fcToken") || ""
      }
   },
   getters: {
      getAccess: function (state) { 
         return localStorage.getItem("fcToken");
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