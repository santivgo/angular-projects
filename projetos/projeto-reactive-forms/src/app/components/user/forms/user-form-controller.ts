import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../../interfaces/user/user.interface";

export class UserFormController {


    userInfoForm!: FormGroup

    private _fb = inject(FormBuilder)

    constructor() {
        this.createUserForm()
    }

    get generalInformations(): FormGroup {
        return this.userInfoForm.get('generalInformations') as FormGroup
    }

    fulfillUserForm(user: IUser): void {
        this.fulfillGeneralInformations(user)
    }

    private fulfillGeneralInformations(user: IUser) {
        this.userInfoForm.get('generalInformations')?.patchValue(user)
        console.log(this.userInfoForm)
    }

    createUserForm() {
        this.userInfoForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],

            }),
            contactInformations: this._fb.group({
                phoneList: this._fb.array([
                ]),
                addressList: this._fb.array([

                ])

            }),
            dependentList: this._fb.array([])
        })


        // birthDate: ['parse(this.user.birthDate, 'dd/MM/yyyy', new Date())'],

    }

}