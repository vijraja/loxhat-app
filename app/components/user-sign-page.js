import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class UserSignPageComponent extends Component {
    @tracked isNewUser = this.args.isNewUser
}
