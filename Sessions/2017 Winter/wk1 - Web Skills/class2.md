#HTML and CSS Class 2

* [CSS Zen Garden](http://www.csszengarden.com/)
* [Simple Marketing Site](http://codepen.io/Colt/pen/DJsvB?editors=110)
* [30 CSS Selectors You Must Memorize(not really)](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
* [CSS Selectors Exercise](http://codepen.io/Colt/pen/Enbvs)
* [Advanced CSS Exercises](https://draftin.com/documents/499936?token=fgK6zU_Ojo65goYklgWfn2_V9v2lKSJD64_8ta2tSzjqnBp16_kEUfsFP8OBWGZCsZUtzCMbo3M5HGWeIMO7lO0)



#What is CSS, and why does it exist?


Using CSS allows us to separate the contents of the page from the styling and layout of the page.  Let's look at an example of how separate they can be:

[http://www.csszengarden.com/](http://www.csszengarden.com/)

The CSS Zen Garden is a site that allows us to look at the same HTML with a variety of different CSS files and see how wholly the site is changed by just altering the CSS.

Now we can change content without worrying about styling, change styling without worrying about content, and working in a team where some developers are more focused on styling is much easier.

The Point of CSS is to use clean, simple HTML in your page, then write CSS “rules” that style the objects on your page. The page stays clean and looks cool, and your HTML page works on both mobile devices and regular browsers. That’s the point of CSS. But The Art of CSS is quickly and easily referring to the right objects in your page from your CSS rules. The act of matching CSS rules to HTML tags is like a conversation: both sides need to be clear and in sync with each other, or they’ll talk over each other and you’ll get a headache from all the yelling.


##What kind of stuff can we do with CSS?
Here are some demos of some of the more impressive CSS features:

* [Pretty Game Demo](http://playdulla.com/)
* [CSS Hyperspace](http://codepen.io/noahblon/pen/GKflw)
* [3D CSS clouds](http://www.clicktorelease.com/code/css3dclouds/)
* [3d X-Wing Animation](http://codepen.io/juliangarnier/pen/hzDAF)
* [CSS Tunnel Vision](http://codepen.io/peterwestendorp/pen/JEomi)
* [Responsive Cat](http://roxik.com/cat/)
* [Crazy Mona Lisa with CSS](http://codepen.io/jaysalvat/pen/HaqBf)

## Anatomy of a CSS Rule

[CSS Vocabulary](http://pumpula.net/p/apps/css-vocabulary/)

```
selector {
	rule_name: value;
	rule_name: value;
}
```

##Basic CSS Properties
Let's try using some basic CSS properties:

* ``background-color: <color>;``
* ``color: <color>;``
* ``border: <br-width> <br-style> <br-color>;``

##Referring to Elements: CSS Selectors

[Great Resource: 30 CSS Selectors You Must Memorize!](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

####Element Selector

```
div{
	border: medium groove green;
}
```
We can use a tag name to select all the elements of that type and apply rules to them.

#### ID selector

```
#firstdiv{
	color: red;
}
```

The id selector uses a hash character `#`, then a string, to select the element that has exactly that string value for its id attribute.  id attributes MUST be unique.  Do not make a static id attribute in an ERB loop, as that will result in a non-unique attribute.

####Class selector

```
.blue-border{
	border: thick ridge blue;
}
```

The class selector uses `.` and a string to select all the elements that has that class.  Classes are defined through the HTML class attribute.  The value of the attribute is a space separated list of classes.

```
.red-text.light{
	color: lightsalmon;
}
```

We can use multiple selectors together. `.red-text.light` selects elements with both the `red-text` and the `light` classes.  

####Descendant selector
```
div#seconddiv div{
  border: thick outset lightseagreen;
}
```

A space, or descendant selector, combines two selectors.  This selector gets all `div` elements which are descendants of a `div` element that has id `seconddiv`.
#### Child Selector
```
div > a{
  font-weight: bolder;
}
```

The `>`, or child selector, is distinct from the descendant selector.  This gets all `a` elements which are children of any `div` element.

[More Complex Selectors Practice](http://learn.shayhowe.com/advanced-html-css/complex-selectors)

##The Box Model

Elements in a web page are modeled as boxes.  They have a content box with a height and width, then a padding surrounding that, then a border around the padding, then margin around the border.

![](https://draftin.com:443/images/14073?token=n49bDLc1Mqy8A3q6vlB9WPdSshKiy96etDZU1fbBc0n_lAcYip9MTSdNzyJKrZto02d7Z2i2wpBJnfIN-tF-pcY) 

[Great Box Model Tutorial](http://learn.shayhowe.com/html-css/box-model)

[Box Model Practice Code Pen](http://codepen.io/codewunder/pen/Hwdjx)


The margins of sibling elements can overlap, and the margin of a parent can overlap with the margin of the first and last child elements.

##Time For A Short Exercise!

Open [this codepen](http://codepen.io/Colt/pen/Enbvs/) and follow the instructions.

##More Properties: CSS Layout

Here's a great resource to learn about CSS layouts: [Learn Layout](http://learnlayout.com)

And another: [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)

And one more: [Learn Positioning in 10 Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

### Display
The display style property controls what sort of box the element is given.  Some elements, like `a`, have `inline` boxes by default.  Try putting `inline` on a set of `li` elements. They can be rendered inline with other elements.  Other elements, like `div`, have `block` boxes by default.  They are not rendered inline with other elements.  You can also set `display: none;` to hide an element completely.

### Float
The `float` property starts out as `none` for all elements, no elements float by default.  We can use `float: left;` or `float: right;` to move an element to the left or right.  It is removed from the normal flow of the page and pushed in the direction it was floated until it reaches the edge of its containing box or another floated element.  

### Position
The `position` property controls how the element is positioned:
>__static__:
This keyword let the element use the normal behavior, that is it is laid out in its current position in the flow.  The top, right, bottom, and left properties do not apply.

>__relative__:
This keyword lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout (and thus leaving a gap for the element where it would have been had it not been positioned). The effect of position:relative on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.

>__absolute__:
Do not leave space for the element. Instead, position it at a specified position relative to its closest positioned ancestor or to the containing block. Absolutely positioned boxes can have margins, they do not collapse with any other margins.

>__fixed__:
Do not leave space for the element. Instead, position it at a specified position relative to the screen's viewport and doesn't move when scrolled. When printing, position it at that fixed position on every page.

Each of these have uses	 of their own.  `static` is the default one, `fixed` is useful for fixed navigation elements, and `absolute` and `relative` positioning are useful for having close control over how the page is layed out.

##The Cascade and Specificity

What happens when two css rules seem to conflict?


```

<div class="class-on-div">
	I'm in a div
</div>

div{
	color: red;
}
.class-on-div{
	color: green;
}
div.class-on-div{
	color: blue;
}

```

The CSS Cascade algorithm decides which rules that apply to an element take precedence.

[Helpful article on CSS specificity](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

[CSS Specificity Calculator!](http://specificity.keegan.st/)

From least priority to highest priority:

1. Browser default styles
1. Browser default styles with `!important`
1. User defined styles (usually from browser settings)
1. Web page defined styles
1. Web page defined styles with `!important`
1. User defined styles with `!important`

Don't use `!important`.

If two rules are equal in the cascade, their specificity decides which is used.  Once again from least to highest specificity:

1. Universal selectors (*)
1. Type selectors (div)
1. Class selectors (.class-name)
1. Attributes selectors ([attr-name=attr-value])
1. Pseudo-classes (:link, :visited, :hover, and many others)
1. ID selectors (#id-name)
1. Inline style (setting the style attribute in the element)

There's a precisely laid out algorithm you can read about specificity, which details what happens with complicated selectors, but specificity is pretty intuitive.

Never set style attributes in an element.

##Inheritance

Some properties, like `color`, are inherited by default.  Others, like `border`, are not inherited.  If a property is inherited, an element will use the value of the property on its parent element unless it has a value of its own set.  The MDN pages for each css property tell whether they are inherited, but it is also fairly intuitive.

***