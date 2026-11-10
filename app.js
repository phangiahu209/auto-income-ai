// AUTO INCOME AI - SYSTEM

let drafts = JSON.parse(localStorage.getItem(“drafts”)) || [];
let schedules = JSON.parse(localStorage.getItem(“schedules”)) || [];
let published = JSON.parse(localStorage.getItem(“published”)) || [];

function saveData() {
localStorage.setItem(“drafts”, JSON.stringify(drafts));
localStorage.setItem(“schedules”, JSON.stringify(schedules));
localStorage.setItem(“published”, JSON.stringify(published));
updateDashboard();
}

function showSection(id) {
document.querySelectorAll(”.section”).forEach(section => {
section.hidden = true;
});

document.getElementById(id).hidden = false;

}

function generateContent() {
const topic = document.getElementById(“topic”).value.trim();
const platform = document.getElementById(“platform”).value;

if (!topic) {
    alert("Vui lòng nhập chủ đề!");
    return;
}
const content = `

🌟 CHỦ ĐỀ: ${topic}

Bạn đã bao giờ tìm hiểu về ${topic} chưa?

Hãy cùng khám phá những điều thú vị, chia sẻ kiến thức và trải nghiệm của mình.

💬 Bạn nghĩ gì về chủ đề này? Hãy để lại bình luận nhé!

#${topic.replace(/\s+/g, “”)} #${platform} #ChiaSe
`;

document.getElementById("content").value = content;

}

function saveDraft() {
const content = document.getElementById(“content”).value.trim();

if (!content) {
    alert("Chưa có nội dung để lưu!");
    return;
}
drafts.push({
    content: content,
    date: new Date().toLocaleString("vi-VN")
});
saveData();
alert("Đã lưu bản nháp thành công!");

}

function copyContent() {
const content = document.getElementById(“content”).value;

if (!content) {
    alert("Chưa có nội dung để sao chép!");
    return;
}
navigator.clipboard.writeText(content)
    .then(() => alert("Đã sao chép nội dung!"))
    .catch(() => alert("Không thể sao chép trên trình duyệt này."));

}

function addSchedule() {
const content = document.getElementById(“scheduleContent”).value.trim();
const time = document.getElementById(“scheduleTime”).value;

if (!content || !time) {
    alert("Vui lòng nhập nội dung và thời gian!");
    return;
}
schedules.push({
    content: content,
    time: time,
    status: "Đang chờ"
});
saveData();
renderSchedules();
document.getElementById("scheduleContent").value = "";
document.getElementById("scheduleTime").value = "";
alert("Đã thêm lịch đăng!");

}

function renderSchedules() {
const list = document.getElementById(“scheduleList”);

list.innerHTML = "<h3>Danh sách lịch đăng</h3>";
schedules.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card";
    const content = document.createElement("p");
    content.textContent = item.content;
    const time = document.createElement("p");
    time.textContent = "Thời gian: " + item.time;
    const status = document.createElement("p");
    status.textContent = "Trạng thái: " + item.status;
    div.append(content, time, status);
    if (item.status !== "Đã đăng") {
        const button = document.createElement("button");
        button.textContent = "Đánh dấu đã đăng";
        button.onclick = () => {
            item.status = "Đã đăng";
            published.push(item);
            schedules.splice(index, 1);
            saveData();
            renderSchedules();
        };
        div.appendChild(button);
    }
    list.appendChild(div);
});

}

function updateDashboard() {
document.getElementById(“draftCount”).textContent = drafts.length;

document.getElementById("scheduleCount").textContent =
    schedules.length;
document.getElementById("publishedCount").textContent =
    published.length;
const activity = document.getElementById("activity");
activity.textContent = drafts.length + " bản nháp, " +
    schedules.length + " lịch chờ, " +
    published.length + " bài đã đăng.";

}

document.addEventListener(“DOMContentLoaded”, () => {
updateDashboard();
renderSchedules();
});
