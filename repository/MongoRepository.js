let save = async(object) => {
    return new Promise((resolve, reject) => {
        object.save((err, success) => {
            if (err) reject(err)
            if (success) resolve(success)
        })
    })
}