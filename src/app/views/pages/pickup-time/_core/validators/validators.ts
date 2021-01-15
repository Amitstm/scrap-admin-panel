import { AbstractControl } from "@angular/forms";


export function passwordConfirming(c: AbstractControl): any {
    if (!c.parent || !c) return;
    const pwd = c.parent.get('password');
    const cpwd = c.parent.get('confirmPassword');

    if (!pwd || !cpwd) return;
    if (pwd.value !== cpwd.value) {
        return { notMatching: true };
    }
}

export function phoneAlternateConfirming(c: AbstractControl): any {
    if (!c.parent || !c) return;
    const phn = c.parent.get('phoneNumber');
    const ophn = c.parent.get('ophoneNumber');

    if (!phn.value || !ophn.value) return;
    if (phn.value == ophn.value) {
        
        return { matching: true };
    }
}


