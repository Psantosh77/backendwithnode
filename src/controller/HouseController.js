
const HouseModal = require("../models/HouseModel")
const RoomModal = require("../models/RoomModel")

const GetHouse = (async (req, res)=>{
    try {
        // Query houses and populate the 'room' field with room data
        const houses = await HouseModal.find({})
        res.json({data : houses});
      } catch (err) {
        console.error('Error fetching houses:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

const GetHouseWithRoom =(async (req, res)=>{
    try{
        const {houseId} = req.body;
        const resultHouse = await HouseModal.findById(houseId)
        const resultRoom = await RoomModal.find({house : houseId })
        res.json({ room:resultRoom})
    }
    catch (err) {
        console.error('Error fetching houses:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

const CreateHouse = (async(req, res) => {
    const {houseName , address , room } = req.body 
    try{
            const newHouse = new HouseModal({
            houseName: houseName,
            address : address,
        })
        
        await newHouse.save()
        .then(()=>{
           
            res.status(200).json({msg:"House is created successfully" , status:200 , statusCode :"ok" })
        })
        .catch((error)=>{
            console.log('Error creating user:', error)
            res.status(500).json({msg:"Someting went wrong" , status:500 , statusCode :false })
        })
    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = {
    GetHouse,
    CreateHouse,
    GetHouseWithRoom
}
