export const getZapatillas = async() => {
    try{

        const response = await fetch("https://zapacity.onrender.com");
        
        
        const data = await response.json();
        return data.results;

    }catch(error){
        console.log(`El error es: ${error}`);
    }
}