import translate from 'google-translate-api';

export const getValidTransalation = (message: string, countryId: string) => {
    const response = fetch(``)
    translate(message, {to: countryId})
}