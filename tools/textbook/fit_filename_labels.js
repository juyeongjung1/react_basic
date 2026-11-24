// ファイルパスが枠の幅を超える場合だけ、1行に収まる大きさにする。
function fitFilenameLabels(container) {
  const range = document.createRange();
  for (const label of container.querySelectorAll('.card-header .file-item')) {
    const style = getComputedStyle(label);
    const insets = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight)
      + Number.parseFloat(style.borderLeftWidth) + Number.parseFloat(style.borderRightWidth);
    const available = label.getBoundingClientRect().width - insets;
    range.selectNodeContents(label);
    const textWidth = range.getBoundingClientRect().width;
    if (available > 1 && textWidth > available + 0.1) {
      // 印刷時の丸めを見込み、文字の右端に1 CSS pxの余裕を残す。
      const fitted = Number.parseFloat(style.fontSize) * (available - 1) / textWidth;
      label.style.fontSize = `${Math.floor(fitted * 10) / 10}px`;
    }
  }
}
