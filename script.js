// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成');

    // 示例：添加简单交互
    const mainContent = document.querySelector('main p');
    if (mainContent) {
        mainContent.addEventListener('click', () => {
            alert('你点击了内容区域！');
        });
    }

    // 显示当前时间
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        console.log('当前时间:', timeString);
    }

    // 每秒更新一次时间
    setInterval(updateTime, 1000);
    updateTime(); // 立即执行一次
});