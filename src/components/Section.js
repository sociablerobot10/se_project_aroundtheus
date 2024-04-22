/* Its second constructor parameter should be a CSS class selector where
you'll add the card elements.
It has a public method named renderItems() that renders all elements on the page. It should iterate
through the items array and call the renderer() function on each item.
This method should be called once on page load.
It has a public method named addItem() that takes a DOM element and adds it to the container.
 This method should be called when adding an individual card to the DOM.
 */

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      console.log("hello");
      this._renderer(item);
    });
  }
  addItem(item) {
    this._container.prepend(item);
  }
}
