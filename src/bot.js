const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = '7208504281:AAHgUzsSxQaKT0O2aZ6RlSOPcC3vSnj3t-w';
const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = 3000;

const adminId = '180718817';

// Объект для хранения выбранных кнопок пользователя
const userSelections = {};

// Стоимость каждого гайда и скидочные цены
const guidePrices = 350;
const discountedPriceForThree = 899;
const discountedPriceForSix = 1699;

// Инициализация кнопок для выбора гайдов
const guideButtons = [
  { text: '1. Силова мобілізація.', callback_data: 'guide1' },
  { text: '2. Покарання за ухилення від призову.', callback_data: 'guide2' },
  { text: '3. Відстрочка від мобілізації.', callback_data: 'guide3' },
  { text: '4. Бронювання від мобілізації.', callback_data: 'guide4' },
  { text: '5. Як проходити ВЛК?', callback_data: 'guide5' },
  { text: '6. Контракт чи мобілізація?', callback_data: 'guide6' },
];
function updateGuideButtons(chatId) {
  return guideButtons
    .map((button) => {
      const isSelected = userSelections[chatId]?.includes(button.callback_data);
      return [
        { text: `${isSelected ? '✅' : '⬜️'} ${button.text}`, callback_data: button.callback_data },
      ];
    })
    .concat([[{ text: '✅ Підтвердити вибір', callback_data: 'confirmSelection' }]]);
}

// Обработчик для получения фотографий от пользователей
bot.on('photo', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Дякуємо! Ми з вами зв'яжемось в найближчий час.").then(() => {
    // Уведомление администратора о новом скриншоте
    bot.sendMessage(
      adminId,
      `Новий скриншот оплати від користувача @${msg.from.username || msg.from.id}.`,
    );
    bot.sendPhoto(adminId, msg.photo[msg.photo.length - 1].file_id);
  });
});

// Обработчик для получения документов от пользователей
bot.on('document', (msg) => {
  const chatId = msg.chat.id;
  const fileName = msg.document.file_name;

  // Проверяем, является ли файл PDF
  if (fileName.endsWith('.pdf')) {
    bot.sendMessage(chatId, "Дякуємо! Ми з вами зв'яжемось в найближчий час.").then(() => {
      // Уведомление администратора о новом документе
      bot.sendDocument(
        adminId,
        msg.document.file_id,
        {},
        {
          caption: `Новий документ (квитанція) від користувача @${
            msg.from.username || msg.from.id
          }: ${fileName}.`,
        },
      );
    });
  } else {
    bot.sendMessage(chatId, 'Будь ласка, відправте квитанцію у форматі PDF.');
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  userSelections[chatId] = [];

  if (msg.text && msg.text.startsWith('/start')) {
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
    bot.sendMessage(chatId, '🤖 Вітаю! Будь ласка, натисніть одну з кнопок 👇', options);
  }
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const selectedGuide = query.data;

  if (selectedGuide === 'buyguide') {
    // Отправка сообщения с кнопками для выбора гайдов
    bot.sendMessage(chatId, 'Виберіть опції зі списку 👇', {
      reply_markup: {
        inline_keyboard: updateGuideButtons(chatId),
      },
    });
  } else if (selectedGuide.startsWith('guide')) {
    // Логика выбора гайда
    const userGuides = userSelections[chatId] || [];
    if (userGuides.includes(selectedGuide)) {
      userSelections[chatId] = userGuides.filter((g) => g !== selectedGuide);
    } else {
      userSelections[chatId].push(selectedGuide);
    }
    bot.editMessageReplyMarkup(
      { inline_keyboard: updateGuideButtons(chatId) },
      { chat_id: chatId, message_id: query.message.message_id },
    );
  } else if (selectedGuide === 'confirmSelection') {
    const totalGuides = userSelections[chatId].length;

    // Проверка: выбрал ли пользователь хотя бы один гайд
    if (totalGuides === 0) {
      bot.sendMessage(chatId, 'Будь ласка, виберіть хоча б один гайд.');
      return;
    }
    // Рассчитываем общую стоимость с учетом скидок
    let totalPrice = 0;

    if (totalGuides === 1) {
      totalPrice = guidePrices;
    } else if (totalGuides === 2) {
      totalPrice = 2 * guidePrices;
    } else if (totalGuides === 3) {
      totalPrice = discountedPriceForThree;
    } else if (totalGuides === 6) {
      totalPrice = discountedPriceForSix;
    } else {
      // Расчет стоимости для 4 и 5 гайдов
      const discountedGuides = Math.min(3, totalGuides);
      const fullPriceGuides = totalGuides - discountedGuides;

      totalPrice = discountedPriceForThree + fullPriceGuides * guidePrices;
    }

    bot
      .sendMessage(
        chatId,
        `Ви обрали наступні гайди: ${userSelections[chatId]
          .map((g) => g.replace('guide', ''))
          .join(', ')}`,
      )
      .then(() => {
        bot.sendMessage(chatId, `Загальна вартість: ${totalPrice} грн.`).then(() => {
          // Отправка реквизитов для оплаты
          const paymentDetails = `
              Будь ласка, проведіть оплату за даними реквізитами та вишліть нам квитанцію чи скриншот оплати
              (png, jpg чи pdf формат):
              Отримувач: Жуковський Володимир Павлович
              IBAN: UA893220010000026006330120132
              ІПН/ЄДРПОУ: 3349416197
              Призначення платежу: Надання юридичної консультації
              БАНК: АКЦІОНЕРНЕ ТОВАРИСТВО "УНІВЕРСАЛ БАНК" МФО: 322001
              ЄДРПОУ Банку: 21133352
            `;
          bot.sendMessage(chatId, paymentDetails);
          bot.sendMessage(
            adminId,
            `Пользователь @${query.from.username || query.from.id} выбрал гайды: ${userSelections[
              chatId
            ]
              .map((g) => g.replace('guide', ''))
              .join(', ')}`,
          );
        });
      });
  } else if (selectedGuide === 'consultation') {
    // Отправка сообщения с ссылкой на телеграм канал
    bot.sendMessage(chatId, 'Для отримання консультації звертайтесь 👇', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Перейти до телеграм каналу', url: 'https://t.me/vzhykovskyi' }],
        ],
      },
    });
  }
});

app.listen(port, () => {
  console.log(`Telegram bot is listening on port ${port}`);
});
