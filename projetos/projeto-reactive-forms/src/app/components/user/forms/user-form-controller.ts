import { inject } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../../interfaces/user/user.interface";
import { PhoneList } from "../../../types/phone-list.type";
import { AddressList } from "../../../types/address-list.type";
import { DependentList } from "../../../types/dependent-list.type";
import { PhoneTypeMap } from "../../../utils/maps/phone-type.map";
import { IPhone } from "../../../interfaces/user/phone.interface";
import { formatPhone } from "../../../utils/format-phone";
import { PhoneTypeEnum } from "../../../enums/phone-type.enum";
import { AddressTypeMap } from "../../../utils/maps/address-type.map";
import { IAddress } from "../../../interfaces/user/address.interface";
import { ValidateAddress } from "./validators/address.validator";

export class UserFormController {


    userInfoForm!: FormGroup

    private _fb = inject(FormBuilder)
    private emailPattern = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    constructor() {
        this.createUserForm()
    }

    get generalInformations(): FormGroup {
        return this.userInfoForm.get('generalInformations') as FormGroup
    }

    get invalidGeneralInformationsCount(): number {
        return Object.keys(this.generalInformations.controls).filter((key) => this.generalInformations.get(key)?.invalid).length
    }

    get invalidContactInformations(): number {
        const invalidPhoneCounter = Object.keys(this.phoneList.controls).filter((key) => this.phoneList.get(key)?.invalid).length
        const invalidAddressCounter = Object.keys(this.addressList.controls).filter((key) => this.addressList.get(key)?.invalid).length

        return invalidAddressCounter + invalidPhoneCounter
    }


    get invalidDependentInformations(): number {
        return Object.keys(this.dependentList.controls).filter((key) => this.dependentList.get(key)?.invalid).length
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
        this.userInfoForm.markAllAsTouched()
        this.userInfoForm.updateValueAndValidity()

    }

    deleteDependent(i: number): void {
        this.dependentList.removeAt(i)
    }

    createEmptyDependent(): void {

        this.dependentList.push(this._fb.group({
            age: ['', Validators.required],
            document: ['', Validators.required],
            name: ['', Validators.required],
        }))
        console.log(this.dependentList)


    }
    private resetForm() {
        this.userInfoForm.reset()
        this.generalInformations.reset()
        this.phoneList.clear()
        this.addressList.clear()
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

        const defaultUserAddress: IAddress = {
            city: '',
            country: '',
            complement: '',
            state: '',
            street: '',
            type: NaN,
        };
        Object.keys(AddressTypeMap).map(Number).forEach((type) => {
            let addressOfType: IAddress | undefined = userAddressList.find((address) => address.type === type)

            if (addressOfType === undefined) addressOfType = defaultUserAddress

            this.addressList.push(this._fb.group({
                city: [addressOfType.city],
                complement: [addressOfType.complement],
                country: [addressOfType.country],
                state: [addressOfType.state],
                street: [addressOfType.street],
                type: [type],
                typeDescription: [{ value: AddressTypeMap[type], disabled: true }],

            }, { validators: ValidateAddress }))


        })
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