function checkBrowserCompatibility(): boolean {
  if (typeof window === "undefined") return false;

  const ua = window.navigator.userAgent;
  const browserChecks = {
    chrome: () => {
      const match = ua.match(/Chrome\/(\d+)/);
      return match ? parseInt(match[1]) >= 84 : false;
    },
    edge: () => {
      const match = ua.match(/Edg\/(\d+)/);
      return match ? parseInt(match[1]) >= 84 : false;
    },
    firefox: () => {
      const match = ua.match(/Firefox\/(\d+)/);
      return match ? parseInt(match[1]) >= 79 : false;
    },
    safari: () => {
      const match = ua.match(/Version\/(\d+)/);
      return match ? parseInt(match[1]) >= 14 : false;
    },
  };

  // 데스크톱 브라우저 체크
  const isDesktopCompatible =
    browserChecks.chrome() ||
    browserChecks.edge() ||
    browserChecks.firefox() ||
    browserChecks.safari();

  // 모바일 브라우저 체크 (iOS Safari 14+, Android Chrome 84+)
  const isMobileCompatible =
    (/iPhone|iPad|iPod/i.test(ua) && browserChecks.safari()) ||
    (/Android/i.test(ua) && browserChecks.chrome());

  return isDesktopCompatible || isMobileCompatible;
}

export default checkBrowserCompatibility;
