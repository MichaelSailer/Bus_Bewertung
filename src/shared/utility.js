let questions = {
    frage_1: {question:"Sind Sie mit unserem Verkehrsangebot zufrieden?", value:0, wording:["Nein","Ja"],amoutOfStars:2},
    frage_2: {question:"Ist das Reisegefühl angenehm und fühlen Sie sich sicher? ", value:0, wording:["Nein","Ja"],amoutOfStars:2},
    frage_3: {question:"Wie gut war der Fahrstil des Fahres?", value:0, wording:["Sehr schlecht", "Schlecht","Befriedigend", "Gut","Sehr gut"],amoutOfStars:5},
    frage_4: {question:"Entspricht die Ausstattung und Sauberkeit des Fahrzeug Ihren Vorstellungen?", value:0, wording:["Sehr schlecht", "Schlecht","Befriedigend", "Gut","Sehr gut"],amoutOfStars:5},
    frage_5: {question:"Wie ist die Sauberkeit des Fahrzeuges?", value:0, wording:["Sehr Schmutzig","Schmutzig", "Normal","Sauber", "Sehr sauber"], amoutOfStars: 5},
    frage_6: {question:"Wie oft nehmen Sie die Öffis her?", value:0, wording:["Nie", "Selten","Manchmal", "Oft","Sehr oft"],amoutOfStars:5,}
}



export function getRatingWording(key,value){
    return questions[key].wording[value-1]

}

export function setValue(question,value) {
    questions[question].value = value
}

export function getTheQuestion(){
    return objectArrayConverter(questions);
}


export const updateObject = (oldObject, updatedProp) => {
    
    return {
        ...oldObject,
        ...updatedProp
    }
}

export const updateRatingField = (rating,field,value) => {
    
    let newRating = {...rating}
    newRating[field].value = value
    console.log(rating[0])

    return objectArrayConverter(newRating)
}

export const objectArrayConverter = (object) => {
    let array = Object.keys(object).map(el => {
        return {key: el,...object[el]}
    })
    return array
}