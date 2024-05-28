const router = require("express").Router();

const bookModel = require("../models/booksModel");

router.post("/add", async(req,respond) =>{
    try {
        const data = req.body;
        const newBook  = new bookModel(data);
        await newBook.save().then((res)=>{
            respond.status(200).json({message:"Book Added Successfully"})
        });
    } catch (error) {
        console.log(error)
        
    }

});

router.get("/getBooks", async(req,respond)=>{
    let books;
 try {
    books = await bookModel.find();
    respond.status(200).json({books});
} catch (error) {
    console.log(error);}
});


router.get("/getBooks/:id", async(req,respond)=>{
    let book;
    const id = req.params.id;
 try {
    book = await bookModel.findById(id);
    respond.status(200).json({book});
} catch (error) {
    console.log(error);}
})

router.put("/updateBook/:id", async(req,respond)=>{
    let book;
    const id = req.params.id;
    const {bookname, description, author, image, price} = req.body;
    
 try {
    book = await bookModel.findByIdAndUpdate(id,{
        bookname, 
        description, 
        author, 
        image, 
        price

    });
    await book.save().then(()=>respond.json({ message: "Data updated"}));
    
   
} catch (error) {
    console.log(error);}
})



router.delete("/deleteBook/:id", async(req,respond)=>{
    
    const id = req.params.id;
    
    
 try {
     await bookModel.findByIdAndDelete(id)
        

    
    .then(()=>respond.status(201).json({ message: "Data deleted Successfully"}));
    
   
} catch (error) {
    console.log(error);}
})


module.exports = router;
