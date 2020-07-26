class About{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Here at Odin\'s';
        return h1;
    }

    createBody(){
        const div = document.createElement('div');
        div.classList.add('container-body')
        div.innerHTML = '<p>We offer a heavenly dining experience.</p>';

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

const about = new About();

export default about;
