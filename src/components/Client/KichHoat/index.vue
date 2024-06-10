<template>
    
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    props : ['ma_bi_mat'],
    mounted() {
        this.guiMaBiMatLenBe();
    },
    methods: {
        guiMaBiMatLenBe() {
            const payload = {
                'hash_active'   : this.$route.params.ma_bi_mat
            };
            axios
                .post("https://hotel-be.dzfullstack.edu.vn/api/khach-hang/kich-hoat", payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.$router.push('/khach-hang/dang-nhap');
                    } else {
                        toaster.error(res.data.message);
                        this.$router.push('/');
                    }
                });
        },
    },
}
</script>
<style lang="">
    
</style>