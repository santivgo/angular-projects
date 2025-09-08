import { inject } from "@angular/core";
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../../interfaces/user/user.interface";
import { PhoneList } from "../../../types/phone-list.type";
import { AddressList } from "../../../types/address-list.type";
import { DependentList } from "../../../types/dependent-list.type";

export class UserFormController {


    userInfoForm!: FormGroup

    private _fb = inject(FormBuilder)

    constructor() {
        this.createUserForm()
    }

    get generalInformations(): FormGroup {
        return this.userInfoForm.get('generalInformations') as FormGroup
    }
    get phoneList(): FormArray {
        return this.userInfoForm.get('contactInformations.phoneList') as FormArray
    }
    get addressList(): FormArray {
        return this.userInfoForm.get('contactInformations.addressList') as FormArray
    }

    get dependentList(): FormArray {
        return this.userInfoForm.get('dependentList') as FormArray
    }

    private fulfillGeneralInformations(user: IUser) {
        this.generalInformations.patchValue(user)
    }

    fulfillUserForm(user: IUser): void {
        this.resetForm()
        this.fulfillGeneralInformations(user)
        this.fulfillPhoneList(user.phoneList)
        this.fulfillAddressList(user.addressList)
        this.fulfillDependentList(user.dependentsList)

    }
    private resetForm() {
        this.userInfoForm.reset()
    }

    private fulfillPhoneList(userPhoneList: PhoneList) {
        userPhoneList.forEach((phone) => this.phoneList.push(this._fb.group({
            type: [phone.type, Validators.required],
            areaCode: [phone.areaCode, Validators.required],
            internationalCode: [phone.internationalCode, Validators.required],
            number: [phone.number, Validators.required],
        })))
    }
    private fulfillAddressList(userAddressList: AddressList) {
        userAddressList.forEach((address) => this.addressList.push(this._fb.group({
            city: [address.city, Validators.required],
            complement: [address.complement, Validators.required],
            country: [address.country, Validators.required],
            state: [address.state, Validators.required],
            street: [address.street, Validators.required],
            type: [address.type, Validators.required],
        })))
    }

    private fulfillDependentList(userDependentList: DependentList) {
        userDependentList.forEach((dependent) => this.dependentList.push(this._fb.group({
            age: [dependent.age, Validators.required],
            document: [dependent.document, Validators.required],
            name: [dependent.name, Validators.required],


        })))
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



    }

}