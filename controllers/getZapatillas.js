const{request,response}= require("express");
const{zapatillas}=require("../zapatillas.js");

const getZapatillas=(req=request,res=response)=>{
    return res.json({
        zapatillas: zapatillas
    });
}
const getZapatillasById = (req = request, res = response) => {
    const id = req.params.id;
    let zapaS = "";
    zapaS = zapatillas.find((zapatilla)=>{
        return zapatilla.id===id;
    })
    if (zapaS){
        return res.json({
            ok:true,
            zapaS,
            statuscode:200
            });
    }else{
        return res.json({
            ok:false,
            msg:"Error, no hay zapatillas de este modelo",
            statuscode:404
        });
    }
}

module.exports={
    getZapatillas,
    getZapatillasById
}