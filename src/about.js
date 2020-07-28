class About{
    createHeading(){
        const h1 = document.createElement('h1');
        h1.textContent = 'Here at Odin\'s';
        return h1;
    }

    createBody(){
        const containerBody = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');

        containerBody.classList.add('container-body')
        div1.appendChild(this.createParagraph('We offer a heavenly dining experience.')); 
        div2.appendChild(this.createParagraph('Founded in 1902, Odin\'s has been a staple of the New York dining experience.'));
        div2.appendChild(document.createElement('br'));
        div2.appendChild(document.createElement('br'));
        div2.appendChild(this.createParagraph('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium optio officia quo aliquid expedita consequuntur numquam ab! Laboriosam placeat nobis accusamus odio! Unde molestias repudiandae deserunt quod accusantium eaque veniam consequatur eum quo commodi quos, doloremque obcaecati ratione fugit nam ipsa sunt dolorum enim quis. Libero quisquam nam reiciendis itaque.'))
        div2.appendChild(document.createElement('br'));
        div2.appendChild(document.createElement('br'));
        div2.appendChild(this.createParagraph('Unde molestias repudiandae deserunt quod accusantium eaque veniam consequatur eum quo commodi quos, doloremque obcaecati ratione fugit nam ipsa sunt dolorum enim quis. Libero quisquam nam reiciendis itaque.'))

        div3.appendChild(this.createImage('./images/odin_streetview.jpeg'));
        div1.classList.add('about-tag-line');
        div2.classList.add('about-info');
        div3.classList.add('about-img');
        div4.classList.add('about-body');

        div4.appendChild(div2);
        div4.appendChild(div3);
        
        containerBody.appendChild(div1);
        containerBody.appendChild(div4);
        return containerBody;
    }

    createParagraph(msg){
        return document.createElement('p').appendChild(document.createTextNode(msg));
    }

    createImage(imgPath){
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = imgPath;
        div.classList.add('about-body-img');
        div.appendChild(img);
        return div;
    }

    appendElementsForDisplay(){
        const about = document.createElement('div');
        const container = document.createElement('div');
        about.classList.add('about');
        container.classList.add('container');
        const heading = this.createHeading();
        const body = this.createBody();


        container.appendChild(heading);
        container.appendChild(body);
        about.appendChild(container);
        return about;
    }

};

const about = new About();

export default about;
