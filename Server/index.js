const express = require("express")//cont variable=require("variable")
const cors = require("cors")
const bodyparse = require("body-parser")
const mysql = require("mysql")
const crypto = require("crypto")
const { request } = require("http")
const { error } = require("console")

var storeex = express()
storeex.use(cors())  // use keyword is used to connect
storeex.use(bodyparse.json())
storeex.use(express.json())
storeex.use(bodyparse.urlencoded({ extended: true }))//for incrypt and decrypt
storeex.use(express.static('public'))

//pre defined function createConnection
let localdb = mysql.createConnection({
    host: "localhost",//for frentend and db
    port: 3306,
    user: "root",
    password: "Lakshmi@13",
    database: "projectdd"
})

//pre defined function connect
localdb.connect((error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("db connected")
    }
})

storeex.get('/getall', (request, response) => {
    let writequery = 'select * from register_table'
    localdb.query(writequery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })

})

storeex.post('/register', (request, response) => {

    let sno = crypto.randomUUID();
    let dates = new Date();
    var cdate = dates.toISOString().slice(0, 10)


    let { firstName, gmail, lastName, password, phoneNumber, role } = request.body
    let insertquery = `insert into register_table(s_no,created_by,created_date,first_name,gmail,last_name,password,phone_number,role,upadated_date,updated_by)values('${sno}','${sno}','${cdate}',?,?,?,?,?,?,'${cdate}','${sno}')`
    localdb.query(insertquery, [firstName, gmail, lastName, password, phoneNumber, role], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeex.post('/login', (request, response) => {
    let { gmail, password } = request.body
    let loginquery = 'select * from register_table where gmail=?'
    localdb.query(loginquery, [gmail], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else if (result.length > 0) {
            let dbgmail = result[0].gmail
            let dbpassword = result[0].password
            let id = result[0].s_no
            console.log(id)
            let role = result[0].role
            if (dbgmail === gmail && dbpassword === password) {
                response.send({ "status": "success", "id": id, "role": role })
            }
            else if (error) {
                response.send({ "status": "invalid" })
            }
        }
        else {
            response.send({ "status": "emptyset" })
        }
    })
})
storeex.post('/Admin', (request, response) => {

    let { productimage, productname, productprice, quantity, rating } = request.body

    let productquery = 'insert into admin_product(productimage,productname,productprice,quantity,rating)values(?,?,?,?,?)'
    localdb.query(productquery, [productimage, productname, productprice, quantity, rating], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeex.get('/getallproduct', (request, response) => {
    let writequery = 'select * from admin_product'
    localdb.query(writequery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })
})
storeex.get('/getone/:productname', (request, response) => {
    let { productname } = request.params
    console.log(productname)
    let getonequery = 'select * from admin_product where productname = ?'
    localdb.query(getonequery, [productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})
storeex.post('/adminproductdelete', (request, response) => {
    let productname = request.body.productname
    let deletequery = 'delete from admin_product where productname=?'
    localdb.query(deletequery, [productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeex.put('/update/:productname', (request, response) => {
    // console.log(productname)
    let { productimage, productprice, quantity, rating, productname } = request.body
    let updatequery = 'update admin_product set productprice=?,quantity=?,rating=? where productname = ?'
    localdb.query(updatequery, [productprice, quantity, rating, productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeex.post('/orderinsert', (request, response) => {
    let { phonenumber, location, address } = request.body
    let insertquery = `insert into order_details(phonenumber,location,address)values(?,?,?)`
    localdb.query(insertquery, [phonenumber, location, address], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeex.get('/getallorder', (request, response) => {
    let writequery = 'select * from order_details'
    localdb.query(writequery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })
})


storeex.post('/orderpickup', (request, response) => {
    let phonenumber = request.body.phonenumber
    let deletequery = 'delete from order_details where phonenumber=?'
    localdb.query(deletequery, [phonenumber], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
//pre defined function Listen
storeex.listen(3005, () => {
    console.log("your port is running in 3005")
})
