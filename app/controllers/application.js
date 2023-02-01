import Controller from '@ember/controller';
 
export default class  ApplicationController extends Controller {
    constructor(){
        super(...arguments);
        this.initPage();
    }   
    initPage(){
        setTimeout(() => {
            this.transitionToRoute('user-sign-up');
        }, 2000);
    }
}
