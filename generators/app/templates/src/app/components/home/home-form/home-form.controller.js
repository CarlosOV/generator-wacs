class HomeFormController {
    constructor(EventEmitter) {
        this.EventEmitter = EventEmitter;
    }
    $onChanges(changes) {
        if(changes.employee){
            this.employee = Object.assign({}, this.employee);
        }
    }
    onSubmit(){
        if (!this.employee.code) return;
        this.onCheckAssistance(
            this.EventEmitter({
                employee: this.employee
            })
        );

    }
}

HomeFormController.$inject = ['EventEmitter'];

export default HomeFormController;
