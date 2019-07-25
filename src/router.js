import VueRouter from 'vue-router';

import list from './main/list.vue';
import fa from './main/fa.vue';
import login from './main/login.vue';
import register from './main/register.vue';

const router = new VueRouter({
  routes:[
    { path:'/fa',
      component:fa,
      children:[
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    },
    {path:'/list',component:list}
  ]
})
export default router;