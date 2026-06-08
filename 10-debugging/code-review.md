## Code Review Exercise

### Issue #3: HTML Semantics - Multiple H1 Tags on the Same Page

The page uses multiple `<h1>` tags throughout — one for the landing section,
and then again for Introduction, History, Characteristics, Cat Facts, and the
form heading. A page should only have one `<h1>` tag. The `<h1>` represents
the main topic of the page and should only appear once. Using multiple `<h1>`
tags breaks the heading hierarchy, confuses screen readers, and hurts SEO.
All section headings after the first should use `<h2>` instead.

Initial code:

```html
<h1 class="heading-1">Scottish Fold</h1>
...
<h1>Introduction</h1>
...
<h1 class="clear-margin-bottom">History</h1>
...
<h1>Characteristics</h1>
...
<h1>Cat Facts</h1>
...
<h1>Tell us what you want to learn more</h1>
```

Updated code:

```html
<h1 class="heading-1">Scottish Fold</h1>
...
<h2>Introduction</h2>
...
<h2 class="clear-margin-bottom">History</h2>
...
<h2>Characteristics</h2>
...
<h2>Cat Facts</h2>
...
<h2>Tell us what you want to learn more</h2>
```

---

### Issue #4: CSS - Duplicate Styles for Navbar Button Classes

In `styles.css`, the `.navbar-circular-icon-button` and
`.navbar-toggle-close-button` classes share almost identical CSS properties.
This is a CSS refactoring opportunity. Duplicating styles makes the code
harder to maintain — if you need to change the button size or color, you have
to update it in two places instead of one. The shared properties should be
combined into a single rule, with only the unique property (`margin: auto`)
kept separate.

Initial code:

```css
.navbar-circular-icon-button {
  font-size: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
}

.navbar-toggle-close-button {
  font-size: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  margin: auto;
}
```

Updated code:

```css
.navbar-circular-icon-button,
.navbar-toggle-close-button {
  font-size: 1.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
}

.navbar-toggle-close-button {
  margin: auto;
}
```

---

### Issue #5: JavaScript - Loader Image Stacks on Every Reload

In `index.js`, the `createLoadingContainer` function appends a new loader
image to the loading container every time it is called. However, it never
clears the container first. This means every time the user clicks "Load New
Cat Facts", a new loader image is added on top of the previous one. Over
multiple clicks, multiple loader images stack up inside the container, which
is a bug. The fix is to clear the container before appending the new loader
image using `replaceChildren()`, the same way `catFactsList` is cleared at the
top of `fetchCatFacts`.

Initial code:

```javascript
const createLoadingContainer = function () {
  const loadingContainer = document.querySelector(".loading-container");
  const loader = document.createElement("img");
  loader.src = "../../images/loader.gif";
  loader.alt = "loader gif while the data loads";
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};
```

Updated code:

```javascript
const createLoadingContainer = function () {
  const loadingContainer = document.querySelector(".loading-container");
  loadingContainer.replaceChildren();
  const loader = document.createElement("img");
  loader.src = "../../images/loader.gif";
  loader.alt = "loader gif while the data loads";
  loader.width = 60;
  loader.height = 60;
  loadingContainer.append(loader);
};
```
