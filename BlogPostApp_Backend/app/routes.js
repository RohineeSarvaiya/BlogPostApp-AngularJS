const express = require("express")
const router = express.Router()
const DB = require("../database/connection.js")


router.get ("/", ( request , response ) => {
    DB.query(`SELECT * FROM blogs` , ( error , result ) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.json(result)
        }
    })
})


router.get("/:id" , ( request , response ) => {
    const id = request.params.id
    DB.query(`SELECT * FROM blogs WHERE id ="${id}" ` , ( error , result ) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.json(result)
        }
    })
})


router.post("/" , ( request , response ) => {
    const newBlog = request.body
    DB.query(`INSERT INTO  
    blogs(TITLE , AUTHOR , ABSTRACT , CATEGORIES , DESCRIPTION ) 
    VALUES ( "${newBlog.TITLE}",
             "${newBlog.AUTHOR}",
             "${newBlog.ABSTRACT}",
             "${newBlog.CATEGORIES}",
             "${newBlog.DESCRIPTION}"
     ) ` , (error , result ) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.json({status: "blog created"})
        }
    })
})


router.delete("/:id" , ( request , response ) => {
    const id = request.params.id
    DB.query(`DELETE FROM blogs WHERE id ="${id}" ` , ( error , result ) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.json({status: "blog deleted"})
        }
    })
})


router.put("/:id" , ( request , response ) => {
    const id = request.params.id
    const updatedBlog = request.body
    DB.query(`UPDATE blogs
    SET TITLE = "${updatedBlog.TITLE}",
    AUTHOR =  "${updatedBlog.AUTHOR}",
    ABSTRACT =  "${updatedBlog.ABSTRACT}",
    CATEGORIES =  "${updatedBlog.CATEGORIES}",
    DESCRIPTION =  "${updatedBlog.DESCRIPTION}"
    WHERE id ="${id}" ` , ( error , result ) => {
        if(error)
        {
            console.log(error)
        }
        else
        {
            response.json({status: "blog updated"})
        }
    })
})

module.exports = router