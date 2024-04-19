<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <label class="form-label">Ngày Đến</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col">
                                <label class="form-label">Ngày Đi</label>
                                <input type="date" class="form-control">
                            </div>
                            <div class="col">
                                <label class="form-label">Số Phòng</label>
                                <input type="number" class="form-control" placeholder="Nhập số lượng phòng">
                            </div>
                            <div class="col">
                                <label class="form-label">Số Người</label>
                                <input type="number" class="form-control" placeholder="Nhập số người lớn">
                            </div>
                            <div class="col">
                                <label class="form-label">Trẻ Em</label>
                                <input type="number" class="form-control" placeholder="Nhập số trẻ em">
                            </div>
                            <div class="col">
                                <button class="btn btn-warning w-100" style="margin-top: 28px;">Tìm Kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 d-flex justify-content-start">
                                <b class="me-2">
                                    <h4>Loại Phòng Deluxe</h4>
                                </b>
                                <div class="badge rounded-pill text-info bg-light-info text-uppercase px-3"
                                    style="padding-top: 10px;"><i class="fa-solid fa-thumbs-up"></i> Được đề xuất</div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-lg-4">
                                <p><b class="fs-5">Loại Phòng</b></p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MZRx0qcE5VbxzbB8BzOYSGOwBBIG_5REcg&s"
                                    class="img-fluid w-100" alt="">
                                <hr>
                                <p><i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích phòng: 24 m<sup>2</sup></p>
                                <p><i class="fa-solid fa-bed fa-xl me-2"></i> 1 giường đơn</p>
                                <p><i class="fa-solid fa-ban-smoking fa-xl me-2"></i> Không hút thuốc</p>
                                <p><i class="fa-solid fa-shower fa-xl me-2"></i> Vòi sen</p>
                                <p class="text-success"><i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các tiện ích
                                    khác</p>
                            </div>
                            <div class="col-lg-8">
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
                                                <th>

                                                </th>
                                                <th class="fs-5 mb-2">
                                                    Đặt nhiều nhất
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
                                                <td class="align-middle text-nowrap">
                                                    <div class="badge bg-danger text-white fs-6">-84% CHỈ HÔM NAY!</div>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5" style="flex-wrap: nowrap;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">-</button>
                                                        <input type="text" value="0" class="form-control text-center"
                                                            style="width: 50px;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">+</button>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Lợi ích</b>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Giá cực
                                                        thấp! (không hoàn tiền)</p>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Miễn phí
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
                                                <td class="text-center text-wrap">
                                                    <p>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-baby fa-xl"></i>
                                                    </p>
                                                    <i>Vượt quá giới hạn phòng</i>
                                                </td>
                                                <td class="text-end">
                                                    <div class="fs-6 text-decoration-line-through">3.666.667 đ</div>
                                                    <p class="text-danger"><b class="fs-4">599.999</b> đ</p>
                                                    <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="d-flex flex-column">
                                                    <button class="btn btn-primary w-100">Đặt ngay</button>
                                                    <button
                                                        class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">Thêm
                                                        vào xe đẩy hàng</button>
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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 d-flex justify-content-start">
                                <b class="me-2">
                                    <h4>Loại Phòng Deluxe</h4>
                                </b>
                                <div class="badge rounded-pill text-info bg-light-info text-uppercase px-3"
                                    style="padding-top: 10px;"><i class="fa-solid fa-thumbs-up"></i> Được đề xuất</div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-lg-4">
                                <p><b class="fs-5">Loại Phòng</b></p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MZRx0qcE5VbxzbB8BzOYSGOwBBIG_5REcg&s"
                                    class="img-fluid w-100" alt="">
                                <hr>
                                <p><i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích phòng: 24 m<sup>2</sup></p>
                                <p><i class="fa-solid fa-bed fa-xl me-2"></i> 1 giường đơn</p>
                                <p><i class="fa-solid fa-ban-smoking fa-xl me-2"></i> Không hút thuốc</p>
                                <p><i class="fa-solid fa-shower fa-xl me-2"></i> Vòi sen</p>
                                <p class="text-success"><i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các tiện ích
                                    khác</p>
                            </div>
                            <div class="col-lg-8">
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
                                                <th>

                                                </th>
                                                <th class="fs-5 mb-2">
                                                    Đặt nhiều nhất
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
                                                <td class="align-middle text-nowrap">
                                                    <div class="badge bg-danger text-white fs-6">-84% CHỈ HÔM NAY!</div>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5" style="flex-wrap: nowrap;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">-</button>
                                                        <input type="text" value="0" class="form-control text-center"
                                                            style="width: 50px;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">+</button>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Lợi ích</b>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Giá cực
                                                        thấp! (không hoàn tiền)</p>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Miễn phí
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
                                                <td class="text-center text-wrap">
                                                    <p>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-baby fa-xl"></i>
                                                    </p>
                                                    <i>Vượt quá giới hạn phòng</i>
                                                </td>
                                                <td class="text-end">
                                                    <div class="fs-6 text-decoration-line-through">3.666.667 đ</div>
                                                    <p class="text-danger"><b class="fs-4">599.999</b> đ</p>
                                                    <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="d-flex flex-column">
                                                    <button class="btn btn-primary w-100">Đặt ngay</button>
                                                    <button
                                                        class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">Thêm
                                                        vào xe đẩy hàng</button>
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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 d-flex justify-content-start">
                                <b class="me-2">
                                    <h4>Loại Phòng Deluxe</h4>
                                </b>
                                <div class="badge rounded-pill text-info bg-light-info text-uppercase px-3"
                                    style="padding-top: 10px;"><i class="fa-solid fa-thumbs-up"></i> Được đề xuất</div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-lg-4">
                                <p><b class="fs-5">Loại Phòng</b></p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MZRx0qcE5VbxzbB8BzOYSGOwBBIG_5REcg&s"
                                    class="img-fluid w-100" alt="">
                                <hr>
                                <p><i class="fa-solid fa-expand fa-xl me-2"></i> Diện tích phòng: 24 m<sup>2</sup></p>
                                <p><i class="fa-solid fa-bed fa-xl me-2"></i> 1 giường đơn</p>
                                <p><i class="fa-solid fa-ban-smoking fa-xl me-2"></i> Không hút thuốc</p>
                                <p><i class="fa-solid fa-shower fa-xl me-2"></i> Vòi sen</p>
                                <p class="text-success"><i class="fa-solid fa-circle-plus fa-xl me-2"></i> Các tiện ích
                                    khác</p>
                            </div>
                            <div class="col-lg-8">
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
                                                <th>

                                                </th>
                                                <th class="fs-5 mb-2">
                                                    Đặt nhiều nhất
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
                                                <td class="align-middle text-nowrap">
                                                    <div class="badge bg-danger text-white fs-6">-84% CHỈ HÔM NAY!</div>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="input-group d-flex justify-content-center flex-row mb-3 mt-5 mb-5" style="flex-wrap: nowrap;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">-</button>
                                                        <input type="text" value="0" class="form-control text-center"
                                                            style="width: 50px;">
                                                        <button class="btn btn-outline-secondary"
                                                            type="button">+</button>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Lợi ích</b>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Giá cực
                                                        thấp! (không hoàn tiền)</p>
                                                    <p><i class="fa-solid fa-check me-2 text-success me-2"></i> Miễn phí
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
                                                <td class="text-center text-wrap">
                                                    <p>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-person fa-2xl"></i>
                                                        <i class="fa-solid fa-baby fa-xl"></i>
                                                    </p>
                                                    <i>Vượt quá giới hạn phòng</i>
                                                </td>
                                                <td class="text-end">
                                                    <div class="fs-6 text-decoration-line-through">3.666.667 đ</div>
                                                    <p class="text-danger"><b class="fs-4">599.999</b> đ</p>
                                                    <i class="text-wrap">Giá mỗi đêm chưa bao gồm thuế và phí</i>
                                                </td>
                                                <td rowspan="2">
                                                    <div class="d-flex flex-column">
                                                    <button class="btn btn-primary w-100">Đặt ngay</button>
                                                    <button
                                                        class="btn btn-outline-primary w-100 mt-2 mb-5 text-wrap">Thêm
                                                        vào xe đẩy hàng</button>
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
        
    </div>
</template>
<script>
export default {

}
</script>
<style></style>