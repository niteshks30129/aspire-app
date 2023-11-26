import { CardObject } from "../../types";

// Dummy data
const CardData: CardObject[] = [
    {
        "cardNumber": "1234567890123456",
        "cardHolderName": "Mark Henry",
        "expirationDate": "11/29",
        "cvv": "157",
        "bank": "Sample Bank",
        "balance": {
          "amount": 10000,
          "currency": "USD"
        },
        "isContactless": true,
        "status": 'active',
        "isActive": true
    },
    {
        "cardNumber": "5678124390123416",
        "cardHolderName": "John Doe",
        "expirationDate": "12/26",
        "cvv": "918",
        "bank": "Sample Bank",
        "balance": {
          "amount": 2000,
          "currency": "USD"
        },
        "isContactless": true,
        "status": 'active',
        "isActive": true
    },
    {
        "cardNumber": "9012517823121456",
        "cardHolderName": "Kane Williams",
        "expirationDate": "02/25",
        "cvv": "022",
        "bank": "Sample Bank",
        "balance": {
          "amount": 30000,
          "currency": "USD"
        },
        "isContactless": true,
        "status": 'active',
        "isActive": true
    },
  ];
  
  
  const fetchCard = () => {
    return new Promise((res) => {
      console.log("fetchCard1")
      setTimeout(() => {
        res(CardData)
      }, 500)
    })
  }

  export {fetchCard}