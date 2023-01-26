const rutas = require('../models/ruta');
const RutasCtrl = {};

RutasCtrl.getRutas = async (req, res)=>{
    const ruta = await rutas.find();
    res.json(ruta);
};
RutasCtrl.createRutas= async (req, res) =>{
    const ruta = new rutas({
        sector: req.body.sector,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    });
    await ruta.save();
    res.json('Estado: ruta Guardado');
};
RutasCtrl.getRuta = async (req, res) =>{
    console.log(req.params.id);
    const ruta = await rutas.findById(req.params.id);
    res.json(ruta);
};
RutasCtrl.editRuta = async (req, res) =>{
    const { id } = req.params;
    const ruta = {
        sector: req.body.sector,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    };
    await rutas.findByIdAndUpdate(id, {$set:ruta}, {new:true});
    res.json('status: ruta actualizado');
};
RutasCtrl.deleteRuta = async (req, res) =>{
    await rutas.findByIdAndRemove(req.params.id);
    res.json('status: ruta eliminado');
};


module.exports = RutasCtrl;