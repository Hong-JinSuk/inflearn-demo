// scripts/open-browser.js
const os = require('os');
const { execSync } = require('child_process');

const url = 'http://localhost:3000/inflearn-demo';

function openBrowser() {
  const platform = os.platform();

  if (platform === 'win32') {
    // 윈도우
    execSync(`start ${url}`, { stdio: 'ignore' });
  } else if (platform === 'darwin') {
    // 맥
    execSync(`open ${url}`, { stdio: 'ignore' });
  } else {
    // 리눅스 등 그 외
    // 보통 'xdg-open' 명령어가 많이 쓰입니다.
    execSync(`xdg-open ${url}`, { stdio: 'ignore' });
  }
}

openBrowser();
