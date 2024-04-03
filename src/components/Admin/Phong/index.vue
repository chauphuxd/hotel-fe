<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5 class="mt-2">Danh Sách Phòng</h5>
                    <button data-bs-toggle="modal" data-bs-target="#createModal" class="btn btn-outline-primary">Thêm Mới</button>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Phòng</th>
                                <th class="text-center">Slug Phòng</th>
                                <th class="text-center">Loại Phòng</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="text-center align-middle">1</th>
                                <th class="align-middle">A01</th>
                                <td class="align-middle">a01</td>
                                <td class="align-middle">Luxury</td>
                                <td class="text-center align-middle">1</td>
                                <td class="text-center text-nowrap align-middle">
                                    <button data-bs-toggle="modal" data-bs-target="#updateModal"
                                        class="btn btn-info me-1">Cập Nhật</button>
                                    <button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        class="btn btn-danger">Xoá Bỏ</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Phòng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-2">
                                    <label>Tên Phòng</label>
                                    <input type="text"
                                        class="form-control mt-2">
                                </div>
                                <div class="mb-2">
                                    <label>Slug Phòng</label>
                                    <input type="text"
                                        class="form-control mt-2">
                                </div>
                                <div class="mb-2">
                                    <label>Loại Phòng</label>
                                    <select class="form-control mt-2" >
                                        <option value="1">AAA</option>
                                    </select>
                                </div>
                                <div class="mb-2">
                                    <label>Tình Trạng</label>
                                    <select class="form-control mt-2">
                                        <option value="1">Hoạt Động</option>
                                        <option value="0">Tạm Dừng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận Thêm Mới</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Xóa Phòng -->
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Phòng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-danger" role="alert">
                                    Bạn thật sự có muốn xoá phòng này không?
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận
                                    Xoá</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Cập Nhật Phòng -->
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Phòng</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-2">
                                    <label>Tên Phòng</label>
                                    <input type="text"
                                        class="form-control mt-2">
                                </div>
                                <div class="mb-2">
                                    <label>Slug Phòng</label>
                                    <input type="text"
                                        class="form-control mt-2">
                                </div>
                                <div class="mb-2">
                                    <label>Loại Phòng</label>
                                    <select class="form-control mt-2" >
                                        <option value="1">AAA</option>
                                    </select>
                                </div>
                                <div class="mb-2">
                                    <label>Tình Trạng</label>
                                    <select class="form-control mt-2">
                                        <option value="1">Hoạt Động</option>
                                        <option value="0">Tạm Dừng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận Cập
                                    Nhật</button>
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