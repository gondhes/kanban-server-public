const {Task, User} = require('../models')

class taskController {

    static findAll(req, res, next) {
        Task.findAll({order: [['updatedAt', 'DESC']], include : User})
        .then(data => {
            res.status(200).json({task: data})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static edit(req, res, next) {
        let id = +req.params.id
        
        Task.findByPk(id)
        .then (data => {
            let currentCategory = data.category
            let update = {
                title : req.body.title,
                category : currentCategory
            }
            return Task.update(update, {where : {id}, returning:true})
        })
        .then (data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static create(req, res, next) {
        const {id} = req.loggedUser
        let task = {
            title: req.body.title,
            userId: id
        }

        Task.create(task)
        .then(data => {
            res.status(201).json({task: data, msg: 'Task created successfully'})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    // static updateCategory(req, res, next) {
    //     let id = +req.params.id
    //     let newCategory = {
    //         category: req.body.category
    //     }

    //     Task.update(newCategory, {where: {id: id}})
    //     .then(data => {
    //         res.status(200).json({msg: 'Task updated successfully'})
    //     })
    //     .catch(err => {
    //         res.status(500).json({msg: 'Internal server error'})
    //     })
    // }

    static delete(req, res, next) {
        let id = +req.params.id
        Task.destroy({where: {id}, returning : true})
        .then(_=> {
            res.status(200).json({msg: 'Task deleted successfully'})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static nextCategory (req, res, next) {
        let id = req.params.id
        Task.findByPk(id)
        .then(data => {
            let changeCategory;
            if (data.category === "backlog") {
                changeCategory = "todo"
            } else if (data.category === "todo") {
                changeCategory = "doing"
            } else if (data.category === "doing") {
                changeCategory = "completed"
            } else {
                changeCategory = data.category
            }

            let update = {
                title : data.title,
                category : changeCategory
            }
            return Task.update(update, {where : {id}, returning:true})
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static previousCategory (req, res, next) {
        let id = req.params.id
        Task.findByPk(id)
        .then(data => {
            let changeCategory;
            if (data.category === "todo") {
                changeCategory = "backlog"
            } else if (data.category === "doing") {
                changeCategory = "todo"
            } else if (data.category === "completed") {
                changeCategory = "doing"
            } else {
                changeCategory = data.category
            }

            let update = {
                title : data.title,
                category : changeCategory
            }
            return Task.update(update, {where : {id}, returning:true})
        })
        .then(data => {
            res.status(200).json({data})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }
}

module.exports = taskController