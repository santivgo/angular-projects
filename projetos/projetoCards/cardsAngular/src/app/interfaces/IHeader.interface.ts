export enum Icon {
    client = "icon-client.png",
    credit_card = "icon-credit-card.png",
    debit_card = "icon-debit-card.png",
    hand = "icon-hand.png"

}

export interface IHeader {
    iconType: Icon
    mainTitle: string,
    value: string | undefined
    bgColor: "orange" | "cyan"
}