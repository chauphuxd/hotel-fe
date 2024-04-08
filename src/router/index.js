import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },
    {
        path: '/test-page',
        component: () => import('../components/TestPage/index.vue')
    },
    {
        path: '/admin/loai-phong',
        component: () => import('../components/Admin/LoaiPhong/index.vue')
    },
    // dich vu
    {
        path: '/admin/dich-vu',
        component: () => import('../components/Admin/DichVu/index.vue')
    },
    //phong
    {
        path: '/admin/quan-ly-phong',
        component: () => import('../components/Admin/Phong/index.vue')
    },
    //phong
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router