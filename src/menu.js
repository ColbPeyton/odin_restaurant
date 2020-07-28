class Menu{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Odin\'s Favorites';
        return h1;
    }

    createBody(){
        const containerBody = document.createElement('div');
        const tagLine = document.createElement('div');
        const apps = document.createElement('div');
        const veg = document.createElement('div');
        const mainCourse = document.createElement('div');
        const drinks = document.createElement('div');
        const desserts = document.createElement('div');
        const menuDiv = document.createElement('div');

        containerBody.classList.add('container-body');
        tagLine.classList.add('menu-tag-line');
        apps.classList.add('apps');
        veg.classList.add('veg');
        mainCourse.classList.add('main-course');
        drinks.classList.add('drinks');
        desserts.classList.add('desserts');
        menuDiv.classList.add('menuDiv');

        tagLine.appendChild(this.createParagraph('Fresh food and great drinks.')); 
       
        apps.appendChild(this.createMenuHeading('Appetizers'))
        apps.appendChild(this.createMenuItem('Lorem ipsum dolor sit amet', 'Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor', '$11.99'));
        apps.appendChild(this.createMenuItem('Fusce in imperdiet massa', 'Mauris sagittis facilisis ante ac rhoncus.', '$14.99'));
        apps.appendChild(this.createMenuItem('Maecenas placerat', 'Vestibulum fringilla, tortor', '$10.99'));

        veg.appendChild(this.createMenuHeading('Vegetarian'))
        veg.appendChild(this.createMenuItem('Lorem ipsum dolor sit amet', 'Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor', '$11.99'));
        veg.appendChild(this.createMenuItem('Fusce in imperdiet massa', 'Mauris sagittis facilisis ante ac rhoncus.', '$14.99'));
        veg.appendChild(this.createMenuItem('Maecenas placerat', 'Vestibulum fringilla, tortor', '$10.99'));

        mainCourse.appendChild(this.createMenuHeading('Entrees'))
        mainCourse.appendChild(this.createMenuItem('Lorem ipsum dolor sit amet', 'Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor', '$21.99'));
        mainCourse.appendChild(this.createMenuItem('Fusce in imperdiet massa', 'Mauris sagittis facilisis ante ac rhoncus. Vestibulum fringilla, tortor', '$24.99'));

        drinks.appendChild(this.createMenuHeading('Drinks'))
        drinks.appendChild(this.createMenuItem('Lorem ipsum', 'Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor', '$7.99'));
        drinks.appendChild(this.createMenuItem('Fusce in imperdiet massa', 'Mauris sagittis facilisis ante ac rhoncus.', '$14.99'));
        drinks.appendChild(this.createMenuItem('Maecenas placerat', 'Vestibulum fringilla, tortor', '$12.99'));

        desserts.appendChild(this.createMenuHeading('Desserts'))
        desserts.appendChild(this.createMenuItem('Lorem ipsum dolor sit amet', 'Nam cursus feugiat ullamcorper. Vestibulum fringilla, tortor', '$11.99'));
        desserts.appendChild(this.createMenuItem('Fusce in imperdiet massa', 'Mauris sagittis facilisis ante ac rhoncus.', '$14.99'));
        desserts.appendChild(this.createMenuItem('Maecenas placerat', 'Vestibulum fringilla, tortor', '$10.99'));

        menuDiv.appendChild(apps);
        menuDiv.appendChild(veg);
        menuDiv.appendChild(mainCourse);
        menuDiv.appendChild(drinks);
        menuDiv.appendChild(desserts);
        containerBody.appendChild(tagLine);
        containerBody.appendChild(menuDiv);
      
        return containerBody;
    }

    createParagraph(msg){
        return document.createElement('p').appendChild(document.createTextNode(msg));
    }

    createMenuItem(itemName, itemDesc, itemPrice){
        const div = document.createElement('div');
        const namePriceDiv = document.createElement('div');
        const name = this.setMenuItem(itemName, 'menu-item-name');
        const desc = this.setMenuItem(itemDesc, 'menu-item-desc');
        const price = this.setMenuItem(itemPrice, 'menu-item-price');
        
        div.classList.add('menu-item');
        namePriceDiv.classList.add('name-price');
        // name.classList.add('menu-item-name');
        // desc.classList.add('menu-item-desc');
        // price.classList.add('menu-item-price');
        namePriceDiv.appendChild(name);
        namePriceDiv.appendChild(price);
        div.appendChild(namePriceDiv);
        div.appendChild(desc);

        return div;
    }

    setMenuItem(element, className){
        const div = document.createElement('div');
        const item = this.createParagraph(element);
        div.classList.add(className);
        div.appendChild(item)
        return div;
    }

    createMenuHeading(name){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = name;
        div.appendChild(h3);
        div.classList.add('menu-heading');
        return div;
    }

    appendElementsForDisplay(){
        const menu = document.createElement('div');
        const container = document.createElement('div');
        menu.classList.add('menu');
        container.classList.add('container');
        const heading = this.createHeading();
        const body = this.createBody();


        container.appendChild(heading);
        container.appendChild(body);
        menu.appendChild(container);
        return menu;
    }
};

const menu = new Menu();

export default menu;
