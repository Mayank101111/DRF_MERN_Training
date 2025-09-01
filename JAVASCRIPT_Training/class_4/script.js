    // // make all the primitive data types
    // let obj = {
    //     "sname": "jagmohan",
    //     "age": 26,
    //     email: "Jagmohanrai082@gmail.com",
    //     isExperience: true,
    //     status: null,
    //     getDegree: undefined,
    // }
    // console.log("Name ", obj.sname)
    // console.log("Age ", obj.age)
    // console.log("Degree ", obj.getDegree)
    // console.log("status ", obj.status)

    // console.log("object is ",obj)
    // //try to use some function and object inside object
    // let obj1 = {
    //     sname: "Rohan",
    //     age: 26,
    //     email: "rohanrai082@gmail.com",
    //     isTraining: function () {
    //         console.log("i am taking training at grow tech")
    //     },
    //     additionalInfo: {
    //         no: 8220994646,
    //         DOB: "19/04/2003"
    //     }

    // }
    // obj1.isTraining();
    // console.log("nested object",obj1.additionalInfo.no)



    //Key can be in special formate
    let obj2 = {
        sname: "Rohan",
        age: 26,
        email: "rohanrai082@gmail.com",
        // Phone no: 8979837492,
        "Phone no" : 748374928,
        isTraining: function () {
            console.log("i am taking training at grow tech")
        },
        additionalInfo: {
            no: 8220994646,
            DOB: "19/04/2003",
            isTraining: function () {
                console.log("i am taking training at grow tech in nested")
            },

        },
        10123: "Jagmohan",
        "Ram Syam": "Both are friends",
        "data-info": {
            id: 101,
            uName: "Jagmohan",
            123: function () {
                console.log("i am taking training at grow tech")
            },
        },
        "-syam": true,


    }
    obj2["data-info"][123]()
    // console.log(obj2["Phone no"])
    console.log(obj2["Phone no"])

    // Manish doubt clear
    const obj3 = {
        obj4 : {
            Hello : () => {
                let obj5 = {
                    id:1001
                }
                return obj5.id
            }
        }
    }
    let ans = obj3.obj4.Hello()
    console.log(ans)

    // vineet doubt clear
    // level 5 concept -- discuss later - swallow copy concepts
    // ignore for now
    let obj6 = {}
    let a = {}
    let b = {}
    obj6["a"] = "Hello"  
    obj6["b"] = "world"
    console.log(a)  // word aa rha h 


    // arpit doubt clear
    const obj7 = {
        fun : () => {
            let obj8 = {
                id : 300 // access only inside fun
            }
            return obj8 // obj8 ki scope fun ke andr h.agr id ko bahar acess krna to return krvana jaruri h fun ki scope ke andr s.
        }
    }
    const resultt = obj7.fun()
    console.log(resultt)    // 300

    // Paritosh doubt clear
    // objects made with const -- cannot be stored in other
    // we only change the property of an object. not the actual object.
    // ignore for now -- we will cover it in level 5 

    // only changing the property
    const obj8 = {
        age : 22
    }
    obj8.age = 20
    console.log(obj8)