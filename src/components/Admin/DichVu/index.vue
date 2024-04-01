<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Dịch Vụ</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Tên Dịch Vụ</label>
                        <input v-model="dich_vu_create.ten_dich_vu" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Đơn Giá</label>
                        <input v-model="dich_vu_create.don_gia" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Đơn Vị Tính</label>
                        <input v-model="dich_vu_create.don_vi_tinh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Ghi Chú</label>
                        <input v-model="dich_vu_create.ghi_chu" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="dich_vu_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiDichVu()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Dịch Vụ</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Dịch Vụ</th>
                                <th class="text-center">Đơn Giá</th>
                                <th class="text-center">Đơn Vị Tính</th>
                                <th class="text-center">Ghi Chú</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in ds_dich_vu">
                                <th class="text-center align-middle">{{ index + 1 }}</th>
                                <td class="align-middle">{{ value.ten_dich_vu }}</td>
                                <td class="align-middle">{{ value.don_gia }}</td>
                                <td class="align-middle">{{ value.don_vi_tinh }}</td>
                                <td class="align-middle">{{ value.ghi_chu }}</td>
                                <td class="align-middle">{{ value.tinh_trang }}</td>
                                <td class="text-center text-nowrap align-middle">
                                    <button class="btn btn-info me-1">Cập Nhật</button>
                                    <button v-on:click="xoaDichVu(value.id)" class="btn btn-danger">Xoá Bỏ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            ds_dich_vu: [],
            dich_vu_create: {},
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        layDuLieu() {
            axios
                .get('http://127.0.0.1:8000/api/dich-vu/data')
                .then((res) => {
                    this.ds_dich_vu = res.data.dich_vu;
                })
        },
        themMoiDichVu() {
            axios
                .post("http://127.0.0.1:8000/api/dich-vu/create", this.dich_vu_create)
                .then((res) => {
                    if (res.data.status == true) {
                        alert(res.data.message);
                        this.layDuLieu();
                    }
                });
        },
        xoaDichVu(id_can_xoa) {
            axios
                .delete("http://127.0.0.1:8000/api/dich-vu/delete/" + id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        alert(res.data.message);
                        this.layDuLieu();
                    }
                });
        }
    },
}
</script>
<style></style>