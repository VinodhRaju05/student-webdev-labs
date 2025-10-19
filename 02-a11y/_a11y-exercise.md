# Accessibility Exercises

## Exercise 01 - Form

In this exercise, fix the form in the starter file to address all form accessibility issues. Run a Wave or Lighthouse accessibility audit and address the issues that came up in those audits.

After running WAVE and Lighthouse accessibility audits on the form, the following issues were identified:
4 Errors: All related to missing form labels for input fields and radio buttons.
1 Alert: “No page regions” — the page was missing proper structural landmarks (like <main> or <header>).

Added <label> with for attribute for Name and Email fields.
Changed email field type to type="email".
Wrapped radio buttons in a <fieldset> with a <legend> for screen readers.
Added labels for each radio option.
Added semantic page regions (<header>, <main>, <footer>) to remove “No page regions” alert.
Confirmed keyboard and screen reader navigation works correctly.
