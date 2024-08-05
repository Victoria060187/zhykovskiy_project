const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = '7208504281:AAHgUzsSxQaKT0O2aZ6RlSOPcC3vSnj3t-w';
const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = 3000;

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '💳 Купити гайд', callback_data: 'buyguide' },
          { text: '👨‍⚖️ Консультація', callback_data: 'consultation' },
        ],
      ],
    },
  };
  bot.sendMessage(chatId, 'Вітаю! Будь ласка, натисніть одну з кнопок 👇', options);
});

bot.on('callback_query', ({ message, data }) => {
  if (data === 'buyguide') {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: '1. Силова мобілізація.', callback_data: 'guide1' }],
          [{ text: '2. Покарання за ухилення від призову.', callback_data: 'guide2' }],
          [{ text: '3. Відстрочка від мобілізації.', callback_data: 'guide3' }],
          [{ text: '4. Бронювання від мобілізації.', callback_data: 'guide4' }],
          [{ text: '5. Як проходити ВЛК?', callback_data: 'guide5' }],
          [{ text: '6. Контракт чи мобілізація?', callback_data: 'guide6' }],
        ],
      },
    };
    bot.sendMessage(message.chat.id, 'Виберіть одну з опцій 👇', options);
  } else if (data === 'consultation') {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Перейти до телеграм каналу', url: 'https://t.me/vzhykovskyi' }],
        ],
      },
    };

    bot.sendMessage(message.chat.id, 'Для отримання консультації звертайтесь 👇 ', options);
  }
});
app.listen(port, () => {
  console.log(`Telegram bot is listening on port ${port}`);
});
