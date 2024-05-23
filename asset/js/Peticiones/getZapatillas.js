export const getPersonajes = async() => {

    try{

        const response = await fetch("https://localhost/api/zapatillasData");
        const data =  await response.json();

        return data.results;

    }catch(error){
        console.error(`El error es: ${error}`);
    }

}