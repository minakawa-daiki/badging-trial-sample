if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Service Worker の登録プロセス
    navigator.serviceWorker.register('./sw.js').then(function(res) {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    });
  });

  // Origin Trialなので`ExperimentalBadge`という名前になっている
  window.ExperimentalBadge.set();

  var counter = 0;

  const count = function(num) {
    counter += num;
    return counter;
  }

  const resetCount = function() {
    counter = 0;
    return counter;
  }

  const upBtn = document.getElementById('up-btn');
  upBtn.addEventListener('click', function() {
    // 引数に数値を渡すことでその値がバッジの数値となる
    window.ExperimentalBadge.set(count(1));
  });

  const downBtn = document.getElementById('down-btn');
  downBtn.addEventListener('click', function() {
    window.ExperimentalBadge.set(count(-1));
  });

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', function() {
    resetCount();
    // clearを実行することでバッジを消すことができる
    window.ExperimentalBadge.clear();
  });
}
