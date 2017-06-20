
## js execution context explanation by code example and debugging

```html

(function foo(i) {

    if (i == 3) {     
        return;
    } else {
        debugger;
        foo(++i)
    }
})(0)

```