class Home{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Odin\'s';
        h1.classList.add('heading');
        return h1;
    }

    createBody(){
        const div = document.createElement('div');
        div.classList.add('container-body')
        div.innerHTML = '<p>Food and drinks fit <span>for a God<span></p>';

        return div;
    }

    createImage(){
        const img = document.createElement('img');
    }

    appendElementsForDisplay(){
        const container = document.createElement('div');
        container.classList.add('home');
        container.classList.add('container');
        const div = document.createElement('div');
        div.classList.add('container-color');
        const heading = this.createHeading();
        const body = this.createBody();


        div.appendChild(heading);
        div.appendChild(body);
        container.appendChild(div);
        return container;
    }

};

const home = new Home();

export default home;
