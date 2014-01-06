UI Widget Progress Circle (svg)
===============================

# Install
clone to your package folder
```bash
$ git clone <this-repo.git>
```

or

```bash
$ mrt add ui-progress-circle
```

# Howto use
```html
{{> progressCircle progress="50" radius="100" class="green"}}
```
*`radius` and `class` are both optional*

##CSS Example
This is one of the built'in styles `red`, `green` and `blue`
```css
    /* The text in center */
    svg.ui-progress-circle #text.green {
        fill: #76B13C;
    }
    /* Background of mid circle */
    svg.ui-progress-circle #background.green {
        fill: #F7F6F4;
    }
    /* Circle stroke around text */
    svg.ui-progress-circle #stroke.green {
        stroke: #76B13C;
        opacity: .5;
    }
    /* Progress marker */
    svg.ui-progress-circle #progress.green {
        fill: #76B13C;
    }
```