const ProgressBar = require('progress');
const fs = require('fs');
const spawn = require('child_process').spawn;
const path = require('path');

let bar;
function build() {
  return new Promise((resolve) => {
    bar = new ProgressBar('빌드 진행중... [:bar] :percent', { total: 30 });
    function tick() {
      //bar.tick(0.5);
      bar.tick(1);
      if (bar.complete) {
        console.log('빌드 완료');
        clearInterval(timer);
        resolve();
      }
    }
    const timer = setInterval(tick, 33);
    tick();
  });
}

let serverProcess;
function runServer() {
  console.log('서버 실행 중...');
  serverProcess = spawn('node', [`${path.join(__dirname, 'server')}`]);

  serverProcess.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  serverProcess.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
}

function killServer() {
  return new Promise((resolve) => {
    serverProcess.on('close', () => {
      console.log(`서버 종료`);
      resolve();
    });
    serverProcess.kill();
  });
}

let isBuilding = false;

function mainLogic() {
  if (isBuilding) {
    bar.curr = 0;
    return;
  }
  if (serverProcess) {
    killServer();
  }
  isBuilding = true;
  build()
  .then(() => {
    runServer();
    isBuilding = false;
  });
}

fs.watch(__dirname, {
  recursive: true,
}, mainLogic);

mainLogic();
