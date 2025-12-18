// DOM Elements
let currentMood = null;
let selectedLanguage = 'en';
let isShengMode = false;

// Sheng Translations object
const ShengTranslations = {
    // Navigation
    'Home': 'Home',
    'Chat & Journal': 'Chat na Journal',
    'Resources': 'Vitu za Kutumia',
    'About': 'About',
    
    // Hero Section
    'Welcome to Your Safe Space': 'Karibu Safe Space!',
    'A gentle, judgment-free environment for mental wellness. Track your mood, express yourself, and find support.': 'Hapa hakuna judgement. Weka roho yako mbele, ongea, pata support.',
    'Start Chatting': 'Anza Kuongea',
    
    // Mood Tracker
    'How are you feeling today?': 'Unajisikiaje leo msee?',
    'Select your current mood to personalize your experience': 'Chagua mood yako',
    'Happy': 'Furaha',
    'Calm': 'Chill',
    'Neutral': 'Sawa Tu',
    'Anxious': 'Na Pressure',
    'Sad': 'Huzuni',
    'Overwhelmed': 'Nimechukuliwa',
    'Your mood has been recorded': 'Mood yako imesajiliwa',
    
    // Language Selector
    'Choose Your Comfort Language': 'Chagua Lugha Unaelewa Poa',
    'Apply Language': 'Tumia Lugha Hii',
    'The AI will respond in your chosen language for a more comfortable experience.': 'AI itajibu kwa lugha uliyochagua.',
    
    // Quick Access Cards
    'Quick Access': 'Quick Access',
    'Chat Companion': 'Chat Partner',
    'Talk to our supportive AI companion about anything on your mind': 'Ongea na AI partner yetu kuhusu chochote kichwani mwako',
    'Daily Journal': 'Journal Ya Kilasiku',
    'Private space for your thoughts, feelings, and reflections': 'Private space kwa mawazo na feelings zako',
    'Crisis Support': 'Support Ya Haraka',
    'Immediate resources and helplines (available 24/7)': 'Nambari za helpline (24/7)',
    
    // Crisis Modal
    'Crisis Support Resources': 'Vitu Vya Kusupport Haraka',
    'National Suicide Prevention Lifeline': 'Lifeline Ya Kuzuia Suicide',
    'Call: 988 (US & Canada) or 116 (Kenya)': 'Piga: 988 (US) au 116 (Kenya)',
    'Available 24/7, free and confidential': 'Inapatikana 24/7, bure na siri',
    'Crisis Text Line': 'Crisis Text Line',
    'Text HOME to 741741': 'Tuma HOME kwa 741741',
    'Free, 24/7 crisis counseling via text': 'Counseling bure kupitia text',
    'Kenya Mental Health Support': 'Support Ya Mental Health Kenya',
    'Call: 0800 723 825 (Toll-free)': 'Piga: 0800 723 825 (Bure)',
    'Free mental health support in Kenya': 'Support ya mental health bure Kenya',
    'Emergency Services': 'Emergency Services',
    'Call 911 (US) or 999/112 (Kenya) for immediate help': 'Piga 911 (US) au 999/112 (Kenya) kwa help ya haraka',
    'You are not alone. Help is available, and recovery is possible.': 'Huko pekee yako. Help iko available.',
    
    // Footer
    'Safe Space': 'Safe Space',
    'This tool provides supportive conversation and is not a replacement for professional medical advice, diagnosis, or treatment.': 'Hii ni conversation tu, sio dawa. Pata ushauri wa daktari kwa matatizo makubwa.',
    'Privacy Policy': 'Sera Ya Usiri',
    'Terms of Use': 'Masharti Ya Matumizi',
    'Contact': 'Contact',
    '© 2024 Safe Space. All rights reserved.': '© 2024 Safe Space. Haki zote zimehifadhiwa.',
    
    // Mood Feedback Messages
    'happy_en': "It's wonderful to see you feeling happy! Remember to cherish these moments.",
    'happy_sheng': "Wueh! Ni poa kuona uko happy! Kumbuka kucharish hizi moments msee!",
    'calm_en': "Feeling calm is a beautiful state. Enjoy this peaceful moment.",
    'calm_sheng': "Uko chill kabisa! Hiyo ni poa sana. Enjoy hii peaceful moment.",
    'neutral_en': "Every feeling is valid. Take a moment to check in with yourself.",
    'neutral_sheng': "Kila feeling ni sawa. Chill kidogo uangalie na mwenyewe.",
    'anxious_en': "It's okay to feel anxious. Take deep breaths. You're safe here.",
    'anxious_sheng': "Iko sawa kuwa na pressure. Pumua deep. Uko safe hapa msee.",
    'sad_en': "I'm here with you. It's okay to feel sad. Would you like to talk about it?",
    'sad_sheng': "Niko hapa na wewe. Iko sawa kuwa na huzuni. Ungependa kuongea?",
    'overwhelmed_en': "Let's break this down together. You don't have to carry everything at once.",
    'overwhelmed_sheng': "Tupange hii pamoja. Usilift dunia pekee yako msee!",
    
    // Chat Page (will be in chat.html)
    'Your AI Companion': 'AI Partner Yako',
    'Ready to listen': 'Niko ready kusikiliza',
    'Share what\'s on your mind...': 'Share kile kichwani mwako...',
    'Send': 'Tuma',
    'Quick suggestions:': 'Suggestions za haraka:',
    'Private Journal': 'Journal Ya Siri',
    'Today\'s reflection prompts:': 'Maswali ya leo:',
    'Write freely here...': 'Andika bure hapa...',
    'Save Entry': 'Hifadhi',
    'Clear': 'Futa',
    'Export': 'Export',
    'Journaling Tips': 'Tips Za Kuandika',
    'Immediate Support': 'Support Ya Haraka',
    'If you\'re in immediate danger:': 'Kama uko kwenye danger:',
    'Call your local emergency number (911 in US) or go to the nearest emergency room': 'Piga emergency number yako (911 US) au nenda hospitali',
    'Suicide & Crisis Lifeline': 'Lifeline Ya Suicide & Crisis',
    'Crisis Text Line': 'Crisis Text Line',
    'International Resources': 'Vitu Vya Kimataifa',
    'Find help in your country': 'Tafuta help nchi yako',
    'Local Support': 'Support Ya Karibu',
    'Find nearby mental health services': 'Tafuta mental health services karibu',
    'Additional Resources': 'Vitu Vingine',
    'Your feelings are valid. Asking for help is a sign of strength, not weakness.': 'Feelings zako ni sahihi. Kuomba help ni strength, sio weakness.'
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeShengMode();
    initializeMoodTracker();
    initializeLanguageSelector();
    initializeCrisisModal();
    initializeChatPage();
    loadPreferences();
    applyShengMode();
});

// Sheng Mode Toggle
function initializeShengMode() {
    const shengModeBtn = document.getElementById('sheng-mode');
    if (!shengModeBtn) return;
    
    // Load Sheng mode preference
    const savedShengMode = localStorage.getItem('shengMode');
    if (savedShengMode === 'true') {
        isShengMode = true;
        shengModeBtn.classList.add('active');
        document.body.classList.add('sheng-mode');
    }
    
    shengModeBtn.addEventListener('click', function() {
        isShengMode = !isShengMode;
        
        if (isShengMode) {
            document.body.classList.add('sheng-mode');
            this.classList.add('active');
            localStorage.setItem('shengMode', 'true');
            showNotification('Sheng mode imewashwa! Hakuna wasi wasi msee!', 'sheng');
            
            // Auto-select Sheng language
            const langSelect = document.getElementById('language-select');
            if (langSelect) {
                langSelect.value = 'sheng';
                selectedLanguage = 'sheng';
                localStorage.setItem('preferredLanguage', 'sheng');
                applyTranslations('sheng');
            }
        } else {
            document.body.classList.remove('sheng-mode');
            this.classList.remove('active');
            localStorage.setItem('shengMode', 'false');
            showNotification('Sheng mode imezimwa', 'success');
            
            // Revert to English
            applyTranslations('en');
        }
        
        // Re-apply mood if set
        if (currentMood) {
            const moodButtons = document.querySelectorAll('.mood-btn');
            moodButtons.forEach(btn => {
                if (btn.dataset.mood === currentMood) {
                    btn.click();
                }
            });
        }
    });
}

function applyShengMode() {
    const shengModeBtn = document.getElementById('sheng-mode');
    if (!shengModeBtn) return;
    
    if (isShengMode) {
        document.body.classList.add('sheng-mode');
        shengModeBtn.classList.add('active');
        
        // Apply Sheng translations
        applyTranslations('sheng');
    }
}

// Apply translations to UI
function applyTranslations(language) {
    if (language !== 'sheng') return;
    
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.textContent.trim() || element.placeholder || element.title;
        if (key && ShengTranslations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = ShengTranslations[key];
            } else if (element.tagName === 'OPTION') {
                // Skip options to avoid breaking language select
            } else {
                element.textContent = ShengTranslations[key];
            }
        }
    });
    
    // Special handling for elements with specific IDs
    const specialIds = [
        'welcome-title', 'welcome-subtitle', 'start-chat-btn',
        'mood-title', 'mood-subtitle', 'mood-happy', 'mood-calm',
        'mood-neutral', 'mood-anxious', 'mood-sad', 'mood-overwhelmed',
        'language-title', 'apply-lang-btn', 'language-note',
        'quick-access-title', 'card-chat-title', 'card-chat-desc',
        'card-journal-title', 'card-journal-desc', 'card-crisis-title', 'card-crisis-desc',
        'crisis-modal-title', 'crisis-item1-title', 'crisis-item1-desc', 'crisis-item1-note',
        'crisis-item2-title', 'crisis-item2-desc', 'crisis-item2-note',
        'crisis-item3-title', 'crisis-item3-desc', 'crisis-item3-note',
        'crisis-item4-title', 'crisis-item4-desc', 'crisis-modal-note',
        'footer-logo-text', 'disclaimer-text', 'footer-privacy', 'footer-terms',
        'footer-contact', 'footer-copyright'
    ];
    
    specialIds.forEach(id => {
        const element = document.getElementById(id);
        const key = id.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
        if (element && ShengTranslations[key]) {
            element.textContent = ShengTranslations[key];
        }
    });
}

// Mood Tracker
function initializeMoodTracker() {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const feedbackDiv = document.getElementById('mood-feedback');
    
    if (!moodButtons.length || !feedbackDiv) return;
    
    const moodMessages = {
        happy: {
            en: "It's wonderful to see you feeling happy! Remember to cherish these moments.",
            sheng: "Wueh! Ni poa kuona uko happy! Kumbuka kucharish hizi moments msee! ✨",
            sw: "Ni vizuri kuona una furaha! Kumbuka kuthamini nyakati hizi."
        },
        calm: {
            en: "Feeling calm is a beautiful state. Enjoy this peaceful moment.",
            sheng: "Uko chill kabisa! Hiyo ni poa sana. Enjoy hii peaceful moment. ☮️",
            sw: "Kuhisi utulivu ni hali nzuri. Furahia wakati huu wa amani."
        },
        neutral: {
            en: "Every feeling is valid. Take a moment to check in with yourself.",
            sheng: "Kila feeling ni sawa. Chill kidogo uangalie na mwenyewe. 🤔",
            sw: "Kila hisia ni halali. Chukua muda kuangalia na mwenyewe."
        },
        anxious: {
            en: "It's okay to feel anxious. Take deep breaths. You're safe here.",
            sheng: "Iko sawa kuwa na pressure. Pumua deep. Uko safe hapa msee. 🛡️",
            sw: "Ni sawa kuhisi wasiwasi. Pumua kwa kina. Uko salama hapa."
        },
        sad: {
            en: "I'm here with you. It's okay to feel sad. Would you like to talk about it?",
            sheng: "Niko hapa na wewe. Iko sawa kuwa na huzuni. Ungependa kuongea? 💬",
            sw: "Niko hapa na wewe. Ni sawa kuhisi huzuni. Ungependa kuongea kuhusu hilo?"
        },
        overwhelmed: {
            en: "Let's break this down together. You don't have to carry everything at once.",
            sheng: "Tupange hii pamoja. Usilift dunia pekee yako msee! 🙅‍♂️",
            sw: "Tuvunje hii pamoja. Hauhitaji kubeba kila kitu mara moja."
        }
    };
    
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            moodButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get mood from data attribute
            const mood = this.dataset.mood;
            currentMood = mood;
            
            // Save to localStorage
            localStorage.setItem('currentMood', mood);
            localStorage.setItem('moodTimestamp', new Date().toISOString());
            
            // Get message based on language
            let message;
            if (selectedLanguage === 'sheng' && moodMessages[mood]?.sheng) {
                message = moodMessages[mood].sheng;
            } else if (selectedLanguage === 'sw' && moodMessages[mood]?.sw) {
                message = moodMessages[mood].sw;
            } else {
                message = moodMessages[mood]?.en || "Thank you for sharing how you feel.";
            }
            
            // Show feedback message
            feedbackDiv.innerHTML = `
                <div class="feedback-content">
                    <i class="fas fa-heart-circle"></i>
                    <p>${message}</p>
                    <small>${selectedLanguage === 'sheng' ? 'Mood yako imesajiliwa' : 'Your mood has been recorded'}</small>
                </div>
            `;
            
            // Animate feedback
            feedbackDiv.style.opacity = '0';
            feedbackDiv.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                feedbackDiv.style.transition = 'all 0.3s ease';
                feedbackDiv.style.opacity = '1';
                feedbackDiv.style.transform = 'translateY(0)';
            }, 10);
        });
    });
}

// Language Selector
function initializeLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    const applyBtn = document.getElementById('apply-language');
    
    if (!languageSelect || !applyBtn) return;
    
    // Load saved language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        selectedLanguage = savedLanguage;
        
        if (savedLanguage === 'sheng') {
            isShengMode = true;
            document.body.classList.add('sheng-mode');
            const shengBtn = document.getElementById('sheng-mode');
            if (shengBtn) shengBtn.classList.add('active');
            applyTranslations('sheng');
        }
    }
    
    applyBtn.addEventListener('click', function() {
        selectedLanguage = languageSelect.value;
        localStorage.setItem('preferredLanguage', selectedLanguage);
        
        // Toggle Sheng mode
        if (selectedLanguage === 'sheng') {
            isShengMode = true;
            document.body.classList.add('sheng-mode');
            const shengBtn = document.getElementById('sheng-mode');
            if (shengBtn) shengBtn.classList.add('active');
            localStorage.setItem('shengMode', 'true');
            applyTranslations('sheng');
        } else {
            isShengMode = false;
            document.body.classList.remove('sheng-mode');
            const shengBtn = document.getElementById('sheng-mode');
            if (shengBtn) shengBtn.classList.remove('active');
            localStorage.setItem('shengMode', 'false');
        }
        
        // Show confirmation
        const langName = languageSelect.options[languageSelect.selectedIndex].text;
        const message = selectedLanguage === 'sheng' 
            ? `Sheng imechaguliwa! Iko poa msee!` 
            : `Language set to ${langName}`;
        
        showNotification(message, selectedLanguage === 'sheng' ? 'sheng' : 'success');
        
        // Re-trigger mood display with new language
        if (currentMood) {
            const moodButtons = document.querySelectorAll('.mood-btn');
            moodButtons.forEach(btn => {
                if (btn.dataset.mood === currentMood) {
                    btn.click();
                }
            });
        }
    });
}

// Crisis Modal
function initializeCrisisModal() {
    const crisisCard = document.getElementById('crisis-resources');
    const modal = document.getElementById('crisis-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!crisisCard || !modal) return;
    
    crisisCard.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Chat Page Functions
function initializeChatPage() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const journalSaveBtn = document.getElementById('save-journal');
    const journalClearBtn = document.getElementById('clear-journal');
    
    // Chat functionality
    if (chatInput && sendBtn) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        sendBtn.addEventListener('click', sendMessage);
        
        // Load chat history
        loadChatHistory();
        
        // Add Sheng-specific chat suggestions
        addShengChatSuggestions();
    }
    
    // Tab navigation
    if (tabBtns.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.dataset.tab;
                switchTab(tabId);
            });
        });
    }
    
    // Journal functionality
    if (journalSaveBtn) {
        journalSaveBtn.addEventListener('click', saveJournalEntry);
    }
    
    if (journalClearBtn) {
        journalClearBtn.addEventListener('click', clearJournalEntry);
    }
    
    // Load journal
    loadJournalEntry();
    
    // Crisis buttons
    initializeCrisisButtons();
}

function addShengChatSuggestions() {
    const suggestionsContainer = document.querySelector('.suggestion-buttons');
    if (!suggestionsContainer) return;
    
    const shengSuggestions = [
        "Nimechoka sana today",
        "Niko na pressure ya kazi",
        "Naomba ushauri kidogo",
        "Sijiskii poa leo",
        "Nawezaje kupunguza stress?",
        "Nataka kuongea tu",
        "Nimefurahi leo!",
        "Naomba motivation"
    ];
    
    // Clear existing suggestions
    suggestionsContainer.innerHTML = '';
    
    // Add Sheng suggestions when in Sheng mode
    if (isShengMode) {
        shengSuggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'suggestion-btn';
            button.textContent = suggestion;
            button.addEventListener('click', function() {
                document.getElementById('chat-input').value = suggestion;
                document.getElementById('chat-input').focus();
            });
            suggestionsContainer.appendChild(button);
        });
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessageToChat('user', message);
    
    // Clear input
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Send to backend
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            mood: currentMood,
            language: selectedLanguage,
            shengMode: isShengMode
        })
    })
    .then(response => response.json())
    .then(data => {
        removeTypingIndicator();
        
        if (data.response) {
            addMessageToChat('ai', data.response, isShengMode);
        } else {
            const fallbackMessage = isShengMode 
                ? "Niko hapa kusikiliza. Unaweza share more kuhusu unajisikiaje?" 
                : "I'm here to listen. Could you tell me more about how you're feeling?";
            addMessageToChat('ai', fallbackMessage, isShengMode);
        }
        
        // Save to chat history
        saveChatToHistory();
    })
    .catch(error => {
        removeTypingIndicator();
        const errorMessage = isShengMode
            ? "Nina shida kuconnect sasa hivi. Iko sawa, feelings zako ni important. Ungependa kujaribu tena?"
            : "I'm having trouble connecting right now. Please know that your feelings are valid and important. Would you like to try again?";
        addMessageToChat('ai', errorMessage, isShengMode);
        console.error('Error:', error);
    });
}

function addMessageToChat(sender, text, isSheng = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (isSheng && sender === 'ai') {
        messageDiv.classList.add('sheng-response');
    }
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const icon = isSheng && sender === 'ai' 
        ? '<i class="fas fa-robot sheng-chat-icon"></i>'
        : '';
    
    messageDiv.innerHTML = `
        <div class="message-content">${icon} ${escapeHtml(text)}</div>
        <div class="message-time">${time}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'message ai-message';
    
    const typingText = isShengMode 
        ? 'Inakuja...' 
        : 'Typing...';
    
    typingDiv.innerHTML = `
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
            <span style="margin-left: 10px; font-size: 0.9rem; color: var(--text-muted);">${typingText}</span>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingDiv = document.getElementById('typing-indicator');
    if (typingDiv) {
        typingDiv.remove();
    }
}

function switchTab(tabId) {
    // Update active tab button
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        }
    });
    
    // Show active tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
        }
    });
}

function saveJournalEntry() {
    const journalEntry = document.getElementById('journal-entry');
    if (!journalEntry) return;
    
    const entry = journalEntry.value.trim();
    if (!entry) {
        const message = isShengMode 
            ? 'Andika kitu kabla ya kuhifadhi' 
            : 'Please write something before saving';
        showNotification(message, isShengMode ? 'sheng' : 'info');
        return;
    }
    
    const entryData = {
        text: entry,
        date: new Date().toISOString(),
        mood: currentMood,
        language: selectedLanguage
    };
    
    localStorage.setItem('journalEntry', JSON.stringify(entryData));
    
    const message = isShengMode 
        ? 'Journal imehifadhiwa poa!' 
        : 'Journal entry saved successfully';
    showNotification(message, isShengMode ? 'sheng' : 'success');
}

function loadJournalEntry() {
    const journalEntry = document.getElementById('journal-entry');
    if (!journalEntry) return;
    
    const savedEntry = localStorage.getItem('journalEntry');
    if (savedEntry) {
        try {
            const entryData = JSON.parse(savedEntry);
            journalEntry.value = entryData.text;
        } catch (e) {
            console.error('Error loading journal:', e);
        }
    }
}

function clearJournalEntry() {
    const journalEntry = document.getElementById('journal-entry');
    if (!journalEntry) return;
    
    const message = isShengMode 
        ? 'Unahakika unataka kufuta journal yako?' 
        : 'Are you sure you want to clear your journal entry?';
    
    if (confirm(message)) {
        journalEntry.value = '';
        localStorage.removeItem('journalEntry');
        
        const confirmMessage = isShengMode 
            ? 'Journal imefutwa' 
            : 'Journal entry cleared';
        showNotification(confirmMessage, isShengMode ? 'sheng' : 'success');
    }
}

function saveChatToHistory() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messages = [];
    const messageElements = chatMessages.querySelectorAll('.message');
    
    messageElements.forEach(element => {
        const isUser = element.classList.contains('user-message');
        const content = element.querySelector('.message-content')?.textContent || '';
        const time = element.querySelector('.message-time')?.textContent || '';
        
        if (content) {
            messages.push({
                sender: isUser ? 'user' : 'ai',
                content: content,
                time: time,
                isSheng: element.classList.contains('sheng-response')
            });
        }
    });
    
    localStorage.setItem('chatHistory', JSON.stringify(messages.slice(-50))); // Save last 50 messages
}

function loadChatHistory() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
        try {
            const messages = JSON.parse(savedHistory);
            messages.forEach(msg => {
                addMessageToChat(msg.sender, msg.content, msg.isSheng);
            });
        } catch (e) {
            console.error('Error loading chat history:', e);
        }
    }
}

function initializeCrisisButtons() {
    const crisisButtons = document.querySelectorAll('.crisis-btn');
    
    crisisButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            
            switch(action) {
                case 'call':
                    const callMessage = isShengMode
                        ? 'Ungependa kupiga National Suicide Prevention Lifeline kwa 988?'
                        : 'Would you like to call the National Suicide Prevention Lifeline at 988?';
                    if (confirm(callMessage)) {
                        window.open('tel:988');
                    }
                    break;
                case 'text':
                    const textMessage = isShengMode
                        ? 'Ungependa kutuma HOME kwa 741741 kuconnect na crisis counselor?'
                        : 'Would you like to text HOME to 741741 to connect with a crisis counselor?';
                    if (confirm(textMessage)) {
                        window.open('sms:741741?body=HOME');
                    }
                    break;
                case 'international':
                    window.open('https://www.iasp.info/resources/Crisis_Centres/', '_blank');
                    break;
                case 'local':
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {
                            const lat = position.coords.latitude;
                            const lon = position.coords.longitude;
                            window.open(`https://www.google.com/maps/search/mental+health+services/@${lat},${lon},12z`, '_blank');
                        }, function() {
                            window.open('https://www.psychologytoday.com/us/therapists', '_blank');
                        });
                    } else {
                        window.open('https://www.psychologytoday.com/us/therapists', '_blank');
                    }
                    break;
            }
        });
    });
}

// Utility Functions
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'sheng' 
        ? '<i class="fas fa-flag kenya-flag-icon"></i>' 
        : `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>`;
    
    notification.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function loadPreferences() {
    // Load Sheng mode
    const savedShengMode = localStorage.getItem('shengMode');
    if (savedShengMode === 'true') {
        isShengMode = true;
    }
    
    // Load mood
    const savedMood = localStorage.getItem('currentMood');
    const moodTimestamp = localStorage.getItem('moodTimestamp');
    
    if (savedMood && moodTimestamp) {
        const timeDiff = Date.now() - new Date(moodTimestamp).getTime();
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        // Only auto-select mood if it was set within the last 24 hours
        if (hoursDiff < 24) {
            currentMood = savedMood;
            const moodButton = document.querySelector(`.mood-btn[data-mood="${savedMood}"]`);
            if (moodButton) {
                moodButton.click();
            }
        }
    }
    
    // Load language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        selectedLanguage = savedLanguage;
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.value = savedLanguage;
        }
        
        if (savedLanguage === 'sheng') {
            isShengMode = true;
            applyTranslations('sheng');
        }
    }
}

// Add notification styles if not already present
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transform: translateX(150%);
            transition: transform 0.3s ease;
            z-index: 10000;
            border-left: 4px solid #36D1DC;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left-color: #36D1DC;
        }
        
        .notification.sheng {
            border-left-color: var(--kenya-green);
            background: linear-gradient(135deg, #FFFFFF, #F0FFF0);
        }
        
        .notification i {
            color: #36D1DC;
            font-size: 1.2rem;
        }
        
        .notification.sheng i {
            color: var(--kenya-green);
        }
        
        .typing {
            display: flex;
            gap: 4px;
            align-items: center;
        }
        
        .typing span {
            width: 8px;
            height: 8px;
            background: #718096;
            border-radius: 50%;
            animation: typing 1.4s ease-in-out infinite;
        }
        
        .typing span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.6;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }
        
        .sheng-response {
            border-left: 4px solid var(--kenya-green) !important;
            background: rgba(0, 102, 0, 0.05) !important;
        }
    `;
    document.head.appendChild(style);
}