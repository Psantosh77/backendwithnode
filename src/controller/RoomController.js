
const RoomModal = require("../models/RoomModel")

const GetRoom = (async (req, res)=>{
    const users = await RoomModal.find().populate("house");
    res.json({data : users})
})



const CreateRooms = (async(req, res) => {
    const {roomNumber , allotedTo , house} = req.body
    try{
        const newRoom = new RoomModal({
            roomNumber: roomNumber,
            house:house,
            allotedTo:allotedTo

        }) 

        newRoom.save().then(()=>{
            res.status(200).json({ msg:"Room created sucessfully" });
        }).catch(()=>{
            res.status(500).json({ msg:"Something went wrong" });
        })

    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = {
    GetRoom,
    CreateRooms
}
