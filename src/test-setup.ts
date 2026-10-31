// jsdom has no SVG layout, so getBBox is missing. Tests only need it to exist.
if (!('getBBox' in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, 'getBBox', {
    value: () => ({ x: 0, y: 0, width: 0, height: 0 }),
  });
}
