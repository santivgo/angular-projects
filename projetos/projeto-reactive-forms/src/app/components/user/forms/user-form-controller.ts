import { inject } from "@angular/core";
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../../interfaces/user/user.interface";
import { PhoneList } from "../../../types/phone-list.type";
import { AddressList } from "../../../types/address-list.type";
import { DependentList } from "../../../types/dependent-list.type";
import { PhoneTypeMap } from "../../../utils/maps/phone-type.map";
import { IPhone } from "../../../interfaces/user/phone.interface";
import { format } from "date-fns";
import { formatPhone } from "../../../utils/format-phone";
import { PhoneTypeEnum } from "../../../enums/phone-type.enum";

export class UserFormController {


    userInfoForm!: FormGroup

    private _fb = inject(FormBuilder)
    private emailPattern = /^[a-zA-Z0-9_%+-]+@ [a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    constructor() {
        this.createUserForm()
    }

    get generalInformations(): FormGroup {
        return this.userInfoForm.get('generalInformations') as FormGroup
    }

    get contactInformations(): FormGroup {
        return this.userInfoForm.get('contactInformations') as FormGroup
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
        this.generalInformations.reset()
        this.phoneList.clear()
        this.dependentList.clear()
    }

    private fulfillPhoneList(userPhoneList: PhoneList) {
        let typeUserPhone: IPhone | undefined
        const newPhoneArray: FormArray = this._fb.array([]);



        Object.keys(PhoneTypeMap).map(Number).forEach(
            (key: number) => {
                typeUserPhone = userPhoneList.find((value: IPhone) => value.type === key)
                const phoneValidators = key === PhoneTypeEnum.EMERGENCIA ? [] : [Validators.required]

                newPhoneArray.push(this._fb.group({
                    typeDescription: [PhoneTypeMap[key]],
                    type: [key],
                    phone: [typeUserPhone ? formatPhone(typeUserPhone) : '', phoneValidators]
                }))
            }
        )
        this.contactInformations.setControl('phoneList', newPhoneArray);
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
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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