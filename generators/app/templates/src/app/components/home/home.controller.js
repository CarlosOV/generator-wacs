class HomeController {

  constructor(Notification) {
    this.Notification = Notification;
  }

  $onInit() {
    this.newEmployee = {
      code: ""
    };
  }

  checkAssistance({ employee }) {
    if(!employee) return ;
    console.log("code: ", employee.code);
    this.Notification.success('check correct - código: '+employee.code);

  }

}

HomeController.$inject = ['Notification'];

export default HomeController;
