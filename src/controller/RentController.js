
const RentModal = require("../models/rentModel")
const moment = require('moment');


const data = {
    roomNumber: 1,
    generateDate: "15-01-2024",
    billMonth:"December",
    start:392,
    end:396,
    unit: 4,
    totalBill:32,
    roomRent: 1600,
    total: 1632,
    prevAdvance:0,
    prevBalance:1664,
    grandtotal:3264,
    paid:1600,
    paidOn:"15-01-2024",
    nextBalance:1664,
    nextAdvance:0,
    status:"paid till December with balance Rs.1664",
    remark:"",
}

const GetRentByRoomNoAndMonth = (async (req, res)=>{
    const {roomNumber , billMonth} = req.body

    let query = { roomNumber: roomNumber };

// If billMonth is provided, include it in the query
if (billMonth !== undefined) {
    query.billMonth = billMonth;
}
    const rent  = await RentModal.find(query)
    res.json({data : rent})
})


const CreateRent = (async(req, res) => {
    const {roomNumber , billMonth , start,end , unit  ,roomRent ,total ,prevAdvance,
        prevBalance,grandtotal, paid, paidOn, nextBalance,nextAdvance,status} = req.body
    try{
        const date = moment(billMonth, "MMMM");
        const previousMonth = date.subtract(1, 'months');
        const previousMonthName = previousMonth.format('MMMM');
        console.log(previousMonthName)
        const PrevMonthRent = await RentModal.find({roomNumber : roomNumber , billMonth:previousMonthName})
        const start =PrevMonthRent && PrevMonthRent.length > 0 && PrevMonthRent[0].end ? PrevMonthRent[0].end : 0
   
        console.log(PrevMonthRent , PrevMonthRent.length > 0 && PrevMonthRent[0].end)
        const unit      = end - start
        const totalBill = unit * 8
       

        const total = roomRent + totalBill
        const prevAdvance  = PrevMonthRent && PrevMonthRent.length > 0 && PrevMonthRent[0].nextAdvance ? PrevMonthRent[0].nextAdvance : 0
        const prevBalance = PrevMonthRent && PrevMonthRent.length > 0 && PrevMonthRent[0].nextBalance ? PrevMonthRent[0].nextBalance : 0
        const grandtotal = total - prevAdvance + prevBalance
       

        console.log(paid , grandtotal )
        const nextAdvance = (paid > grandtotal) ? paid - grandtotal : 0
        const nextBalance = paid < grandtotal ? grandtotal - paid : 0 
        
    
        const newRent = new RentModal({
            roomNumber: roomNumber,
            billMonth:billMonth,
            start:start,
            end:end,
            unit: unit ,
            totalBill:totalBill,
            roomRent:roomRent,
            total:total,
            prevAdvance:prevAdvance,
            prevBalance:prevBalance,
            grandtotal:grandtotal,
            paid:paid,
            paidOn:paidOn,
            nextBalance:nextBalance,
            nextAdvance:nextAdvance,
            status:`paid till ${billMonth} with ${nextAdvance > 0 ? `Advance Rs${nextAdvance}` : "" } ${nextBalance > 0 ? `Balance Rs${nextBalance}` : "" }` 
        }) 

        newRent.save().then(()=>{
            res.status(200).json({ msg:"Rent created sucessfully" });
        }).catch(()=>{
            res.status(500).json({ msg:"Something went wrong" });
        })

    }
    catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = {
    GetRentByRoomNoAndMonth,
    CreateRent
}