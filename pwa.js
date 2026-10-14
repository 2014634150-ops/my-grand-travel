(() => {
  const status = document.querySelector("#offlineStatus");
  const installButton = document.querySelector("#installApp");
  let installPrompt = null;

  function setStatus(message, state) {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  }

  function showInstallHelp(message) {
    const toast = document.querySelector("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 5200);
  }

  function updateStatus() {
    const cachedVersionReady = Boolean(navigator.serviceWorker?.controller);
    if (!navigator.onLine) {
      setStatus(cachedVersionReady ? "离线模式 · 行程、地图、攻略与预算可用" : "离线包尚未就绪 · 请先联网打开一次", cachedVersionReady ? "offline" : "pending");
    } else if (cachedVersionReady) {
      setStatus("离线已就绪 · 内置攻略可用，AI 与外链需联网", "ready");
    } else {
      setStatus("正在缓存离线资料 · 首次联网打开后稍等片刻", "pending");
    }

    const assistantStatus = document.querySelector("#assistantModeStatus");
    if (assistantStatus && !navigator.onLine) assistantStatus.innerHTML = "<i></i> 离线攻略问答 · AI 需联网";
  }

  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(() => {
      updateStatus();
      return navigator.serviceWorker.ready;
    }).then(updateStatus).catch(() => setStatus("离线缓存未能启动 · 请使用 HTTPS 打开", "error"));
    navigator.serviceWorker.addEventListener("controllerchange", updateStatus);
  } else {
    setStatus("当前浏览器不支持离线缓存 · 请用 HTTPS 打开", "error");
  }

  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
  });
  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    showInstallHelp("已添加到主屏幕。首次联网缓存完成后，可断网打开行程。 ");
  });

  installButton?.addEventListener("click", async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      return;
    }
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
    if (isIos) {
      showInstallHelp("iPhone/iPad：在 Safari 点“分享”→“添加到主屏幕”。先联网打开并等离线缓存就绪。 ");
    } else {
      showInstallHelp("在浏览器菜单选择“安装应用”或“添加到主屏幕”。首次联网缓存完成后可离线打开。 ");
    }
  });

  updateStatus();
})();
