# Proximity-Eye-Ball-Effect
A vanilla javascript approach towards proximity based eye ball effect

> Language Used 
  - HTML
  - JavaScript
  
# Working method

   * Detects `mouse movement` with <br>
   ```js
   addEventListener('mousemove', e => {
    /*
     * code here
     */
   })
   ```
   * Then use the function below to change rotation accordingly
   ```js 
   const rotation = (mx, my, bx, by) => {
	    const dx = bx - mx;
	    const dy = by - my;

	    const rad = Math.atan2(dy, dx);
	    const deg = rad * 180 / Math.PI;

	    return deg;
    }

   ```
   > Find code implementation [here](https://github.com/asRizvi888/Proximity-Eye-Ball-Effect/blob/main/app.js)
