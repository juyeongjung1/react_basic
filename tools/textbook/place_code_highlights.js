// 描画済みの文字位置から赤枠を作る。コードの字送りや改行は変えない。
function placeCodeHighlights(root) {
  const pxPerPt = 96 / 72;
  const bounds = (a, b) => ({
    left: Math.min(a.left, b.left), top: Math.min(a.top, b.top),
    right: Math.max(a.right, b.right), bottom: Math.max(a.bottom, b.bottom),
  });

  for (const card of root.querySelectorAll('.has-code-highlights')) {
    const groups = new Map();
    for (const pre of card.querySelectorAll('[data-code-highlights]')) {
      const walker = document.createTreeWalker(pre, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      let offset = 0;
      let node;
      while ((node = walker.nextNode())) {
        textNodes.push({ node, first: offset, last: offset + node.length });
        offset += node.length;
      }
      const lineHeight = Number.parseFloat(getComputedStyle(pre).lineHeight);
      const range = document.createRange();
      const source = pre.textContent ?? '';
      for (const [id, first, last, block] of JSON.parse(pre.dataset.codeHighlights)) {
        if (last > offset) throw new Error('赤枠の文字位置が表示コードを超えています。');
        const group = groups.get(id) || { block, lineHeight, boxes: [], tightLeft: false, tightRight: false };
        group.tightLeft ||= first > 0 && /\S/.test(source.charAt(first - 1));
        group.tightRight ||= /\S/.test(source.charAt(last));
        groups.set(id, group);
        for (const text of textNodes) {
          const start = Math.max(first, text.first);
          const end = Math.min(last, text.last);
          if (start >= end) continue;
          range.setStart(text.node, start - text.first);
          range.setEnd(text.node, end - text.first);
          for (const rect of range.getClientRects()) {
            if (rect.width > 0 && rect.height > 0) group.boxes.push(rect);
          }
        }
      }
    }

    const frames = [];
    for (const [id, { block, lineHeight, boxes, tightLeft, tightRight }] of groups) {
      if (!boxes.length) throw new Error('コードの赤枠に対応する文字がありません。');
      const visualLines = [];
      for (const box of boxes.sort((a, b) => a.top - b.top || a.left - b.left)) {
        const prev = visualLines.at(-1);
        if (prev && Math.abs(prev.top - box.top) < lineHeight / 2) {
          visualLines[visualLines.length - 1] = bounds(prev, box);
        } else {
          visualLines.push(box);
        }
      }
      const rects = block ? [visualLines.reduce(bounds)] : visualLines;
      for (const box of rects) {
        frames.push({ id, box, pad: {
          left: tightLeft ? .45 : 1.55, top: 1.3, right: tightRight ? .45 : 1.55, bottom: 1.3,
        } });
      }
    }

    // 隣の枠との間が狭い場合は、文字の領域を保ちながら余白を分け合う。
    for (const a of frames) {
      for (const b of frames) {
        const xOverlaps = a.box.left < b.box.right && b.box.left < a.box.right;
        const yOverlaps = a.box.top < b.box.bottom && b.box.top < a.box.bottom;
        if (xOverlaps && a.box.bottom <= b.box.top) {
          const gap = Math.max(0, (b.box.top - a.box.bottom - .9) / 2);
          a.pad.bottom = Math.min(a.pad.bottom, gap);
          b.pad.top = Math.min(b.pad.top, gap);
        }
        if (yOverlaps && a.box.right <= b.box.left) {
          const gap = Math.max(0, (b.box.left - a.box.right - .9) / 2);
          a.pad.right = Math.min(a.pad.right, gap);
          b.pad.left = Math.min(b.pad.left, gap);
        }
      }
    }

    const layer = document.createElement('div');
    layer.className = 'code-highlight-layer';
    layer.setAttribute('aria-hidden', 'true');
    card.append(layer);
    const origin = layer.getBoundingClientRect();
    for (const { id, box, pad } of frames) {
      const frame = document.createElement('div');
      frame.className = 'code-highlight-frame';
      frame.dataset.highlightTarget = id;
      const toPt = value => `${value / pxPerPt}pt`;
      Object.assign(frame.style, {
        left: toPt(box.left - origin.left - pad.left),
        top: toPt(box.top - origin.top - pad.top),
        width: toPt(box.right - box.left + pad.left + pad.right),
        height: toPt(box.bottom - box.top + pad.top + pad.bottom),
      });
      layer.append(frame);
    }
  }
}
