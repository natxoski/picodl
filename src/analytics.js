let handlers = {
  cta: {
    click: { 
      click: function (event, component) {
        console.log(`${component} clicked`);
      },
      keypress: function (event, component) {
        console.log(`key pressed for ${component}`);
      }
    },
    hover: {
      mouseenter: function (event, component) {
        console.log(`${component} hovered`);
      },
      mouseover: function (event, component) {
      console.log(`${component} hovered`);
      },
    },
  }
}


const onPageLoad = () => {
  
  document.querySelectorAll('.dl').forEach(
    node => {
      
      let dlEvents = node.dataset.dlEvents;
      let events = (dlEvents.indexOf(',')>-1) ? dlEvents.split(', ') : dlEvents;
      
      let component = node.dataset.dlComponent;
      events.forEach((eventType)=> {
        eventsArray=[];
        switch(eventType) {
          case 'click': 
            eventsArray = ['click', 'keypress']
            break;
          case 'hover':
            eventsArray = ['mouseover', 'mouseenter'];
            break;
          default: break;
        }
        eventsArray.forEach(
          (event) => {
            console.log(eventType, event);
            node.removeEventListener(event, 
              (e) => {
                handlers[component][eventType][event](e, component);
              }
            );
            node.addEventListener(event, 
              (e) => {
                handlers[component][eventType][event](e, component)
              }
            );
          }
        );
      });
    }
  )
};

window.addEventListener('load', onPageLoad);