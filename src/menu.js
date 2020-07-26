class Menu{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Odin\'s Selections';
        return h1;
    }

    createBody(){
        const div = document.createElement('div');
        div.classList.add('container-body')
        div.innerHTML = '<p>All of our meals are prepared to please any God.</p>';

        return div;
    }

    appendElementsForDisplay(){
        const container = document.createElement('div');
        container.classList.add('container');
        const heading = this.createHeading();
        const body = this.createBody();


        container.appendChild(heading);
        container.appendChild(body);
        return container;
    }

};

const menu = new Menu();

export default menu;
