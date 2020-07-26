// Utility class 
// handles removing/udating elements to the DOM
// handles the logic to update the toggle links.
class Utility{
    removeContents(container){
        container.innerHTML = '';
    }
    updateActiveClass(active, notActive){
        active.classList.add('active');
       notActive.forEach(el => {
           el.classList.remove('active');
       })
   }

   appendToContainer(container, elements){
       container.appendChild(elements);
   }
};

const utility = new Utility();

export default utility;
