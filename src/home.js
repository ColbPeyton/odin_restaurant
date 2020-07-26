class Home{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Welcome To Odin\'s';
        return h1;
    }

    createBody(){
        const div = document.createElement('div');
        div.classList.add('container-body')
        div.innerHTML = '<p>Where the food and drinks are Godly</p>';

        return div;
    }

    createImage(){
        const img = document.createElement('img');
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

const home = new Home();

export default home;


{/* <h1>Welcome to Odin's</h1>
<p>Where the food is godly</p>
<img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"/> */}
