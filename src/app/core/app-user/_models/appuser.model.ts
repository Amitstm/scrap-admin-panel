import { clear } from 'console';
import { ThemeService } from 'ng2-charts';
import { BaseModel } from '../../_base/crud';
export class AppuserModel extends BaseModel {
	id: number;
	image: File;
	username: string;
	mobileno: number;
	email: string;
	address: string;
	gender: string;
	status: number;
	dateofBbirth: string;
	dob: Date;

	clear() {
		this.dob = new Date();
		this.image = null;
		this.username = '';
		this.mobileno = null;
		this.email = '';
		this.address = '';
		this.gender = 'Female';
		this.status = 1;
	}
}
