<template>
<div class="row">
    <div class="col-lg-4 col-md-12">
        <div class="card">
            <div class="card-header">
                <h5 class="mt-2">Thêm Mới Loại Phòng</h5>
            </div>
            <div class="card-body">
                <div class="mb-2">
                    <label>Tên Loại Phòng</label>
                    <input v-model="loai_phong_create.ten_loai_phong" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                    <label>Diện Tích Phòng</label>
                    <input v-model="loai_phong_create.dien_tich" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                    <label>Số Giường</label>
                    <input v-model="loai_phong_create.so_giuong" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                    <label>Hình Ảnh</label>
                    <input v-model="loai_phong_create.hinh_anh" type="text" class="form-control mt-2">
                </div>
                <div class="mb-2">
                    <label>Tình Trạng</label>
                    <select v-model="loai_phong_create.tinh_trang" class="form-control mt-2">
                        <option value="1">Hoạt Động</option>
                        <option value="0">Tạm Dừng</option>
                    </select>
                </div>
            </div>
            <div class="card-footer text-end">
                <button v-on:click="themMoiLoaiPhong()" class="btn btn-primary">Thêm Mới</button>
            </div>
        </div>
    </div>
    <div class="col-lg-8 col-md-12">
        <div class="card">
            <div class="card-header">
                <h5 class="mt-2">Danh Sách Loại Phòng</h5>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">Tên Loại Phòng</th>
                            <th class="text-center">Diện Tích</th>
                            <th class="text-center">Số Giường</th>
                            <th class="text-center">Tình Trạng</th>
                            <th class="text-center">Hình Ảnh</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in ds_phong">
                            <th class="text-center align-middle">{{ index + 1 }}</th>
                            <td class="align-middle">{{ value.ten_loai_phong }}</td>
                            <td class="align-middle">{{ value.dien_tich }}</td>
                            <td class="align-middle">{{ value.so_giuong }}</td>
                            <td class="align-middle">{{ value.tinh_trang }}</td>
                            <td class="align-middle text-center">
                                <img v-bind:src="value.hinh_anh" class="img-fluid" style="height: 200px; width: 300px;">
                            </td>
                            <td class="text-center text-nowrap align-middle">
                                <button class="btn btn-info me-1">Cập Nhật</button>
                                <button v-on:click="xoaLoaiPhong(value.id)" class="btn btn-danger">Xoá Bỏ</button>
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
            ds_phong                :   [],
            loai_phong_create       :   {},
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        layDuLieu() {
            axios
                .get('http://127.0.0.1:8000/api/loai-phong/data')
                .then((res) => {
                    this.ds_phong = res.data.loai_phong;
                })
        },
        themMoiLoaiPhong() {
            axios
                .post("http://127.0.0.1:8000/api/loai-phong/create", this.loai_phong_create)
                .then((res) => {
                    if(res.data.status == true) {
                        alert(res.data.message);
                        this.layDuLieu();
                    }
                });
        },
        xoaLoaiPhong(id_can_xoa) {
            axios
                .delete("http://127.0.0.1:8000/api/loai-phong/delete/" + id_can_xoa)
                .then((res) => {
                    if(res.data.status == true) {
                        alert(res.data.message);
                        this.layDuLieu();
                    }
                });
        }
    },
}
</script>
<style>
    
</style>