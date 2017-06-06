# Getting started
We'll start by creating a very simple creative that displays the current date and pulls in a 'national holiday' that falls on the same day.
The four files we will be editing are 'index.html', 'test-data.js', 'view.js', and 'global.css'.

Let's begin in 'index.html'. Find the div with an id named 'content' (in the 'creativeContainer' div). This is where our HTML for the creative is located. For our sample project, we'll only need to add two lines into this div:
```html
<!-- A -------------------------------------------------------------->
<div id="content">
  <p id="date"></p>
  <p id="holiday"></p>
</div>
<!------------------------------------------------------------------->
```
This will give us a place to display our info.

Up next will be the style for our page. This can be added in src/styles/css. All we're going to do here is add these few simple rules to make it look a bit nicer.
```css
/* -- B --------------------------------------------------------------------- */
#content {
  text-align: center;
  font-size: 4em;
  background-color: #ffdcd3 // Pink
}
#content p {
  margin-left: auto;
  margin-right: auto;
}
/* -------------------------------------------------------------------------- */
```

To simulate data from Silo all we have to do is add in one line in src/scripts/test-data.js.
```javascript
const TEST_DATA = [
...
  // -- C ----------------------------------------------------------------------
  {"_device_id": "*", "id": "9d286c0d-6b6f-4915-9f3d-ee8e762e204a", "holiday": "National Blueberry Cheesecake Day", "_index": "1", "_update_date": "2016-08-09T19:34:01.477000+00:00"}
  // ---------------------------------------------------------------------------
...
];
```

Finally, the logic for our app will be located in src/scripts/view.js. This is where we will get today's date, as well as pull in the data which we just simulated from Silo. In the `View` constructor:
```javascript
class View {
  constructor() {
  ...
    // -- D --------------------------------------------------------------------
    this.date = new Date();
    this.creativeContainerDate = window.document.getElementById('date');
    this.creativeContainerHoliday = window.document.getElementById('holiday');
    // -------------------------------------------------------------------------
  ...
  }
```

To keep today's date current, update it in the `updateView()` method:
```javascript
  // -- E --------------------------------------------------------------------
  updateView() {
    this.date = new Date();
  }
  // -------------------------------------------------------------------------
```

Now we will pull in our Silo data. As it currently stands, a few background images are being pulled in from Silo and we are picking a random one and displaying it. We can remove the lines containing this code as it is no longer needed:
```javascript
    // -- F --------------------------------------------------------------------
-   const objImageRange = {
-     min: 0,
-     max: this.rows.length - 1
-   };
-
-   this.creativeContainer.style.backgroundImage = 'url("' + this.rows[this.fnRandomImage(objImageRange.min, objImageRange.max)].url + '")';
    // -------------------------------------------------------------------------
```

and replace it with out logic:
```javascript
    // -- F --------------------------------------------------------------------
    this.holiday = this.rows.find(obj => obj.id === "9d286c0d-6b6f-4915-9f3d-ee8e762e204a");

    this.creativeContainerDate.innerHTML = "The date is: " + this.date.toDateString();
    this.creativeContainerHoliday.innerHTML = "Today is " + this.holiday;
    // -------------------------------------------------------------------------
```

