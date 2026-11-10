<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUTO INCOME AI</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>🤖 AUTO INCOME AI</h1>
    <p>Nền tảng quản lý nội dung và phát triển thu nhập trực tuyến</p>
</header>

<nav>
    <button onclick="showSection('dashboard')">📊 Tổng quan</button>
    <button onclick="showSection('create')">🤖 Tạo nội dung</button>
    <button onclick="showSection('schedule')">📝 Lịch đăng bài</button>
    <button onclick="showSection('income')">💰 Kiếm tiền</button>
</nav>

<main>

    <section id="dashboard" class="section">
        <h2>📊 Bảng điều khiển</h2>

        <div class="cards">
            <div class="card">
                <h3>Bản nháp</h3>
                <p id="draftCount">0</p>
            </div>

            <div class="card">
                <h3>Bài đã lên lịch</h3>
                <p id="scheduleCount">0</p>
            </div>

            <div class="card">
                <h3>Bài đã đăng</h3>
                <p id="publishedCount">0</p>
            </div>
        </div>

        <h3>Hoạt động gần đây</h3>
        <div id="activity">Chưa có hoạt động.</div>
    </section>

    <section id="create" class="section" hidden>
        <h2>🤖 Tạo nội dung</h2>

        <label>Chủ đề nội dung:</label>
        <input id="topic" type="text"
               placeholder="Ví dụ: Cuộc sống vùng cao">

        <label>Nền tảng:</label>
        <select id="platform">
            <option>TikTok</option>
            <option>Facebook</option>
            <option>YouTube</option>
            <option>Website</option>
        </select>

        <button onclick="generateContent()">Tạo nội dung mẫu</button>

        <textarea id="content" rows="8"
                  placeholder="Nội dung sẽ xuất hiện ở đây..."></textarea>

        <button onclick="saveDraft()">💾 Lưu bản nháp</button>
        <button onclick="copyContent()">📋 Sao chép</button>
    </section>

    <section id="schedule" class="section" hidden>
        <h2>📝 Quản lý bài đăng</h2>

        <label>Nội dung bài đăng:</label>
        <textarea id="scheduleContent" rows="5"
                  placeholder="Nhập nội dung bài viết..."></textarea>

        <label>Thời gian dự kiến:</label>
        <input id="scheduleTime" type="datetime-local">

        <button onclick="addSchedule()">Thêm lịch đăng</button>

        <div id="scheduleList"></div>
    </section>

    <section id="income" class="section" hidden>
        <h2>💰 Các phương thức kiếm tiền</h2>

        <div class="card">
            <h3>Tiếp thị liên kết</h3>
            <p>Chia sẻ sản phẩm và nhận hoa hồng khi có đơn hàng hợp lệ.</p>
        </div>

        <div class="card">
            <h3>Quảng cáo website</h3>
            <p>Tìm hiểu các chương trình quảng cáo phù hợp và điều kiện tham gia.</p>
        </div>

        <div class="card">
            <h3>Bán sản phẩm số</h3>
            <p>Phát triển ebook, hình ảnh, tài liệu và sản phẩm sáng tạo.</p>
        </div>

        <p><strong>Lưu ý:</strong> Website hiện chưa tự tạo doanh thu.
        Cần có nội dung, người xem và tài khoản đối tác đủ điều kiện.</p>
    </section>

</main>

<footer>
    <p>© 2026 AUTO INCOME AI</p>
    <p>Hệ thống quản lý nội dung trực tuyến</p>
</footer>

<script src="app.js"></script>

</body>
</html>
