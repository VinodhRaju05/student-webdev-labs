## Code Review Exercise

## Code Review Exercise

### Issue #1: Anchor Tags Used as Buttons

When you hover over the "More Info" buttons and "Load New Cat Facts", they
behave like buttons but they are using `<a>` tags with no `href` attribute.
Anchor tags are meant to navigate to another page or URL. Since these elements
open a popup and load cat facts, they should be `<button>` elements.
Using `<a>` tags for actions confuses screen readers and violates semantic
HTML principles.

Initial code:

```html
<a class="more-info-button">More Info</a>
<a class="reload-cat-facts">Load New Cats Facts</a>
```

Updated code:

```html
<button class="more-info-button">More Info</button>
<button class="reload-cat-facts">Load New Cat Facts</button>
```

---

### Issue #2: Form Inputs Not Properly Connected to Labels

When you click on the word "Name", "Email", "Username" or "Phone Number" in
the form, the cursor should move into the input box but it does not. This is
because the labels are using `<span>` tags instead of `<label>` tags. A
`<span>` has no connection to the input field. Using a `<label>` with a `for`
attribute that matches the input `id` fixes this. Also the inputs are wrapped
in `<p>` tags which is not valid HTML since `<p>` should not contain
form elements.

Initial code:

```html
<p class="label-input-group form-element-container">
  <span class="form-label">Name</span>
  <input
    aria-label="name"
    class="form-input-box"
    type="text"
    id="name"
    name="name"
  />
</p>
```

Updated code:

```html
<div class="label-input-group form-element-container">
  <label class="form-label" for="name">Name</label>
  <input class="form-input-box" type="text" id="name" name="name" />
</div>
```

---

### Issue #3: Multiple H1 Tags on the Same Page

The page uses `<h1>` for almost every section — Introduction, History,
Characteristics, Cat Facts, and the form heading all use `<h1>`. A page
should only have one `<h1>` that represents the main topic. Having multiple
`<h1>` tags breaks the heading hierarchy and confuses screen readers. All
section headings should use `<h2>` instead.

Initial code:

```html
<h1 class="heading-1">Scottish Fold</h1>
<h1>Introduction</h1>
<h1 class="clear-margin-bottom">History</h1>
<h1>Characteristics</h1>
<h1>Cat Facts</h1>
<h1>Tell us what you want to learn more</h1>
```

Updated code:

```html
<h1 class="heading-1">Scottish Fold</h1>
<h2>Introduction</h2>
<h2 class="clear-margin-bottom">History</h2>
<h2>Characteristics</h2>
<h2>Cat Facts</h2>
<h2>Tell us what you want to learn more</h2>
```

---

### Issue #4: Duplicate CSS for Navbar Buttons

In `styles.css`, the `.navbar-circular-icon-button` and
`.navbar-toggle-close-button` classes have almost the exact same CSS
properties. This is a refactoring opportunity. If you need to change the
button size or color you have to update it in two places. The shared
properties should be combined into one rule and only the unique property
`margin: auto` should stay separate.

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

### Issue #5: Loader Image Stacks on Every Click

In `index.js`, every time the user clicks "Load New Cat Facts" a new loader
image gets added inside the loading container without removing the old one.
So if you click it 5 times you will have 5 loader images stacking up. The fix
is to clear the container first using `replaceChildren()` before adding the
new loader image, the same way `catFactsList` is already being cleared at the
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
