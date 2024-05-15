<template>
    AAAA
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    mounted() {
        this.guiTokenLenBE();
    },
    methods: {
        guiTokenLenBE() {
            axios
                .post('http://127.0.0.1:8000/api/kiem-tra-token-admin', {}, {
                    headers : {
                        Authorization : 'Bearer ' +  localStorage.getItem("token_admin")
                    }
                })
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    },
}
</script>
<style>
    
</style>