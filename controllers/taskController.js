const {Task} = require('../models')

class taskController {

    static findAll(req, res, next) {
        Task.findAll()
        .then(data => {
            res.status(200).json({task: data})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static findOne(req, res, next) {
        let id = +req.params.id
        
        Task.findByPk(id)
        .then(data => {
            if(!data) {
                res.status(404).json({msg: 'No task found'})
            } else {
                res.status(200).json({task: data})
            }
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static create(req, res, next) {
        let task = {
            title: req.body.title,
            category: 'backlog',
            userId: req.body.userId
        }

        Task.create(task)
        .then(data => {
            res.status(201).json({task: data, msg: 'Task created successfully'})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static updateCategory(req, res, next) {
        let id = +req.params.id
        let newCategory = {
            category: req.body.category
        }

        Task.update(newCategory, {where: {id: id}})
        .then(data => {
            res.status(200).json({msg: 'Task updated successfully'})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }

    static delete(req, res, next) {
        let id = +req.params.id
        Task.destroy({where: {id: id}})
        .then(_=> {
            res.status(200).json({msg: 'Task deleted successfully'})
        })
        .catch(err => {
            res.status(500).json({msg: 'Internal server error'})
        })
    }
}

module.exports = taskController