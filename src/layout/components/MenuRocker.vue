<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title text-nowrap">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i
                                    class="bx bx-right-arrow-alt"></i>Alternate</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i
                                    class="bx bx-right-arrow-alt"></i>Graphical</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/loai-phong">
                        <a class="nav-link" href="/admin/loai-phong">
                            <div class="parent-icon"><i class="fa-solid fa-chess-rook"></i>
                            </div>
                            <div class="menu-title text-nowrap">Loại Phòng</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/dich-vu">
                        <a class="nav-link" href="/admin/dich-vu">
                            <div class="parent-icon"><i class="fa-brands fa-servicestack"></i>
                            </div>
                            <div class="menu-title text-nowrap">Dịch Vụ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    
                    <router-link to="/admin/quan-ly-phong">
                        <a class="nav-link" href="/admin/quan-ly-phong">
                            <div class="parent-icon"><i class="fa-solid fa-hotel"></i>
                            </div>
                            <div class="menu-title text-nowrap">Quản Lý Phòng</div>
                        </a>
                    </router-link>
                        <ul class="dropdown-menu">
                                <li> 
                                    <router-link to="/admin/chi-tiet-thue-phong">
                                        <a class="dropdown-item"  href="/admin/chi-tiet-thue-phong" >
                                        <i class="bx bx-right-arrow-alt"></i>Chi tiết thuê phòng</a>
                                    </router-link>
                                </li>
                                <li> 
                                    <router-link to="/admin/tinh-trang-phong">
                                        <a class="dropdown-item"  href="/admin/tinh-trang-phong" >
                                        <i class="bx bx-right-arrow-alt"></i>Tình trạng phòng</a>
                                    </router-link>
                                </li>
                        </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/nhan-vien">
                        <a class="nav-link" href="/admin/nhan-vien">
                            <div class="parent-icon"><i class="fa-solid fa-users"></i>
                            </div>
                            <div class="menu-title text-nowrap">Quản Lý Nhân Viên</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/slide">
                        <a class="nav-link" href="/admin/slide">
                            <div class="parent-icon"><i class="fa-solid fa-sliders"></i>
                            </div>
                            <div class="menu-title text-nowrap">Quản Lý Slide</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/review">
                        <a class="nav-link" href="/admin/review">
                            <div class="parent-icon"><i class="fa-solid fa-ranking-star"></i>
                            </div>
                            <div class="menu-title text-nowrap">Quản Lý Review</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/phan-quyen">
                        <a class="nav-link" href="/admin/phan-quyen">
                            <div class="parent-icon"><i class="fa-solid fa-user-lock"></i>
                            </div>
                            <div class="menu-title text-nowrap">Quản Lý Phân Quyền</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/bai-viet">
                        <a class="nav-link" href="/admin/bai-viet">
                            <div class="parent-icon"><i class="fa-solid fa-user-lock"></i>
                            </div>
                            <div class="menu-title text-nowrap">Danh Sách Bài Viết </div>
                        </a>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/admin/khach-hang">
                        <a class="nav-link" href="/admin/khach-hang">
                            <div class="parent-icon"><i class="fa-solid fa-user-lock"></i>
                            </div>
                            <div class="menu-title text-nowrap">Danh Sách Khách Hàng </div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style></style>