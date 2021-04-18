import Darkmode from 'darkmode-js';

class DarkMode {
  static init() {
    const options = {
      label: '🌓',
    };

    new Darkmode(options).showWidget();
  }
}

export default DarkMode;
