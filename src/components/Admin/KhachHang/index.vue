<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                Danh Sách Khách Hàng 
            </div>
            <div class="card-body">
                <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="align-middle">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Ngày Sinh</th>
                                    <th class="text-center">Số Điện Thoại</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Active</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_khach_hang" :key="index">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.ho_lot }} {{ value.ten }}</td>
                                        <td class="text-center">{{ value.email }}</td>
                                        <td class="text-center">{{ value.ngay_sinh }}</td>
                                        <td class="text-center">{{ value.so_dien_thoai }}</td>
                                        <td class="text-center">
                                            <button v-if="value.is_block == 0" class="btn btn-success" v-on:click="doiTrangThai(value)">Hoạt Động</button>
                                            <button v-else class="btn btn-danger" v-on:click="doiTrangThai(value)">Tạm Tắt</button>
                                        </td>
                                        <td class="text-center">
                                            <button v-if="value.is_active == 1" class="btn btn-primary">Đã Kích Hoạt</button>
                                            <button v-else class="btn btn-warning">Chưa Kích Hoạt</button>
                                        </td>
                                        <td class="text-center text-nowrap">
                                            <button class="btn btn-primary me-1">Cập Nhật</button>
                                            <button class="btn btn-danger">Xoá</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_khach_hang : [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios   
                .get('http://127.0.0.1:8000/api/khach-hang/data')
                .then((res) => {
                    this.list_khach_hang = res.data.data;
                })
        },

        doiTrangThai(xxx) {
            axios   
                .put('http://127.0.0.1:8000/api/khach-hang/doi-trang-thai', xxx)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadData();
                    } else {
                        toaster.error(res.data.message)
                    }
                })
        }
    },
}
</script>
<style>
    
</style>