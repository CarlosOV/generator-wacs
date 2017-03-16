import template from './home-form.html';
import controller from './home-form.controller';

const HomeFormComponent = {
    bindings:{
        employee: '<',
        onCheckAssistance: '&'
    },
    template,
    controller
};

export default HomeFormComponent;
