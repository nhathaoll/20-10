document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng pháo giấy
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#fce4ec', '#f8bbd0', '#e91e63', '#c2185b', '#880e4f', '#f48fb1', '#f06292']; // Các màu hồng/đỏ

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confettiContainer.appendChild(confetti);

        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 5; // Kích thước từ 5px đến 13px
        const xStart = Math.random() * window.innerWidth - (window.innerWidth / 2); // Từ trái sang phải màn hình
        const yStart = -Math.random() * 100; // Bắt đầu từ phía trên màn hình
        const xEnd = xStart + (Math.random() - 0.5) * 400; // Rơi ngẫu nhiên sang trái hoặc phải
        const yEnd = window.innerHeight + 50; // Rơi xuống dưới màn hình
        const duration = Math.random() * 3 + 4; // Thời gian rơi từ 4s đến 7s
        const delay = Math.random() * 0.5; // Độ trễ nhỏ để tạo hiệu ứng tự nhiên

        confetti.style.setProperty('--confetti-color', color);
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${window.innerWidth / 2}px`; // Bắt đầu ở giữa theo chiều ngang
        confetti.style.top = `0px`; // Bắt đầu từ trên cùng
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.setProperty('--x-start', `${xStart}px`);
        confetti.style.setProperty('--y-start', `${yStart}px`);
        confetti.style.setProperty('--x-end', `${xEnd}px`);
        confetti.style.setProperty('--y-end', `${yEnd}px`);

        // Xóa confetti sau khi kết thúc animation để tránh làm đầy DOM
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    // Tạo liên tục các mảnh pháo giấy
    // Tăng số lượng và tần suất nếu muốn hiệu ứng dày đặc hơn
    let confettiInterval = setInterval(createConfetti, 100); 
    // Dừng tạo sau một khoảng thời gian nhất định (ví dụ: 10 giây)
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 10000); // Tạo confetti trong 10 giây
});