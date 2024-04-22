function customerender(container, Element) {
  // let domElement = document.createElement(Element.type);
  // domElement.setAttribute("href",Element.props.href)
  // domElement.setAttribute("target",Element.props.target)
  // domElement.innerHTML = Element.childern;
  // container.append(domElement);

  let domElement = document.createElement(Element.type);
  for (let i in Element.props) {
    domElement.setAttribute(i, Element.props[i]);
  }

  domElement.innerHTML = Element.childern;
  container.append(domElement);
}

const container = document.querySelector("#root");

const Element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childern: "This is Google Page",
};

customerender(container, Element);
