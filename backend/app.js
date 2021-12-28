const express = require('express');
//importation du module express

//importation body-parser
const bodyParser = require('body-parser');
//importation du module mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//importation du module multer
const multer = require('multer');
//importation du module path
const path = require('path');

const { ifError } = require('assert');
const app = express();

//importation models
const Plat = require('./Models/plat');
const Chef = require('./Models/chef');
const User = require('./Models/user');

//Connect Application to DataBase
mongoose.connect('mongodb://localhost:27017/ta8ridDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
//create express application
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



//business logic Plats

app.get("/api/plats", (req, res) => {
    console.log('here into get all plats');
    Plat.find().then(
        (result) => {
            console.log('here after find plats', result);
            res.status(200).json(
                {
                    plats: result,
                    message: 'here all plats'
                }
            );
        }
    );

});

app.delete("/api/plats/:id", (req, res) => {
    console.log('here into delete plat by ID', req.params.id);

    // for (let i = 0; i < plats.length; i++) {
    //     if (plats[i].id == req.params.id) {
    //         plats.splice(i, 1);
    //         break;
    //     }

    // }
    Plat.deleteOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json(
                {
                    message: 'plat deleted'
                }
            );
        }
    )

});

app.get("/api/plats/:id", (req, res) => {
    console.log('here into get plat by ID', req.params.id);



    Plat.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json(
                {
                    plat: result,
                    message: 'plat founded'
                }
            );
        }
    )

});

app.post("/api/plats", (req, res) => {

    const platObj = new Plat({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        note: req.body.note
    });
    platObj.save((err, result) => {
        if (err) {
            console.log('here error into BE ', err);
        } else {
            res.status(200).json(
                {
                    message: 'plat added with success'
                }
            );
        }
    });


})

app.put("/api/plats/:id", (req, res) => {

    Plat.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            res.status(200).json(
                {
                    message: 'plat edited with success'
                }
            );
        }
    )
})

app.post("/api/plats/search", (req, res) => {


    //search into plat all objects where name = req.body.name && price = req.body.price
    // Plat.find({ name: req.body.name, price: req.body.price }).then(
    Plat.find({ price: { $gte: req.body.price } }
    ).then(
        (result) => {
            res.status(200).json(
                {
                    allPlats: result
                }
            );
        }
    )
    console.log('here into test', req.body);


})


// business logic Chefs


app.get("/api/chefs", (req, res) => {
    console.log('here into get all chefs');
    Chef.find().then(
        (result) => {
            res.status(200).json(
                {
                    chefs: result,
                    message: 'all chefs from DB'
                }
            )
        }
    )
});

app.post("/api/chefs", multer({ storage: storage }).single('img'), (req, res) => {
    
    url = req.protocol + '://' + req.get('host');
    
    const chefObj = new Chef({
        name: req.body.name,
        speciality: req.body.speciality,
        experience: req.body.experience,
        img: url + '/images/' + req.file.filename
    });
    chefObj.save((err, result) => {
        if (err) {
            console.log('here error into BD chef', err);
        }
        else {
            res.status(200).json({
                message: 'chef added with success'
            });
        }
    })

});

app.get("/api/chefs/:id", (req, res) => {
    Chef.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json(
                {
                    chef: result,
                    message: 'chef finded in DB'
                }
            );
        }
    )
});

app.delete("/api/chefs/:id", (req, res) => {
    Chef.deleteOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json(
                {
                    message: 'chef deleted with success'
                }
            )
        }
    )
});

app.put("/api/chefs/:id", (req, res) => {

    Chef.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            res.status(200).json(
                {
                    message: 'chef updated with success'
                }
            )
        }
    )
});

app.post("/api/chefs/search", (req, res) => {
    Chef.find({ speciality: req.body.speciality }).then(
        (result) => {
            console.log(result)
            res.status(200).json(
                {
                    allChefs: result
                }
            )
        }
    )
});


app.post("/api/users", (req, res) => {
    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {

            console.log(cryptedPwd);
            const userObj = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role
            });
            userObj.save((err, result) => {
                if (err) {
                    if (err.errors.email) {
                        res.status(200).json({
                            code: '0'
                        });
                    }

                }
                else {
                    res.status(200).json({
                        code: '1'
                    });
                }
            })
        }
    )




});

app.post("/api/users/login", (req, res) => {
    console.log(req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('here find user by email result', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                });
            }
            return bcrypt.compare(req.body.password, emailResult.password);
        }
    ).then(
        (pwdResult) => {
            if (!pwdResult) {
                res.status(200).json({
                    message: '1'
                });
            }

            User.findOne({ email: req.body.email }).then(
                (finalResult) => {
                    let userToSend = {
                        fName: finalResult.firstName,
                        lName: finalResult.lastName,
                        role: finalResult.role,
                        id: finalResult._id,
                    };
                    res.status(200).json({
                        message: '2',
                        user: userToSend
                    });
                }
            )

        }
    )


});


module.exports = app;