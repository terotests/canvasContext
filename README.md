
#canvasContext

usage:

```javascript

var ctx = canvasContext(<HTML canvas context>);

```

The point of this library is to be able to record and re-use the commands for the HTML Canvas. One of the interesting uses is to record SVG path commands to a set of direct context commands so that they can be rendered faster.

- http://jsfiddle.net/31xapxs7/

It is also possible to re-run the commands and render to canvas and SVG targets (using _e() library)

http://jsfiddle.net/j9dcsfkf/

You can draw canvas commands to the context almost as if you are using normal canvas. The commands can then be recorded and executed against Canvas, SVG or other rendering library.

The only difference is the if you are accessing a property like `fillStyle` it must be converted to a function call like

```javascript
 ctx.fillStyle("Yellow");
```

Example of a function rendering a star, the `ctx` parameter is the canvasContext object.

```javascript
// example of a function to draw a star
function star(ctx, x, y, r, p, m)
{
    ctx.save();
    
    ctx.beginPath();
    ctx.fillStyle("Yellow");
    ctx.strokeStyle("green");
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < p; i++)
    {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r*m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
```

To finally draw the commands to the canvas

```javascript
ctx.exec();
```

The commands can be also executed manually

```javascript
ctx.execFn( function(cmd, args) {
    console.log(cmd, JSON.stringify(args));
});
```

# Context template support

Context object's can be seen as "Templates" by inserting tags to the context command

```javascript
ctx.insert("linestyle"); // inserts a placeholder "linestyle"
```

The tag can be substituted by some other context. Let's say you define the style of the line in some other command context like this;

```javascript
var lineStyleCtx = canvasContext( );
lineStyleCtx.lineWidth(4);
```
The you can call

```javascript
ctx.add("linestyle", lineStyleCtx);
```

Or to create just one instance of the style and remove the old

```javascript
ctx.set("linestyle", lineStyleCtx); // will replace the old definition
```


And after `exec` the commands from `lineStyleCtx` will be run at the postion of the `insert("linestyle")` in the original ctx.


Very simple example is here.

http://jsfiddle.net/peuy1a1f/

# SVG Output

Rendering to the SVG, here the SVG element must be _e() -object

```javascript
var myDiv = _e(document.body).div(); // Check the _e() library
var testOut = myDiv.svg("", { width:mySize, height:mySize});
testOut.width(mySize).height(mySize);   
ctx.renderSvg(testOut);
```

# Streaming Bacon.js to the style properties

Example is here

http://jsfiddle.net/no8fg4j4/
