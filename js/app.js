let currentUnit = null;
let currentWordIndex = -1;
let words = [];
let touchStartX = 0;
let touchStartY = 0;
let touchMoveX = 0;
let touchMoveY = 0;
let isDragging = false;

function createWordCard(wordData) {
    const card = document.createElement('div');
    card.className = 'word-card';

    const wordClass = wordData.isKey ? 'word key-word' : 'word';
    
    const details = document.createElement('div');
    details.className = 'details hidden';
    details.innerHTML = `
        <div class="pronunciation">${wordData.pronunciation}</div>
        <div class="meaning">
            <div>${wordData.partOfSpeech} ${wordData.definition}</div>
            <div class="memory-tip">${wordData.memoryTip}</div>
            ${wordData.usage ? `<div class="usage">${Array.isArray(wordData.usage) ? wordData.usage.join('<br>') : wordData.usage}</div>` : ''}
        </div>
    `;

    const wordDiv = document.createElement('div');
    wordDiv.className = wordClass;
    wordDiv.textContent = wordData.word;

    card.appendChild(wordDiv);
    card.appendChild(details);

    card.addEventListener('click', function(e) {
        // 只有在没有进行滑动时才触发点击事件
        if (!isDragging) {
            details.classList.toggle('hidden');
        }
    });

    return card;
}

function showWord(index, direction = 'next') {
    const container = document.getElementById('wordCards');
    const cards = container.querySelectorAll('.word-card');
    
    // 移除所有card的类
    cards.forEach(card => {
        card.classList.remove('active', 'prev');
    });
    
    if (index >= 0 && index < cards.length) {
        const currentCard = cards[index];
        const previousCard = cards[index - 1];
        
        if (direction === 'next') {
            if (previousCard) previousCard.classList.add('prev');
            currentCard.classList.add('active');
        } else {
            currentCard.classList.add('active');
            if (previousCard) previousCard.classList.add('prev');
        }
        
        currentWordIndex = index;
    }
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging = false;
}

function handleTouchMove(e) {
    if (!touchStartX || !touchStartY) return;

    touchMoveX = e.touches[0].clientX;
    touchMoveY = e.touches[0].clientY;
    
    // 计算水平和垂直移动距离
    const deltaX = touchMoveX - touchStartX;
    const deltaY = touchMoveY - touchStartY;
    
    // 如果水平移动距离大于垂直移动距离，则认为是水平滑动
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault(); // 阻止页面滚动
        isDragging = true;
    }
}

function handleTouchEnd(e) {
    if (!touchStartX || !touchStartY || !touchMoveX || !touchMoveY) return;

    const deltaX = touchMoveX - touchStartX;
    const threshold = 50; // 滑动阈值
    
    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0 && currentWordIndex > 0) {
            // 向右滑，显示上一个
            showWord(currentWordIndex - 1, 'prev');
        } else if (deltaX < 0 && currentWordIndex < words.length - 1) {
            // 向左滑，显示下一个
            showWord(currentWordIndex + 1, 'next');
        }
    }
    
    // 重置触摸数据
    touchStartX = 0;
    touchStartY = 0;
    touchMoveX = 0;
    touchMoveY = 0;
    
    // 一段时间后重置isDragging，这样可以避免快速点击误触
    setTimeout(() => {
        isDragging = false;
    }, 100);
}

function selectUnit(unitNumber) {
    if (!unitNumber) {
        document.getElementById('wordCards').innerHTML = '';
        return;
    }
    
    if (currentUnit === unitNumber) return;
    currentUnit = unitNumber;
    
    const container = document.getElementById('wordCards');
    container.innerHTML = '';
    
    // 获取对应单元的单词数据
    switch(unitNumber) {
        case 1:
            words = unit1Words;
            break;
        case 2:
            words = unit2Words;
            break;
        case 3:
            words = unit3Words;
            break;
        case 4:
            words = unit4Words;
            break;
        case 5:
            words = unit5Words;
            break;
        case 6:
            words = unit6Words;
            break;
        case 7:
            words = unit7Words;
            break;
        case 8:
            words = unit8Words;
            break;
        case 9:
            words = unit9Words;
            break;
        case 10:
            words = unit10Words;
            break;
        case 11:
            words = unit11Words;
            break;
        case 12:
            words = unit12Words;
            break;
        case 13:
            words = unit13Words;
            break;
        case 14:
            words = unit14Words;
            break;
        case 15:
            words = unit15Words;
            break;
        case 16:
            words = unit16Words;
            break;
        case 17:
            words = unit17Words;
            break;
        case 18:
            words = unit18Words;
            break;
        case 19:
            words = unit19Words;
            break;
        case 20:
            words = unit20Words;
            break;
        case 21:
            words = unit21Words;
            break;
        case 22:
            words = unit22Words;
            break;
        case 23:
            words = unit23Words;
            break;
        case 24:
            words = unit24Words;
            break;
        case 25:
            words = unit25Words;
            break;
        case 26:
            words = unit26Words;
            break;
        case 27:
            words = unit27Words;
            break;
        case 28:
            words = unit28Words;
            break;
        case 29:
            words = unit29Words;
            break;
        case 30:
            words = unit30Words;
            break;
        default:
            container.innerHTML = '<div class="word-card active"><div class="word">该单元的单词正在添加中...</div></div>';
            return;
    }
    
    words.forEach(wordData => {
        const card = createWordCard(wordData);
        container.appendChild(card);
    });
    
    currentWordIndex = -1;
    showWord(0);
}

// 添加触摸事件监听
const container = document.getElementById('wordCardsContainer');
container.addEventListener('touchstart', handleTouchStart, false);
container.addEventListener('touchmove', handleTouchMove, false);
container.addEventListener('touchend', handleTouchEnd, false);
