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

export const characters = [
  { id: 1, name: 'B1 Battle Droid', damage: 2, recharge: 0, hp: '2.000' },
  { id: 2, name: 'Rebel Pilot', damage: 10, recharge: 1, hp: '10.000' },
  { id: 3, name: 'Tatooine Jawa', damage: 30, recharge: 2, hp: '30.000' },
  { id: 4, name: 'Stormtrooper', damage: 70, recharge: 4, hp: '70.000' },
  { id: 5, locked: true },
  { id: 6, locked: true },
]

export const akronList = [
  { precent: 15 },
  { precent: 10 }, 
  { precent: 5 },
  { precent: 15 },
  { precent: 3 },
  { precent: 52 },
]

export const cards = [
  { icon: creditsIcon },
  { icon: akronIcon },
  { icon: tonIcon },
]

export const slides = [
  { imgId: 2 },
  { imgId: 1 },
  { imgId: 3 }
]

export const nft = [
  { id: 1, score: 150 },
  { id: 2, score: 250 },
  { id: 3, score: 1000 },
  { id: 4, score: 5000 },
]