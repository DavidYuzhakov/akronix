import creditsIcon from "./assets/images/ton/credits-icon.svg"
import akronIcon from "./assets/images/ton/akron-icon.svg"
import tonIcon from "./assets/images/ton/ton-icon.svg"

export const roadmapData = [
  {
    title: 'Авг. 2024',
    icon: '1.svg',
    details: ['Дроп токенов akron', 'Раунд инвестирования']
  },
  {
    title: 'Сен. 2024',
    icon: '2.svg',
    details: ['Запуск игры на платформе', 'Листинг на биржи DEX']
  },
  {
    title: 'Окт. 2024',
    icon: '3.svg',
    details: ['Листинг на биржу Binance', 'Листинг на биржу Bitget']
  },
  {
    title: 'Нояб. 2024',
    icon: '4.svg',
    details: ['Запуск платформы akron на сети Solana и других сетях']
  },
  {
    title: 'Янв. 2025',
    icon: '5.svg',
    details: ['Академия разработчиков игр на платформе Akronix']
  },
  {
    title: 'Фев. 2025',
    icon: '6.svg',
    locked: true,
    details: ['???????????????', '?????????', '????????????']
  } 
];

export const features = [
  { id: 1, title: 'Безопасность и скорость', text: 'децентрализованная Сеть TON обеспечивает высокую скорость транзакций и безопасность токена, что делает использование AKRON быстрым и надежным'},
  { id: 2, title: 'Низкие комиссии', text: 'Транзакции в сети TON имеют низкие комиссии, что позволяет пользователям эффективно использовать токен AKRON для мелких и частых операций'},
  { id: 3, title: 'Интеграция с  проектами', text: 'AKRON может быть легко интегрирован с другими проектами и платформами, работающими на сети TON, расширяя его функциональность и применимость'},
  { id: 4, title: 'развитие экосистемы', text: 'Активное использование AKRON способствует росту и развитию игровой платформы Akronix, привлекая новых пользователей и разработчиков'},
]

export const characters = [
  { id: 1, name: 'B1 Battle Droid', damage: 2, recharge: 0, hp: '2.000' },
  { id: 2, name: 'Rebel Pilot', damage: 10, recharge: 1, hp: '10.000' },
  { id: 3, name: 'Tatooine Jawa', damage: 30, recharge: 2, hp: '30.000' },
  { id: 4, name: 'Stormtrooper', damage: 70, recharge: 4, hp: '70.000' },
  { id: 5, locked: true },
  { id: 6, locked: true },
]

export const akronList = [
  { precent: 15, text: 'Листинги DEX и CEX' },
  { precent: 10, text: 'Награда команды' },
  { precent: 5, text: 'Развитие и маркетинг' },
  { precent: 15, text: 'Раздача фондам и инвесторам' },
  { precent: 3, text: 'Награды для Турниров и Кланов' },
  { precent: 52, text: 'Ликвидность для выплаты Прибыли' },
]

export const transactions = [
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'usdt', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
  { type: 'ton', value: 123.45, link: 'x850R6Cmmn0ZZbMUmGbxy0soaM3tX4NHtpk...' },
]

export const cards = [
  {title: 'кредиты', text: 'внутриигровая валюта, зарабатывай в играх и используй для улучшений и обмена.', icon: creditsIcon},
  {title: 'akron coin', text: 'основной и собственный токен проекта и основной и собственный токен проекта и бла бла бла', icon: akronIcon},
  {title: 'ton coin', text: 'покупка персонажей, покупка экипировки, а также ставки в играх и многих других плюшек', icon: tonIcon},
]

export const slides = [
  { imgId: 2, title: {first: 'Космическая', second: 'дуэль'}, text: 'Брось вызов самому тёмному лорду. Вооружайся бластерами и устрой эпическую битву, покажи свои навыки и докажи, что тьма не всесильна!' },
  { imgId: 1, title: {first: 'Схватка с', second: 'Дарт Вейдером'}, text: 'Брось вызов самому тёмному лорду. Вооружайся бластерами и устрой эпическую битву, покажи свои навыки и докажи, что тьма не всесильна!'},
  { imgId: 3, title: {first: 'битва за', second: 'набу'}, text: 'Брось вызов самому тёмному лорду. Вооружайся бластерами и устрой эпическую битву, покажи свои навыки и докажи, что тьма не всесильна!', btnText: 'скоро' },
  { imgId: 1, title: {first: 'Схватка с', second: 'Дарт Вейдером'}, text: 'Брось вызов самому тёмному лорду. Вооружайся бластерами и устрой эпическую битву, покажи свои навыки и докажи, что тьма не всесильна!'},
]

export const nft = [
  { id: 1, score: 150 },
  { id: 2, score: 250 },
  { id: 3, score: 1000 },
  { id: 4, score: 5000 },
]