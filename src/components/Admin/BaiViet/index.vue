<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Thêm Mới Bài Viết</h5>
                </div>
                <div class="card-body">
                    <div class="mb-2">
                        <label>Tên Bài Viết</label>
                        <input v-model="bai_viet_create.ten_bai_viet" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Mô Tả Ngắn</label>
                        <input v-model="bai_viet_create.mo_ta_ngan" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Mô Tả Chi Tiết</label>
                        <input v-model="bai_viet_create.mo_ta_chi_tiet" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input v-model="bai_viet_create.hinh_anh" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="bai_viet_create.tinh_trang" class="form-control mt-2">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themMoiBaiViet()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Bài Viết</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên Bài Viết</th>
                                    <th class="text-center">Mô Tả Ngắn</th>
                                    <th class="text-center">Mô Tả Chi Tiết</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in ds_bai_viet" :key="index">
                                    <th class="text-center align-middle">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ten_bai_viet }}</td>
                                    <td class="align-middle ">{{ value.mo_ta_ngan }}</td>
                                    <td class="align-middle text-center">
                                        <i v-on:click="Object.assign(mo_ta_chi_tiet, value)"
                                            class="fa-solid fa-circle-info fa-2xl" data-bs-toggle="modal"
                                            data-bs-target="#motachitiet"></i>
                                    </td>
                                    <td class="align-middle text-center">
                                        <img v-bind:src="value.hinh_anh" class="img-fluid"
                                            style="width: 100px; height: 100px;">
                                    </td>
                                    <td class="align-middle text-center">
                                        <button v-if="value.tinh_trang == 0" class="btn btn-warning">Tạm Dừng</button>
                                        <button v-if="value.tinh_trang == 1" class="btn btn-primary">Hoạt Động</button>
                                    </td>
                                    <td class="text-center text-nowrap align-middle">
                                        <button v-on:click="Object.assign(bai_viet_update, value)"
                                            data-bs-toggle="modal" data-bs-target="#updateModal"
                                            class="btn btn-info me-1">Cập Nhật</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            v-on:click="id_can_xoa = value.id" class="btn btn-danger">Xoá Bỏ</button>
                                    </td>
                                </tr>
                                <div class="modal fade" id="deleteModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Bài Viết</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="alert alert-danger" role="alert">
                                                    Bạn thật sự có muốn xoá bài viết này không?
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="xoaBaiViet()" type="button" class="btn btn-danger"
                                                    data-bs-dismiss="modal">Xác Nhận Xoá</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="updateModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Bài Viết
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                                <div class="mb-2">
                                                    <label>Tên Bài Viết</label>
                                                    <input v-model="bai_viet_update.ten_bai_viet" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Mô Tả Ngắn</label>
                                                    <input v-model="bai_viet_update.mo_ta_ngan" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Mô tả chi tiết</label>
                                                    <input v-model="bai_viet_update.mo_ta_chi_tiet" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Hình Ảnh</label>
                                                    <input v-model="bai_viet_update.hinh_anh" type="text"
                                                        class="form-control mt-2">
                                                </div>
                                                <div class="mb-2">
                                                    <label>Tình Trạng</label>
                                                    <select v-model="bai_viet_update.tinh_trang"
                                                        class="form-control mt-2">
                                                        <option value="1">Hoạt Động</option>
                                                        <option value="0">Tạm Dừng</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button v-on:click="capNhatBaiViet()" type="button"
                                                    class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận Cập
                                                    Nhật</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="motachitiet" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog text-wrap modal-xl" >
                                        <div class="modal-content ">
                                            <div class="modal-body ">
                                                    {{ mo_ta_chi_tiet.mo_ta_chi_tiet }}
                                                    <!-- {{ mo_ta_chi_tiet.mo_ta_chi_tiet }} -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
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
            ds_bai_viet: [],
            bai_viet_create: {},
            bai_viet_update: {},
            mo_ta_chi_tiet: {},
            id_can_xoa: '',
        }
    },
    mounted() {
        this.layDuLieu();
    },
    methods: {
        layDuLieu() {
            axios
                .get('http://127.0.0.1:8000/api/bai-viet/data')
                .then((res) => {
                    this.ds_bai_viet = res.data.bai_viet;
                })
        },
        themMoiBaiViet() {
            axios
                .post("http://127.0.0.1:8000/api/bai-viet/create", this.bai_viet_create)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        },
        xoaBaiViet() {
            axios
                .delete("http://127.0.0.1:8000/api/bai-viet/delete/" + this.id_can_xoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        },
        capNhatBaiViet() {
            axios
                .put("http://127.0.0.1:8000/api/bai-viet/update", this.bai_viet_update)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success(res.data.message)
                        this.layDuLieu();
                    }
                });
        }
    },
}
</script>
<style></style>