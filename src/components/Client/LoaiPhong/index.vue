<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col mt-2">
                                <label class="form-label">Ngày Đến</label>
                                <input v-model="tt_dat_phong.ngay_den" type="date" class="form-control">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Ngày Đi</label>
                                <input v-model="tt_dat_phong.ngay_di" type="date" class="form-control">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Số Phòng</label>
                                <input v-model="tt_dat_phong.so_phong" type="number" class="form-control"
                                    placeholder="Nhập số lượng phòng">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Số Người</label>
                                <input v-model="tt_dat_phong.nguoi_lon" type="number" class="form-control"
                                    placeholder="Nhập số người lớn">
                            </div>
                            <div class="col mt-2">
                                <label class="form-label">Trẻ Em</label>
                                <input v-model="tt_dat_phong.tre_em" type="number" class="form-control"
                                    placeholder="Nhập số trẻ em">
                            </div>
                            <div class="col mt-2">
                                <button class="btn btn-warning w-100" style="margin-top: 28px;">Tìm Kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template v-for="(value, index) in ds_loai_phong" :key="index">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 d-flex justify-content-start">
                                    <b class="mt-2">
                                        <h4>Loại {{ value.ten_loai_phong }}</h4>
                                    </b>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-3">
                                    <b class="fs-5 pd-4">Hình Ảnh</b>
                                    <img v-bind:src="value.hinh_anh" class="img-fluid w-100 mt-3" alt="">
                                    <hr>
                                    <p><i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích phòng: {{ value.dien_tich }} m<sup>2</sup>
                                    </p>
                                    <p><i class="fa-solid fa-bed fa-xl me-2"></i> {{ value.so_giuong }} giường</p>
                                    <p class="text-success" data-bs-toggle="collapse" :href="'#collapseExample' + value.id">
                                        <i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các tiện ích khác</p>
                                    <div class="collapse" :id="'collapseExample' + value.id">
                                        <div>
                                            <span v-html="value.tien_ich"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th class="fs-5 mb-2">
                                                        Giá này đã gồm
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Sức chứa
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Giá phòng/đêm
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Số phòng
                                                    </th>
                                                    <th class="fs-5 mb-2">
                                                        Đặt phòng
                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody class="border border-warning border-4 ">
                                                <tr>
                                                    <th class="align-middle text-light fs-5 text-nowrap"
                                                        style="background-color: orange;">
                                                        Giá thấp nhất!
                                                    </th>
                                                    <td class="text-center align-middle">
                                                        <i class="fa-solid fa-circle-info text-secondary"></i>
                                                    </td>
                                                    <td class="align-middle text-nowrap text-center">
                                                        <div
                                                            class="badge bg-danger text-white fs-6 text-decoration-line-through">
                                                            3.666.667 đ</div>
                                                    </td>
                                                    <td rowspan="2">
                                                        <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5"
                                                            style="flex-wrap: nowrap;">
                                                            <button class="btn btn-outline-secondary"
                                                                type="button">-</button>
                                                            <input type="text" value="0"
                                                                class="form-control text-center" style="width: 50px;">
                                                            <button class="btn btn-outline-secondary"
                                                                type="button">+</button>
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Lợi ích</b>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Giá
                                                            cực
                                                            thấp! (không hoàn tiền)</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Miễn
                                                            phí
                                                            2 suất ăn sáng</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nước
                                                            uống chào đón, Cà phê & trà</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nhận
                                                            phòng nhanh</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Wifi
                                                            miễn phí</p>
                                                        <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Nước
                                                            uống miễn phí</p>
                                                    </td>
                                                    <td class="text-center text-nowrap">
                                                        <p>
                                                            <template v-for="(v, k) in value.so_nguoi_lon" :key="k">
                                                                <i class="text-primary fa-solid fa-person fa-2xl"></i>
                                                            </template>
                                                            <template v-for="(v, k) in value.so_tre_em" :key="k">
                                                                <i class="text-info fa-solid fa-baby fa-xl"></i>
                                                            </template>
                                                        </p>
                                                        <!-- <i>Vượt quá giới hạn phòng</i> -->
                                                    </td>
                                                    <td class="text-end">
                                                        <p class="text-success text-center"><b class="fs-5">599.999</b>
                                                            đ
                                                        </p>
                                                        <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                                                    </td>
                                                    <td rowspan="2">
                                                        <div class="d-flex flex-column">
                                                            <button class="btn btn-primary w-100">Đặt ngay</button>
                                                            <button
                                                                class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">Giỏ
                                                                hàng</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            tt_dat_phong: {},
            ds_loai_phong: [],
        }
    },
    mounted() {
        this.tt_dat_phong.ngay_den = this.$route.params.ngay_den;
        this.tt_dat_phong.ngay_di = this.$route.params.ngay_di;
        this.tt_dat_phong.so_phong = this.$route.params.so_phong;
        this.tt_dat_phong.nguoi_lon = this.$route.params.nguoi_lon;
        this.tt_dat_phong.tre_em = this.$route.params.tre_em;

        this.layDanhSachPhong();
    },
    methods: {
        layDanhSachPhong() {
            axios
                .get('http://127.0.0.1:8000/api/loai-phong/data')
                .then((res) => {
                    this.ds_loai_phong = res.data.loai_phong;
                })
        }
    },
}
</script>
<style></style>