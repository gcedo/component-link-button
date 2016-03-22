
# component-link-button

This was created to help provide a pure `<a>` tag fallback to javascript-powered buttons.

The initial use case was the "load more" pagination button on the economist revamp project. In spite of the "load more" button being powered by javascript, it was also required to work without javascript, hence the need to make it an `<a>` tag.

It also features a `disabled` prop. When passed, your `onClick` prop becomes just `event.preventDefault()` so that your asynchronous actions such as "load more", or "create comment" can block the button face (both visually and functionally) until the code is ready to perform said asynchronous action again.

