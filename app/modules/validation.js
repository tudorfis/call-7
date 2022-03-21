
const MIN_NUM_OF_PASSWORD_CHARACTERS = 8;

export function inputValidation(passIn, buttonIn){
    let newPassIn = passIn.value;

    const isCorrectPassword = newPassIn.length >= MIN_NUM_OF_PASSWORD_CHARACTERS

    if ( isCorrectPassword ) {
        buttonIn.removeAttribute('disabled')
    } else {
        buttonIn.setAttribute( 'disabled', 'true' )
    }
}
