export const getPersonajes = async() => {

    try{

        const response = await fetch("https://proyecto-001.onrender.com/api/zapatillasData");
        const data =  await response.json();

        return data.results;

    }catch(error){
        console.error(`El error es: ${error}`);
    }

}