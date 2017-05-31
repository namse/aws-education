const ProgressBar = require('progress');

const bar = new ProgressBar('빌드 진행중... [:bar] :percent', { total: 30 });
function tick() {
  bar.tick(0.5);
  if (bar.complete) {
    console.log('\n빌드 완료\n');
    clearInterval(timer);
  }
}
const timer = setInterval(tick, 1000);
tick();
