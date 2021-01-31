import { startApp } from '@/index';

window.addEventListener('load', () => {
  startApp({
    charactersPath: 'data/characters.json',
    configPath: 'data/config.json',
  }, {
    debug: false,
  });
});

