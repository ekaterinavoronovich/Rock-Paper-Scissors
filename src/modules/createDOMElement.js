export function createElement(tag, classList, attributes, textContent, children, childrenAction, handlers) {
  const element = document.createElement(tag);
  if (classList?.length) {
    element.classList.add(...classList);
  }

  if (attributes?.length) {
    attributes.forEach(({ prop, value }) => {
      element.setAttribute(prop, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (children) {
    element[childrenAction](...children);
  }

  if (handlers?.length) {
    handlers.forEach(({ event, handler }) => {
      element.setAttribute(event, handler);
    });
  }

  return element;
}
