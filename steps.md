1. Init the tailwind css using react with vite. 
2. Fix up the configs of the postcss, tailwind.config.js. 
3. Create sections inside of src, import them in the app and a basic skeleton of the website, this is just jsx code where you are rendering what component comes after the other. 

4. Start with the navBar: 
    - Always write semantic tags
    - Add in the image first
    - Add in the ul and the li, and the hamburger icon. 
    - Add the responsiveness that on this part, hamburger usually stays hidden but at this resolution, say max-lg:block (it becomes visible). 

    ? : Check why the navbar is not coming at the top. 

5. Hero section: 
    - Make the section that will be flex, will take the entire width and the entire height of the screen. It will be flex col on smaller devices, and flex row on larger devices. 
    - Inside this, create a div that is flex-row, will take 2/5th of width on big screens, normally it will take the entire width, and will be relative position to its parent section. 
    - Inside this div, add the text essentially, create the button and add it, and add the logo row in the bottom. 
    - Then below that, add another div which will be the container for those 1k+ customers and stuff, so that will be a flex, also add flex-wrap so it collapses as the site is made for mobiles and shit. 
    - Now you add the shoe image, so that will be a new div, and it will itself be a flexbox because below that you have to enter cards. Add the main Shoebox image. 
    - Below it, also now add the shoeCards, which will themselves be a flex of flex-row

    ?: why is the new arrivals div not to the left? 