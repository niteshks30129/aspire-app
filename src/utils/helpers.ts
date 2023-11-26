

const  generateRandomDigit = () =>  {
    return Math.floor(Math.random() * 10);
}
  
const generateRandom16DigitCardNumber = () =>  {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
      cardNumber += generateRandomDigit();
    }
    return cardNumber;
  }

  const generateRandomExpiryDate = () => {
    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const currentYear = new Date().getFullYear();
    const randomYear = String(Math.floor(Math.random() * 10) + currentYear).slice(-2);
    const expiryDate = `${randomMonth}/${randomYear}`;
    return expiryDate;
  }
  
const getCardDetails = (holderName: string) => {
   const cardDetail = {
    cvv: 157,
    bank: 'Sample Bank',
    balance: {
      amount: 10000,
      currency: 'USD'
    },
    isContactless: true,
    status: 'active',
    isActive: true
  }
  const cardNumber = generateRandom16DigitCardNumber();
  const cardExpiry = generateRandomExpiryDate()
  return {
    ...cardDetail,
    cardHolderName: holderName,
    cardNumber,
    expirationDate: cardExpiry
  }
}

const deleteCurrentCard = (cards: any, card: any) => {
    let updatedCard = [...cards]
    updatedCard = updatedCard.filter((item) => item.cardNumber != card.cardNumber)
    return updatedCard
}

const freezeCardHandler = (cards: any, card: any) => {
    let updatedCard = []
    for(let item of cards){
        if(item.cardNumber === card.cardNumber){
            updatedCard.push({...item, status: item.status === 'active' ? 'freeze' : 'active'})
        } else {
            updatedCard.push(item)
        }
    }
    return updatedCard
}


export {getCardDetails, deleteCurrentCard, freezeCardHandler}
