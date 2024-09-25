// 選取所有頁籤
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

// 為每個頁籤添加點擊事件
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有頁籤內容的 active 樣式
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 移除所有頁籤的 active 樣式
        tabs.forEach(item => {
            item.classList.remove('active');
        });

        // 根據點擊的頁籤顯示對應的內容
        const target = document.querySelector(tab.dataset.tabTarget);
        target.classList.add('active');
        tab.classList.add('active');
    });
});
